import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './Component/HomePage';
import TermsAndConditions from './Component/Terms';
import Signin_Signup from './Component/Signin';
import Signup from './Component/Signup';
import OnlineBanking from './Component/Online';
import Cards from './Component/Cards';
import Loans from './Component/Loan';
import UserPortal from './Component/UserPortal';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/HomePage' component={HomePage} />
          <Route exact path='/Terms' component={TermsAndConditions} />
          <Route exact path='/Signin' component={Signin_Signup} />
          <Route exact path='/Signup' component={Signup} />
          <Route exact path='/Online' component={OnlineBanking} />
          <Route exact path='/Cards' component={Cards} />
          <Route exact path='/Loan' component={Loans} />
          <Route exact path='/UserPortal' component={UserPortal} />
        </Switch>
    </div>
  );
}

export default App;
