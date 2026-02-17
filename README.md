# Chef Claude

Chef Claude is a web application that helps users generate creative and practical recipes based on ingredients they already have. By leveraging Anthropic's Claude LLM, it instantly creates tailored recipe suggestions with clear step-by-step instructions.

## Features
- User ingredient input (add/remove items dynamically)
- AI-powered recipe generation via Anthropic Claude
- Clean, responsive display of recipes and cooking instructions

## Tech Stack
- React (frontend)
- Node.js (optional backend if API proxy or auth is added)
- Anthropic AI SDK (for Claude LLM integration)

## Getting Started

### Install
npm install

### Run
npm run dev

## Environment Variables
Create a .env file with:
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here

## Folder Structure

/src
  ├── components
  │   ├── Header.jsx          # Application header (logo + title)
  │   ├── Main.jsx            # Core app layout, state, and interaction logic
  │   ├── IngredientsList.jsx # Displays the list of user-added ingredients
  │   └── ClaudeRecipe.jsx    # Component for displaying the AI-generated recipe
  ├── images                  # Static assets (e.g., logo, icons)
  ├── index.css               # Global styles and resets
  ├── main.jsx                # Entry point – renders the React app to the DOM
  └── App.jsx                 # Root component that composes the application

## Roadmap
- Add user authentication and saved ingredients/recipes
- Implement favorite recipes and history
- Add dietary filters and AI-powered meal planning suggestions