import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import useFetch from './custom hooks/useFetch';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        width: '85%',
    },
    loader: {
        position: 'absolute',
        top: '0.1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
    },
    item: {
        marginTop: '3rem',
        width: '100%',
    },
    itemInfo: {
        display: 'flex',

        justifyContent: 'space-between',
    },
    imgContainer: {},
    info: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '3rem',
        marginLeft: '1rem',
    },
    span: {
        marginBottom: '2rem',
    },
});

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

function ItemDetails({ id }) {
    const classes = useStyles();
    const history = useHistory();
    const { isLoading, data } = useFetch(`${url}${id}`);

    const handleclick = () => {
        history.push('/');
    };

    if (isLoading) {
        return (
            <div className={classes.loader}>
                <CircularProgress size='150px' thickness={2.5} />
            </div>
        );
    } else {
        return (
            <div className={classes.root}>
                <Button
                    variant='outlined'
                    color='secondary'
                    style={{ width: '30%', alignSelf: 'center' }}
                    onClick={handleclick}>
                    Back Home
                </Button>
                {data.drinks.map((cur) => {
                    const {
                        strDrink,
                        idDrink,
                        strCategory,
                        strAlcoholic,
                        strGlass,
                        strDrinkThumb,
                        strInstructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                    } = cur;

                    return (
                        <Card key={id} className={classes.item}>
                            <h1
                                style={{
                                    textAlign: 'center',
                                    marginBottom: '1.5rem',
                                    marginTop: '1.5rem',
                                    fontWeight: '300',
                                    letterSpacing: '2px',
                                }}>
                                {strDrink}
                            </h1>
                            <div className={classes.itemInfo}>
                                <div className={classes.imgContainer}>
                                    <img
                                        height='450px'
                                        width='auto'
                                        src={strDrinkThumb}
                                        alt={strDrink}
                                    />
                                </div>
                                <div className={classes.info}>
                                    <span className={classes.span}>
                                        Name: {strDrink}
                                    </span>
                                    <span className={classes.span}>
                                        Category: {strCategory}
                                    </span>
                                    <span className={classes.span}>
                                        Info: {strAlcoholic}
                                    </span>
                                    <span className={classes.span}>
                                        Glass: {strGlass}
                                    </span>
                                    <span className={classes.span}>
                                        Instructons: {strInstructions}
                                    </span>
                                    <span className={classes.span}>
                                        Ingredients: {strIngredient1},
                                        {strIngredient2},{strIngredient3},
                                        {strIngredient4}
                                    </span>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

export default ItemDetails;
