import React from 'react';
import './App.css';
import { AccountEditor } from './AccountEditor';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AccountsDashboard } from './AccountsDashboard';
import { Questions } from '../madlibs/Questions'
import { MadLib } from '../madlibs/MadLib'


export const App = () => {
  return <>
    <Router>
      <Switch>
      <Route path ="/new" component={ AccountEditor }/>
        <Route path ="/edit/:accountId" component={ AccountEditor }/>
        <Route path ="/madlib" component={ MadLib }/>
        <Route path ="/questions" component= { Questions }/>

        <Route path ="/" component={ AccountsDashboard }/>
        
      </Switch>
    </Router>
  </>;
}

