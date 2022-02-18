import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  AddSchool,
  Home,
  EditSchool,
  Login,
  Navbar,
  Register,
  SchoolList,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/AddSchool">
          <Navbar />
          <AddSchool />
        </Route>
        <Route path="/Home">
          <Navbar />
          <Home />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/EditSchool/:id">
          <Navbar />
          <EditSchool />
        </Route>
        <Route path="/SchoolList">
          <Navbar />
          <SchoolList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
