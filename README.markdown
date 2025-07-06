# Meal Randomizer App

This is a simple web-based application that helps you randomize full meal ideas, including an appetizer, an entree, and a side dish. You can also filter entree suggestions based on specific ingredients you have on hand. It features a modern, responsive design with a light/dark mode toggle.

## Features

* **Randomize Full Meal:** Get a complete meal idea (appetizer, entree, side) with a single click.
* **Filter by Entree Ingredient:** Specify an ingredient you want to use, and the app will suggest an entree containing it, along with a random appetizer and side.
* **Clickable Food Items:** Quickly select a main entree ingredient from a list of popular options to filter your meal.
* **Recipe Prompt Generation:** The app generates a detailed search query or AI prompt for your selected meal, making it easy to find recipes online.
* **Light/Dark Mode:** Toggle between a light and dark theme for comfortable viewing.

## How to Use

1.  **Randomize Meal:** Click the "Randomize Full Meal" button to get a random appetizer, entree, and side dish combination.
2.  **Filter by Ingredient:**
    * Type an ingredient (e.g., "Eggplant," "Chicken," "Lentils") into the "Have an entree ingredient to use?" input field.
    * Click "Find Meal with Entree Ingredient" to get a meal where the entree contains that ingredient.
3.  **Click Food Item:** Below the input box, click on any of the "main entree food item" buttons (e.g., "Lentils," "Chicken," "Eggplant") to get a meal suggestion centered around that specific entree ingredient.
4.  **Recipe Prompt:** After a meal is selected, a "Recipe Search / AI Prompt" will appear at the bottom. You can copy this text and use it in a search engine or an AI model to find detailed recipes for your chosen meal.
5.  **Toggle Theme:** Use the sun/moon toggle switch in the top right corner to switch between light and dark mode.

## Customizing Your Meals

The meal data is stored in `dishes.csv`. You can open this file in any text editor or spreadsheet program and modify it to add, remove, or change meal options.

The columns are:
* `Type`: Must be `appetizer`, `entree`, or `side`.
* `Name`: The name of the dish.
* `MainIngredients`: A comma-separated list of key ingredients (e.g., `"chicken,broccoli,bell peppers"`).
* `Tags`: A comma-separated list of descriptive tags (e.g., `"vegetarian,healthy,soup"`).

**Important:** When editing `MainIngredients` or `Tags`, ensure ingredients/tags are separated by commas. If an ingredient or tag itself contains a comma, you would typically enclose the entire field in double quotes (e.g., `"sweet potato, white"`), but for simplicity, try to avoid commas within individual ingredient/tag names if possible.

## Deployment to GitHub Pages

To deploy this application to GitHub Pages:

1.  **Create a new GitHub Repository:**
    * Go to [GitHub](https://github.com/) and create a new repository.
    * Give it a name (e.g., `meal-randomizer`).
    * Initialize it with a README (optional, as you'll replace it).
2.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
    cd YOUR_REPOSITORY_NAME
    ```
3.  **Add the Files:**
    * Save the `index.html`, `style.css`, `script.js`, `dishes.csv`, and `README.md` files into the root of your cloned repository folder.
4.  **Commit and Push:**
    ```bash
    git add .
    git commit -m "Initial commit of meal randomizer app"
    git push origin main
    ```
    (Or `master` if your default branch is `master`)
5.  **Enable GitHub Pages:**
    * Go to your repository on GitHub.
    * Click on "Settings" (usually near the top right).
    * In the left sidebar, click "Pages."
    * Under "Build and deployment," select "Deploy from a branch."
    * For "Branch," choose `main` (or `master`) and select `/ (root)` for the folder.
    * Click "Save."
6.  **Access Your App:**
    * GitHub Pages will build and deploy your site. This might take a few minutes.
    * Once deployed, the URL will be displayed on the "Pages" settings page (it will typically be `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`).

Now you have a fully functional Meal Randomizer app hosted on GitHub Pages!
