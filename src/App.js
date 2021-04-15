import { Fragment } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import ParentComp from "./pure comp/ParentComp";
import PropsComp from "./props/PropsComp";
import StateComp from "./state/StateComp";
import EmployeeA from "./life-cycle/unmounting/EmployeeA";
import MountEmpCompA from "./life-cycle/mounting/MountEmpCompA";
import UpdateEmpComA from "./life-cycle/updating/UpdateEmpComA";
import HooksComp from "./hooks/HooksComp";
import CallCustomHook from "./hooks/CallCustomHook";
import SideNav from "./layout/SideNav";
import Home from "./Home";
import RefForm from "./Refs/RefForm";
import HocCom from "./hoc/HocCom";

function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <SideNav />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route
            path="/props" component={() => (<PropsComp name="Ankit Rathore" empid="101"
              domain="Frontend Developer"
            />
            )}
            exact
          />
          <Route
            path="/state"
            component={() => <StateComp name="Anthony" count="0" />}
            exact
          />
          <Route path="/lcm-mounting" component={MountEmpCompA} exact />
          <Route path="/lcm-updating" component={UpdateEmpComA} exact />
          <Route path="/lcm-unmounting" component={EmployeeA} exact />
          <Route path="/hooks" component={HooksComp} exact />
          <Route path="/customhooks" component={CallCustomHook} exact />
          <Route path="/purecomp" component={ParentComp} exact />
          <Route path="/ref" component={RefForm} exact />
          <Route path="/hoc" component={HocCom} exact />
          <Route path="/" exact >
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </Fragment>
  );
}

export default App;
