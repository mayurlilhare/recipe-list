import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import classes from '../recipeList.module.css';

function RecipeItem({ item, handleFetchDetails }) {

    return (

        <Card sx={{ width: 350 }}>
            <CardHeader
                title={item?.name}
                className={classes.recipeHeader}
                style={{ overflow:'hidden'}}
            />
            <CardMedia
                component="img"
                height="194"
                image={item?.image}
                alt={item?.name}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary', display: 'inline-block', float: 'left' }}>
                    Cuisine : {item?.cuisine}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', display: 'inline-block', float: 'right' }}>
                    Rating : {item?.rating}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    onClick={() => handleFetchDetails(item)}
                    sx={{
                        background: 'black',
                        color: 'white',
                        opacity: 0.7,
                        
                        ':hover': {
                            opacity: 1,
                        }
                    }}>Details</Button>
            </CardActions>
        </Card>

    )
}
export default RecipeItem;