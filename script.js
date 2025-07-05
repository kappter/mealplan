// Define the meal dataset structure (will be populated from CSV)
const dishes = {
    appetizers: [],
    entrees: [],
    sides: []
};

// Get references to HTML elements
const appetizerDisplay = document.getElementById('appetizer-display');
const entreeDisplay = document.getElementById('entree-display');
const sideDisplay = document.getElementById('side-display');
const mealCategory = document.getElementById('meal-category');
const mealIngredients = document.getElementById('meal-ingredients');
const randomizeButton = document.getElementById('randomize-button');
const baseIngredientInput = document.getElementById('base-ingredient-input');
const filterButton = document.getElementById('filter-button');
const foodItemsContainer = document.getElementById('food-items-container');
const promptDisplay = document.getElementById('prompt-display');

let allEntreeIngredients = []; // This will be populated after CSV is loaded

/**
 * Parses a CSV string into an array of objects.
 * Assumes the first row is the header.
 * Handles comma-separated values within "MainIngredients" and "Tags" columns.
 * @param {string} csvString - The CSV data as a string.
 * @returns {Array<Object>} An array of objects representing the CSV data.
 */
function parseCSV(csvString) {
    const lines = csvString.trim().split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    const data = [];

    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i];
        if (!currentLine) continue; // Skip empty lines

        // Simple split for now, assuming no commas within quoted fields
        // For more robust CSV parsing, a library or more complex regex would be needed.
        const values = currentLine.split(',').map(value => value.trim());
        const rowObject = {};

        headers.forEach((header, index) => {
            let value = values[index];
            if (header === 'MainIngredients' || header === 'Tags') {
                // Split these into arrays, handling empty strings
                rowObject[header] = value ? value.split(',').map(item => item.trim()) : [];
            } else {
                rowObject[header] = value;
            }
        });
        data.push(rowObject);
    }
    return data;
}

/**
 * Fetches the dishes.csv file, parses it, and populates the dishes object.
 */
async function loadDishesFromCSV() {
    try {
        entreeDisplay.textContent = "Entree: Loading meals..."; // Show loading message
        const response = await fetch('dishes.csv');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvText = await response.text();
        const parsedData = parseCSV(csvText);

        // Clear existing data before populating
        dishes.appetizers = [];
        dishes.entrees = [];
        dishes.sides = [];

        // Populate the dishes object based on the 'Type' column
        parsedData.forEach(item => {
            const dish = {
                name: item.Name,
                mainIngredients: item.MainIngredients,
                tags: item.Tags
            };
            if (item.Type === 'appetizer') {
                dishes.appetizers.push(dish);
            } else if (item.Type === 'entree') {
                dishes.entrees.push(dish);
            } else if (item.Type === 'side') {
                dishes.sides.push(dish);
            }
        });

        // After loading, extract entree ingredients for buttons
        allEntreeIngredients = [...new Set(dishes.entrees.flatMap(dish => dish.mainIngredients))];
        renderFoodItemButtons(); // Render buttons once data is loaded

        // Initial randomization to show something on load
        randomizeFullMeal();

    } catch (error) {
        console.error("Failed to load dishes from CSV:", error);
        entreeDisplay.textContent = "Entree: Error loading meals. Please check console.";
        appetizerDisplay.textContent = "Appetizer: N/A";
        sideDisplay.textContent = "Side: N/A";
        mealCategory.textContent = "";
        mealIngredients.textContent = "";
        promptDisplay.textContent = "Error loading meal data.";
    }
}

/**
 * Renders the clickable food item buttons for entree ingredients.
 */
function renderFoodItemButtons() {
    foodItemsContainer.innerHTML = ''; // Clear existing buttons
    // Sort ingredients alphabetically for consistent display
    allEntreeIngredients.sort().forEach(ingredient => {
        const button = document.createElement('button');
        button.textContent = ingredient.charAt(0).toUpperCase() + ingredient.slice(1); // Capitalize first letter
        button.className = 'food-item-button bg-purple-100 text-purple-800 font-semibold py-2 px-4 rounded-xl shadow-md text-sm flex items-center justify-center';
        button.dataset.ingredient = ingredient; // Store the ingredient in a data attribute
        button.addEventListener('click', () => {
            randomizeFullMeal(ingredient); // Call randomize with the specific entree ingredient
        });
        foodItemsContainer.appendChild(button);
    });
}

/**
 * Randomizes and displays a full meal (appetizer, entree, side).
 * @param {string|null} filterEntreeIngredient - Optional ingredient to filter entrees by.
 */
function randomizeFullMeal(filterEntreeIngredient = null) {
    let selectedAppetizer;
    let selectedEntree;
    let selectedSide;
    let filteredEntrees = dishes.entrees;

    // Ensure data is loaded before proceeding
    if (dishes.entrees.length === 0) {
        entreeDisplay.textContent = "Entree: Meal data not loaded yet. Please wait or refresh.";
        return;
    }

    // 1. Select Entree (with optional filter)
    if (filterEntreeIngredient) {
        const lowerCaseFilter = filterEntreeIngredient.toLowerCase();
        filteredEntrees = dishes.entrees.filter(entree =>
            entree.mainIngredients.some(ing => ing.toLowerCase().includes(lowerCaseFilter))
        );
    }

    if (filteredEntrees.length === 0) {
        appetizerDisplay.textContent = "Appetizer: N/A";
        entreeDisplay.textContent = `Entree: No entrees found with "${filterEntreeIngredient}". Try another!`;
        sideDisplay.textContent = "Side: N/A";
        mealCategory.textContent = "";
        mealIngredients.textContent = "";
        promptDisplay.textContent = "No prompt generated.";
        return;
    }

    selectedEntree = filteredEntrees[Math.floor(Math.random() * filteredEntrees.length)];

    // 2. Select Appetizer (randomly from all appetizers)
    selectedAppetizer = dishes.appetizers[Math.floor(Math.random() * dishes.appetizers.length)];

    // 3. Select Side (randomly from all sides)
    selectedSide = dishes.sides[Math.floor(Math.random() * dishes.sides.length)];

    // Update the display
    appetizerDisplay.textContent = `Appetizer: ${selectedAppetizer.name}`;
    entreeDisplay.textContent = `Entree: ${selectedEntree.name}`;
    sideDisplay.textContent = `Side: ${selectedSide.name}`;

    // Combine ingredients and tags for the overall meal description
    const allIngredients = [
        ...selectedAppetizer.mainIngredients,
        ...selectedEntree.mainIngredients,
        ...selectedSide.mainIngredients
    ];
    const uniqueIngredients = [...new Set(allIngredients)].map(ing => ing.charAt(0).toUpperCase() + ing.slice(1)).join(', ');

    const allTags = [
        ...(selectedAppetizer.tags || []),
        ...(selectedEntree.tags || []),
        ...(selectedSide.tags || [])
    ];
    const uniqueTags = [...new Set(allTags)].join(', ');

    mealCategory.textContent = `Overall Tags: ${uniqueTags || 'None'}`;
    mealIngredients.textContent = `Key Ingredients for Meal: ${uniqueIngredients}`;

    // Generate a comprehensive search string or AI prompt
    const prompt = `Find recipes for a meal consisting of: Appetizer - "${selectedAppetizer.name}" (main ingredients: ${selectedAppetizer.mainIngredients.join(', ')}), Entree - "${selectedEntree.name}" (main ingredients: ${selectedEntree.mainIngredients.join(', ')}), and Side - "${selectedSide.name}" (main ingredients: ${selectedSide.mainIngredients.join(', ')}). Focus on a harmonious meal plan.`;
    promptDisplay.textContent = prompt;
}

// Event Listeners
randomizeButton.addEventListener('click', () => randomizeFullMeal());
filterButton.addEventListener('click', () => {
    const ingredient = baseIngredientInput.value.trim();
    if (ingredient) {
        randomizeFullMeal(ingredient);
    } else {
        appetizerDisplay.textContent = "Appetizer: N/A";
        entreeDisplay.textContent = "Entree: Please enter an ingredient to filter!";
        sideDisplay.textContent = "Side: N/A";
        mealCategory.textContent = "";
        mealIngredients.textContent = "";
        promptDisplay.textContent = "No prompt generated.";
    }
});

// Initial load of dishes from CSV when the page loads
document.addEventListener('DOMContentLoaded', loadDishesFromCSV);

// Optional: Clear input when randomize button is clicked after a filter
randomizeButton.addEventListener('click', () => {
    baseIngredientInput.value = '';
});
