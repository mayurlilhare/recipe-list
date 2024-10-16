import { useState } from "react";
import UseFetch from "../CustomHook/UseFetch";
import RecipeItem from "./RecipeItem/index";
import classes from './recipeList.module.css';
import RecipeDetails from "./RecipeDetails/index";
function RecipeList() {

    const { data, error, loading } = UseFetch('https://dummyjson.com/recipes');
    const [displayRecipeDetail, setDisplayRecipeDetail] = useState(false);
    const [recipeDetail, setRecipeDetail] = useState({});

    // console.log(data?.recipes);
    // console.log(data?.recipes?.length);

    if (loading)
        return <h1>Loading Please Wait!!!</h1>

    if (error)
        return <h1>Some error occured!!!</h1>

    function handleFetchDetails(currentrecipe) {
        // console.log(currentrecipe);
        setDisplayRecipeDetail(true);
        setRecipeDetail(currentrecipe)
    }
    return (
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
            <h1>Recipe List</h1>
            <div className={classes.recipeList}>
                {
                    data && data?.recipes?.length > 0
                        ? data?.recipes.map(singleRecipe => <RecipeItem
                            key={singleRecipe?.id} item={singleRecipe}
                            handleFetchDetails={handleFetchDetails} />)
                        : <h6>List Is Empty!!!</h6>
                }
            </div>
            {
                displayRecipeDetail
                    ? <RecipeDetails
                        key={recipeDetail?.id}
                        recipeDetail={recipeDetail}
                        setRecipeDetail={setRecipeDetail}
                        displayRecipeDetail={displayRecipeDetail}
                        setDisplayRecipeDetail={setDisplayRecipeDetail}
                        className={classes.detailsDialog} />
                    : null
            }
        </div>
    )
}

export default RecipeList;