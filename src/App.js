import "./styles.css";
import "./fade.css";
import "./flipCard.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import "semantic-ui-css/semantic.min.css";
import MainPage from "./component/MainPage";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path="/" exact component={MainPage}></Route>
          <Route path="/shop">
            <Navbar />
          </Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
