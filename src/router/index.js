import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import About from '../page/about';
import Home from '../page/home';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
