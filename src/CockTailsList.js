import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useGlobalContext } from './context';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Form from './Form';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        justifyItems: 'center',
    },
    list: {
        marginTop: '7rem',
        marginBottom: '2rem',
        width: '100%',
        justifyItems: 'center',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 33%)',
        gap: '5px',
        rowGap: '3rem',
    },
    item: {
        height: '600px',
        width: '350px',
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
    },
    imageContainer: {
        height: '50%',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '1rem',
        marginTop: '1.5rem',
    },
    loader: {
        position: 'absolute',
        top: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
}));

function CockTailsList() {
    const classes = useStyles();
    const history = useHistory();
    const { isLoading, alldrinks } = useGlobalContext();

    const handleClick = (id) => {
        history.push(`/cocktails/${id}`);
    };

    if (isLoading && alldrinks.length === 0) {
        return (
            <div className={classes.loader}>
                <CircularProgress size='150px' thickness={2.5} />
            </div>
        );
    } else if (alldrinks.drinks === null) {
        return (
            <>
                <Form />
                <h1>No drinks found with such name...</h1>
            </>
        );
    } else {
        return (
            <div className={classes.root}>
                <Form />

                <div className={classes.list}>
                    {alldrinks.drinks.map((cur) => {
                        const {
                            strDrinkThumb,
                            strDrink,
                            idDrink,
                            strGlass,
                            strAlcoholic,
                        } = cur;
                        return (
                            <Card className={classes.item} key={idDrink}>
                                <div className={classes.imageContainer}>
                                    <img
                                        height='320px'
                                        width='350px'
                                        src={strDrinkThumb}
                                        alt={strDrink}
                                    />
                                </div>
                                <div className={classes.infoContainer}>
                                    <Typography variant='h4'>
                                        {strDrink}
                                    </Typography>
                                    <Typography
                                        fontStyle='italic'
                                        style={{ marginTop: '1rem' }}>
                                        {strGlass}
                                    </Typography>
                                    <Typography
                                        fontStyle='italic'
                                        color='textSecondary'
                                        style={{ marginTop: '0.2rem' }}>
                                        {strAlcoholic}
                                    </Typography>
                                </div>
                                <Button
                                    style={{
                                        alignSelf: 'center',
                                        position: 'relative',
                                        top: '2rem',
                                    }}
                                    variant='outlined'
                                    color='primary'
                                    onClick={() => handleClick(idDrink)}>
                                    Details
                                </Button>
                            </Card>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default CockTailsList;
