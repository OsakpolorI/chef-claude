import { useState } from "react"

import IngredientsList from "./IngredientsList.jsx"
import ClaudeRecipe from "./ClaudeRecipe.jsx"
import { getRecipeFromChefClaude } from "../ai.js"

export default function Main() {

    const [ingredients, setIngredients] = useState(['orgeano', 'chicken', 'parm', 'lettuce'])

    const [recipe, setRecipe] = useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }


    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 &&
                <IngredientsList 
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }
            {recipe != "" && <ClaudeRecipe />}
        </main>
    )
}