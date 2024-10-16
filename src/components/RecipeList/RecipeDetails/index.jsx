import { Button, CardMedia, Dialog, DialogActions, DialogTitle, Typography } from "@mui/material";
import { useState } from "react";
import classes from '../recipeList.module.css';

function RecipeDetails({ recipeDetail, setRecipeDetail, displayRecipeDetail, setDisplayRecipeDetail }) {
    const [enableFullScreen, setEnableFullScreen] = useState(false)
    return (
        <>
            <Dialog
                fullScreen={enableFullScreen}
                maxWidth={'xl'}
                open={displayRecipeDetail}
                onClose={() => { setDisplayRecipeDetail(false) }}
                aria-labelledby="todo-dialog-title"
                role="dialog"
            >
                <div style={{ background: "black", color: 'white', marginBottom: '10px', textAlign: 'center', width: '100%' }}>
                    <DialogTitle id="todo-dialog-title" style={{ display: 'inline-block', fontSize: '35px' }}>{recipeDetail?.name}</DialogTitle>
                    <DialogActions style={{ display: 'inline-block', float: 'right' }}>
                        <Button onClick={() => {
                            setRecipeDetail(null)
                            setDisplayRecipeDetail(false)
                        }}
                            sx={{
                                background: "white", color: 'black',
                            }}>X</Button>
                    </DialogActions>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                    <div style={{ display: 'inline-block', margin: '10px' }} >
                        <CardMedia
                            component="img"
                            image={recipeDetail?.image}
                            alt={recipeDetail?.name}
                            sx={enableFullScreen
                                ? {
                                    marginLeft: "auto",
                                    height: "413px",
                                    width: "416px",
                                    borderRadius: "20px",
                                    display: 'inline-block',
                                    boxShadow: '5px 5px 3px'
                                }
                                : {
                                    marginLeft: "11px",
                                    height: "270px",
                                    width: "268px",
                                    borderRadius: "20px",
                                    display: 'inline-block',
                                    boxShadow: '5px 5px 3px'
                                }
                            }
                            className={classes.dialogImg}
                        />
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', marginLeft: enableFullScreen ? '200px' : '10px' }} className={classes.detalsDiv}>
                        <div style={{ margin: enableFullScreen ? '10px 50px' : '10px' }} >
                            <ul>
                                <li><Typography variant="body2" sx={{ color: 'text.primary', fontSize: enableFullScreen ? '1.5rem' : '1rem', }}>
                                    Cuisine : {recipeDetail?.cuisine}
                                </Typography></li>
                                <li><Typography variant="body2" sx={{ color: 'text.primary', fontSize: enableFullScreen ? '1.5rem' : '1rem', }}>
                                    Rating : {recipeDetail?.rating}
                                </Typography></li>
                                <li><Typography variant="body2" sx={{ color: 'text.primary', fontSize: enableFullScreen ? '1.5rem' : '1rem', }}>
                                    Calories : {recipeDetail?.caloriesPerServing}
                                </Typography></li>
                                <li><Typography variant="body2" sx={{ color: 'text.primary', fontSize: enableFullScreen ? '1.5rem' : '1rem', }}>
                                    Cook Time : {recipeDetail?.cookTimeMinutes} min
                                </Typography></li>
                                <li><Typography variant="body2" sx={{ color: 'text.primary', fontSize: enableFullScreen ? '1.5rem' : '1rem', }}>
                                    Difficulty : {recipeDetail?.difficulty}
                                </Typography></li>
                                <li><Typography variant="body2" sx={{ color: 'text.primary', fontSize: enableFullScreen ? '1.5rem' : '1rem', }}>
                                    Review Count : {recipeDetail?.reviewCount}
                                </Typography></li>
                                {enableFullScreen
                                    ? <>
                                        <li><Typography variant="body2" sx={{ display: 'inline-block', color: 'text.primary', fontSize: enableFullScreen ? '1.7rem' : '1rem', }}>
                                            Meal Type:
                                        </Typography>
                                            {
                                                recipeDetail?.mealType.map((mt, indx) => (
                                                    <Typography key={indx} variant="body2" sx={{ display: 'inline-block', color: 'text.primary', fontSize: '1.5rem', paddingLeft: '20px', }}>
                                                        {mt + ((indx === recipeDetail?.mealType.length - 1) ? '. ' : ',')}
                                                    </Typography>
                                                ))

                                            }</li>
                                        <li><Typography variant="body2" sx={{ display: 'inline-block', color: 'text.primary', fontSize: enableFullScreen ? '1.7rem' : '1rem', }}>
                                            Tags:
                                        </Typography>
                                            {
                                                recipeDetail?.tags.map((tag, indx) => (

                                                    <Typography key={indx} variant="body2" sx={{ display: 'inline-block', color: 'text.primary', fontSize: '1.5rem', paddingLeft: '20px', }}>
                                                        {tag + ((indx === recipeDetail?.tags.length - 1) ? '. ' : ',')}
                                                    </Typography>

                                                ))

                                            }</li>
                                    </>
                                    : null
                                }
                            </ul>
                        </div>
                    </div>

                </div>
                {enableFullScreen
                    ? <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
                        <div style={{ marginLeft: '20px', width: '30%', border: '1px solid grey', borderRadius: '10px' }} className={classes.ingridientsDiv}>
                            <Typography variant="body2" sx={{ color: 'white', paddingLeft: '30px', background: 'grey', fontSize: '2rem', borderRadius: '10px' }}>
                                Ingredients :
                            </Typography>
                            <ul>
                                {
                                    recipeDetail?.ingredients.map((ing, indx) => (

                                        <li key={'ing' + indx}><Typography key={indx} variant="body2" sx={{ color: 'text.primary', fontSize: '1.5rem', paddingLeft: '20px', }}>
                                            {ing}
                                        </Typography></li>

                                    ))

                                }</ul>
                        </div>
                        <div style={{ width: '60%', border: '1px solid grey', borderRadius: '10px' }} className={classes.ingridientsDiv}>
                            <Typography variant="body2" sx={{ color: 'white', paddingLeft: '30px', background: 'grey', fontSize: '2rem', borderRadius: '10px' }}>
                                Instructions :
                            </Typography>
                            <ul>
                                {
                                    recipeDetail?.instructions.map((inst, indx) => (

                                        <li key={'mt' + indx}><Typography key={indx} variant="body2" sx={{ color: 'text.primary', paddingLeft: '20px', fontSize: '1.5rem', }}>
                                            {inst}
                                        </Typography></li>

                                    ))

                                }
                            </ul>
                        </div>
                    </div>
                    : <DialogActions >
                        <Button onClick={() => {
                            setEnableFullScreen(!enableFullScreen)
                        }}
                            sx={{
                                background: 'black',
                                color: 'white',
                                opacity: 0.7,

                                ':hover': {
                                    opacity: 1,
                                }
                            }}>Detailed Recipe</Button>
                    </DialogActions>
                }
            </Dialog>
        </>

    )
}
export default RecipeDetails;