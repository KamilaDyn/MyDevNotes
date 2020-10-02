import React, { Component } from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DevArticles from 'views/DevArticles/DevArticles';
import DevProjects from 'views/DevProjects/DevProjects';
import Notes from 'views/Notes/Notes';
import axios from 'axios';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/devarticles" component={DevArticles} />
        <Route path="/devprojects" component={DevProjects} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
