import React from "react";
import { User } from "../model/Model";
import { AuthService } from "../services/AuthService";
import { Login } from "../components/Login";
import { Router, Route, Switch } from "react-router-dom";
import history from "../utils/history";
import { Navbar } from "./Navbar";
import { Home } from "../components/Home";
import { Profile } from "./Profile";
import { Spaces } from "../components/spaces/Spaces";
import { DataService } from "../services/DataService";

interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
  private authService: AuthService = new AuthService();
  private dataService: DataService = new DataService();

  constructor(props: any) {
    super(props);
    this.state = {
      user: undefined,
    };

    this.setUser = this.setUser.bind(this);
  }

  private setUser(user: User) {
    //Needs to register inside the constructor
    this.setState({
      user: user,
    });
    console.log("Setting the user!: " + user);
  }

  render() {
    return (
      <div className="wrapper">
        <Router history={history}>
          <div>
            <Navbar user={this.state.user} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login">
                <Login authService={this.authService} setUser={this.setUser} />
              </Route>
              <Route exact path="/profile">
                <Profile
                  authService={this.authService}
                  user={this.state.user}
                />
              </Route>
              <Route exact path="/spaces">
                <Spaces dataService={this.dataService} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
