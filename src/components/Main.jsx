import React from "react"
import IngredientsList from "./IngredientsList"
import Recipe from "./Recipe"
import { getRecipeFromMistral } from "./ai"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const [recipe, setRecipe] = React.useState("")

    React.useEffect(()=> {
        if(recipe !== "" && recipeSection.current!==null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    const recipeSection = React.useRef(null)
    console.log(recipeSection)

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
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
                    ref = {recipeSection}
                />
            }

            {recipe && <Recipe recipe={recipe} />}
        </main>
    )
}