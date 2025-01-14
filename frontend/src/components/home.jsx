import React, { useState, useEffect } from 'react';
import RecipePreview from './recipePreview.jsx';

export default function Home() {

    let [recipes, setRecipes] = useState();

    useEffect(() => {
        const loadRecipes = () => {
            fetch("http://localhost:3001/api/recipe/")
            .then(res => res.json())
            .then(jsondata => setRecipes(jsondata))
        }
        loadRecipes()
    }, []); // [] --> our code will only be ran once when our component is initially rendered

    return (
        <div>
            <p id="important-text">Welcome to Grandma's Lazy Susan!</p>
            <section className="text">
                <p>Growing up, I would go to my grandparents' house for dinner every day after school.
                    When I entered the kitchen, I would always be met with a flurry of action —
                    my grandmother chopping meat and veggies left and right, sounds of sizzling emanating 
                    from the wok, and the smell of sauces and spices spreading throughout the room.
                    Our family of ten would gather around the table and feast on the dishes made by my grandmother,
                    taking turns grabbing items from the lazy susan. 
                </p>
                <p>This website will show you a little bit of what it was like in Grandma's Kitchen. Enjoy!</p>
                <br/>
            </section>
            <h1 className="home">The Lazy Susan</h1>
            <div className="recipesFormat" className="grid-container">
                {recipes ? (
                    recipes.map(recipe => 
                    <RecipePreview 
                        name = {recipe.recipeName}
                        image = {recipe.recipeImage}
                    /> // calling the component
                ))
                : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}