import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory, Link } from 'react-router-dom';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles({
    root: {
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        width: '85%',
    },
    alert: {
        width: '100%',
        marginTop: '5rem',
    },
});

function Error() {
    const classes = useStyles();
    const history = useHistory();

    const handleclick = () => {
        history.push('/');
    };
    return (
        <div className={classes.root}>
            {/* <Button
                variant='outlined'
                color='secondary'
                style={{ width: '30%', alignSelf: 'center' }}
                onClick={handleclick}>
                Back Home
            </Button> */}
            <div className={classes.alert}>
                <Alert severity='error'>
                    <AlertTitle>Error</AlertTitle>
                    <h3 style={{ color: 'red' }}>Page Not Found!</h3>
                    <br />
                    <strong>
                        <Link to='/'>Go Back to Home page</Link>
                    </strong>
                </Alert>
            </div>
        </div>
    );
}

export default Error;
