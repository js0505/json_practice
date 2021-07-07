import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Routes/HomeContainer';
import Header from './Header';
import Footer from './Footer';
import Detail from '../Routes/Detail';

const ScreenRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/albums/:id'} exact component={Detail}/>
            </Switch>
            <Footer />
        </Router>
    );
};

export default ScreenRouter;