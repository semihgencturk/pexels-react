import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Discover from './components/pages/Discover';
import Videos from './components/pages/Videos';
import Leaderboard from './components/pages/Leaderboard';
import Challenges from './components/pages/Challenges';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/discover' component={Discover} />
          <Route path='/videos' component={Videos} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/challenges' component={Challenges} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
