import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useGlobalContext } from './context';

const useStyles = makeStyles({
    root: {
        minWidth: 475,
        marginTop: '3rem',
        textAlign: 'center',
    },
});

function Form() {
    const classes = useStyles();
    const { setsearhDrink } = useGlobalContext();
    return (
        <form className={classes.root} noValidate autoComplete='off'>
            <TextField
                id='Drink Name'
                label='Drink Name'
                variant='outlined'
                onChange={(e) => setsearhDrink(e.target.value)}
            />
        </form>
    );
}

export default Form;
