import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Services/Redux/store";

import Login from "./Pages/DiscordLogin";
import Homepage from "./Pages/Homepage";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/auth/discord" component={Homepage} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
