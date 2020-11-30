import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import MyInfo from '../pages/MyInfo';
import Tasks from '../pages/Tasks';
import TaskNew from '../pages/TaskNew';
import NotFound from '../pages/NotFound';

function App(){
    return (
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path = "/" component={Home}/>
                <Route exact path = "/MyInfo" component={MyInfo}/>
                <Route exact path = "/tasks" component={Tasks}/>
                <Route exact path = "/tasks/new" component={TaskNew}/>
                <Route component={NotFound} />
            </Switch>
        </Layout>
        </BrowserRouter>
    )
}

export default App;