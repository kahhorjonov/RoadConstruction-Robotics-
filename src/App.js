import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MapPage from "./components/mapPage";
import Home from "./components/home";
import MoreData from "./components/tabletemplate";
import LoginForm from "./components/AdminComponents/login";
import NotFound from "./components/AdminComponents/notFound";
import Logout from "./components/AdminComponents/logout";
import ProtectedRoute from "./components/AdminComponents/protectedRoute";
import ConstructorMaps from "./components/AdminComponents/adminMap/ConstructorMaps";
import ClientPageMap from "./components/AdminComponents/adminMap/ClientPageMap";
import CreateCompany from "./components/AdminComponents/createCompany";
import CreateAdmin from "./components/AdminComponents/common/register";
import CreateNews from "./components/AdminComponents/adminMap/CreateNews";
import NewsMore from "./components/newsMore";
import { useEffect } from "react";
import Aos from "aos";
import Messages from "./components/AdminComponents/adminMap/messages";

import "aos/dist/aos.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  setTimeout(() => {
    window.location = "/logout";
  }, 86400000);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="user_container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/newsMore" component={NewsMore} />
          <Route path="/mapPage" component={MapPage} />
          <Route path="/more" component={MoreData} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <ProtectedRoute path="/admin" component={ConstructorMaps} />
          <ProtectedRoute path="/createAdmin" component={CreateAdmin} />
          <ProtectedRoute path="/clientPageMap" component={ClientPageMap} />
          <ProtectedRoute path="/createNews" component={CreateNews} />
          <ProtectedRoute path="/createCompany" component={CreateCompany} />
          <ProtectedRoute path="/messages" component={Messages} />

          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/login" />
          <Redirect to="/not-found" component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
