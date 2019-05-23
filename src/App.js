import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { Switch, Route } from 'react-router-dom';
import ScheduleEvent from './views/scheduleEvent';
import DisplayEvents from './views/displayEvents';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <ScheduleEvent />} />
            <Route exact path='/display' render={() => <DisplayEvents />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
