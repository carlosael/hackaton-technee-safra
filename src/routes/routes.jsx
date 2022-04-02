import Home from "../pages/Home/index.jsx";
import Academy from "../pages/Academy/index.jsx";
import LoanConfirmation from "../pages/LoanConfirmation/index";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/academy" component={Academy} />
          <Route path="/loanconfirmation" component={LoanConfirmation} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
