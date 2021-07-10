import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    navigationContainer: {
        width: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    home: {
        cursor: 'pointer',
        fontSize: '16px',
    },
    about: {
        cursor: 'pointer',
        fontSize: '16px',
    },
}));

function NavBar() {
    const classes = useStyles();
    const history = useHistory();

    const goHome = () => {
        history.push('/');
    };

    const goAbout = () => {
        history.push('/cocktails/about');
    };

    return (
        <div className={classes.root}>
            <AppBar style={{ backgroundColor: '#555' }} position='static'>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='menu'>
                        <Typography
                            variant='h6'
                            className={classes.title}
                            onClick={goHome}>
                            The
                            <span
                                style={{ color: 'red', letterSpacing: '2px' }}>
                                Cocktail
                            </span>
                            DB
                        </Typography>
                    </IconButton>
                    <div className={classes.navigationContainer}>
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='menu'>
                            <span className={classes.home} onClick={goHome}>
                                Home
                            </span>
                        </IconButton>
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='menu'>
                            <span className={classes.about} onClick={goAbout}>
                                About
                            </span>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;
