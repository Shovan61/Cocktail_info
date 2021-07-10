import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        width: '85%',
    },
    about: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '5rem',
        height: '50vh',
    },
});

function About() {
    const classes = useStyles();
    const history = useHistory();

    const handleclick = () => {
        history.push('/');
    };
    return (
        <div className={classes.root}>
            <Button
                variant='outlined'
                color='secondary'
                style={{ width: '30%', alignSelf: 'center' }}
                onClick={handleclick}>
                Back Home
            </Button>
            <Card className={classes.about}>
                <h1
                    style={{
                        fontWeight: '300',
                        letterSpacing: '2px',
                        textAlign: 'center',
                        marginTop: '3rem',
                    }}>
                    Welcome to TheCocktailDB An open, crowd-sourced database of
                    drinks and cocktails from around the world
                </h1>
                <p style={{ textAlign: 'center', marginTop: '3rem' }}>
                    We also offer a free JSON API for anyone wanting to use it.
                    If you like the site, please consider supporting us
                </p>
                <div style={{ alignSelf: 'center', marginTop: '4rem' }}>
                    <a href='https://www.thecocktaildb.com/' target='_blank'>
                        Check Out Our Website!
                    </a>
                </div>
            </Card>
        </div>
    );
}

export default About;
