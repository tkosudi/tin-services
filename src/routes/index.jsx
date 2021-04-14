import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import ClientMap from "../pages/ClientMap";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/clientmap" component={ClientMap} />
    </Switch>
  );
};

export default Routes;
