import React from 'react';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';
import ItemDetails from './ItemDetails';
import CockTailsList from './CockTailsList';
import About from './About';
import { Switch, Route } from 'react-router-dom';
import Error from './Error';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
    },
    homeList: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />

            <div className={classes.homeList}>
                <Switch>
                    <Route
                        exact
                        path='/'
                        render={() => <CockTailsList />}></Route>

                    <Route
                        exact
                        path='/cocktails/about'
                        render={() => <About />}></Route>
                    <Route
                        exact
                        path='/cocktails/:id'
                        render={(routeProps) => (
                            <ItemDetails id={routeProps.match.params.id} />
                        )}></Route>

                    <Route path='*'>
                        <Error />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
