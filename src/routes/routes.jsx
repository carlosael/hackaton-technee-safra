import Home from "../pages/Home/index.jsx";
import Loan from "../pages/Loan/index.jsx";
import LoanConfirmation from "../pages/LoanConfirmation/index";
import Header from "../components/Header/index.jsx";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/loan" component={Loan} />
          <Route path="/loanconfirmation" component={LoanConfirmation} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
