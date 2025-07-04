# Meal Randomizer

## Description
Meal Randomizer is a web application designed to inspire your culinary adventures by generating a complete meal combo consisting of an appetizer, entree, and side, tailored to your chosen category or ingredient. With a dreamy, user-friendly interface, the app offers a delightful way to explore American and Mexican cuisines, presenting each dish with a description and a combined recipe search prompt. Built with HTML, CSS (Tailwind and custom styles), and JavaScript, it features a visually appealing burgundy and tan theme, with a dark mode option for comfortable viewing.

## Features
- **Meal Combo Generation**: Randomly selects an appetizer, entree, and side from the chosen category (e.g., Mexican Food) or all categories, with optional ingredient filtering to ensure all dishes include the selected ingredient.
- **Floating Concept Bubbles**: Displays applied filters (category and ingredient) as animated, rounded bubbles that float gently above the main content, with close buttons to remove filters.
- **Dynamic UI Responses**: Buttons and ingredient cards animate on click (scale, bounce, ripple effects) for an engaging experience, with a subtle click sound on intro screen buttons.
- **Randomized Visual Refresh**: Each press of the "Randomize Meal" button changes the background gradient, animates the result display, and shuffles ingredient cards for a fresh look.
- **Copy Search Prompt**: Copies a combined search prompt (e.g., “Search for: recipe for Mozzarella Sticks, Hamburger, and French Fries”) to the clipboard with a single click, with visual feedback confirming the action.
- **Dark Mode Toggle**: Switches between light (burgundy/tan) and dark themes, with preferences saved in `localStorage` for persistence.
- **Responsive Design**: Optimized for mobile and desktop, with centered content, adaptive layouts, and bubble-like text backgrounds for readability.
- **Extensive Dish Database**: Includes a variety of dishes, with 20 Mexican dishes (e.g., Tacos al Pastor, Churros) and American classics, stored in `us_dishes.csv`.

## Benefits
- **Meal Planning Made Easy**: Get a complete meal idea with appetizer, entree, and side, perfect for planning dinners or exploring new cuisines.
- **Inspiration for Culinary Creativity**: Discover curated meal combos tailored to your preferences, sparking ideas for your next meal.
- **Time-Saving**: Quickly generate and copy a recipe search prompt for the entire meal, streamlining the process of finding recipes online.
- **Customizable**: Filter by category or ingredient to focus on specific cuisines or dietary needs, with visual feedback via floating bubbles.
- **Aesthetic Appeal**: The burgundy/tan theme, smooth animations, bubble-like text containers, and dark mode option create a visually stunning and comfortable experience.
- **Accessible**: Responsive design ensures usability across devices, with accessibility features like `aria-label` for the dark mode toggle and high-contrast text.

## Usage
1. **Setup**:
   - Host `meal_randomizer.html`, `styles.css`, and `us_dishes.csv` on a web server.
   - Update the JavaScript in `meal_randomizer.html` to fetch `us_dishes.csv`:
     ```javascript
     fetch('us_dishes.csv').then(response => response.text()).then(data => Papa.parse(data, ...));
     ```
   - Ensure dependencies (PapaParse, Tailwind CSS) are loaded via CDNs.

2. **Interaction**:
   - Start on the intro screen and click “Savor by Ingredient,” “Surprise Me,” or “Explore Categories” to begin.
   - Select a category (e.g., Mexican Food) or ingredient (e.g., tortilla) to filter dishes; filters appear as floating bubbles.
   - Click “Randomize Meal” to generate a meal combo (appetizer, entree, side), triggering a new background gradient and result animation.
   - Use the “Copy Search Prompt” button to copy a combined recipe search query to your clipboard.
   - Toggle dark mode via the header button for a different visual experience.

## Notes
- The app uses `us_dishes.csv` with comma-separated, quoted `main_ingredients` for reliable parsing.
- For production, replace the simulated CSV data in the HTML with a fetch to the hosted CSV file.
- Future enhancements could include dish images, a favorites list, or integration with a recipe API.
- For categories with limited dish types (e.g., Mexican Food), the app allows dishes to be selected across types to ensure a complete combo.

Embark on a culinary journey with Meal Randomizer, where every click crafts a delicious meal combo tailored to your tastes!