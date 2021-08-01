import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from '../routes/home';
import Detail from '../routes/detail';
import { Provider } from "react-redux";
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" exact component={Detail} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
