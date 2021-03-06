import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Movies from "./components/movies/movies";
import Favorite from "./components/favorite/favorite";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Movies}/>
          <Route path="/favorite" exact component={Favorite}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
