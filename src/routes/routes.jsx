import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer/index.jsx";
import Home from "../pages/Home/index.jsx";
import OpenBanking from "../pages/OpenBanking/index.jsx";

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
