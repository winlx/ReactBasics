import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Sidenav from './components/Sidenav';
import PrivatRoute from './components/PrivateRoute';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Book from './pages/Book';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(user) {
    this.setState({ user }, () => this.props.history.push('/books'));
  }

  logout() {
    this.setState({ user: null }, () => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="app">
        <Toolbar user={this.state.user} />

        <Content>
          <Route path="/books" render={() => <Sidenav topics={this.props.topics} />} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route
              path="/login"
              render={props => <Login onLogin={this.login} {...props} />}
            />
            <Route
              path="/logout"
              render={props => <Logout onLogout={this.logout} {...props} />}
            />
            <PrivatRoute
              exact
              path="/books/:topic?"
              component={Books}
              data={this.props.books}
              user={this.state.user}
            />
            <PrivatRoute
              path="/books/:topic/:book"
              component={Book}
              data={this.props.books}
              user={this.state.user}
            />
            <Route component={NotFound} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default withRouter(App);
