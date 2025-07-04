# Meal Randomizer

## Description
Meal Randomizer is a web application designed to inspire your culinary adventures by randomly selecting dishes based on your preferred category or ingredients. With a dreamy, user-friendly interface, the app invites you to explore a variety of American and Mexican dishes, offering a delightful way to discover new meal ideas. Built with HTML, CSS (Tailwind and custom styles), and JavaScript, it features a visually appealing burgundy and tan theme, with a dark mode option for comfortable viewing.

## Features
- **Category and Ingredient Filtering**: Choose from categories like Appetizer, Side, Entree, and Mexican Food, or filter by specific ingredients (e.g., chicken, tortilla) to find dishes that match your preferences.
- **Floating Concept Bubbles**: Applied filters are displayed as animated, rounded bubbles that float gently above the main content, with close buttons to remove filters.
- **Dynamic UI Responses**: Buttons and ingredient cards animate on click (scale, bounce, ripple effects) for an engaging experience, with a subtle click sound on intro screen buttons.
- **Randomized Visual Refresh**: Each press of the "Randomize Meal" button changes the background gradient, animates the result display, and shuffles ingredient cards for a fresh look.
- **Copy Search Prompt**: Copy a search-friendly prompt (e.g., “Search for: recipe for Tacos al Pastor”) to the clipboard with a single click, with visual feedback confirming the action.
- **Dark Mode Toggle**: Switch between light (burgundy/tan) and dark themes, with preferences saved in `localStorage` for persistence.
- **Responsive Design**: Optimized for mobile and desktop, with centered content and adaptive layouts.
- **Extensive Dish Database**: Includes a variety of dishes, with 20 Mexican dishes (e.g., Tacos al Pastor, Churros) and American classics, stored in `us_dishes.csv`.

## Benefits
- **Inspiration for Meals**: Discover new dishes tailored to your tastes, perfect for meal planning or culinary exploration.
- **Intuitive and Fun**: The dreamy interface, animated bubbles, and dynamic visuals make finding a meal an enjoyable experience.
- **Time-Saving**: Quickly generate recipe search prompts and copy them to the clipboard for easy use in search engines or recipe apps.
- **Customizable**: Filter by category or ingredient to focus on specific cuisines or dietary preferences.
- **Aesthetic Appeal**: The burgundy/tan theme, smooth animations, and dark mode option create a visually stunning and comfortable experience.
- **Accessible**: Responsive design ensures usability across devices, with accessibility features like `aria-label` for the dark mode toggle.

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
   - Click “Randomize Meal” to generate a random dish, triggering a new background gradient and result animation.
   - Use the “Copy Search Prompt” button to copy a recipe search query to your clipboard.
   - Toggle dark mode via the header button for a different visual experience.

## Notes
- The app uses `us_dishes.csv` with comma-separated, quoted `main_ingredients` for reliable parsing.
- For production, replace the simulated CSV data in the HTML with a fetch to the hosted CSV file.
- Future enhancements could include dish images, a favorites list, or integration with a recipe API.

Embark on a culinary journey with Meal Randomizer, where every click brings you closer to your next delicious meal!