import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer/index";
import Home from "../pages/Home/index";
import OpenBanking from "../pages/OpenBanking/index";

function Routes() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/openbanking" component={OpenBanking} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default Routes;
