import Navbar from './Navbar';
import Home from "./Home";
import Create from './Create';
import BlogDetails from './BlogDetails';
import "./index.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './NotFound';
import TweetPage from './TweetPage';

function MyApp() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/tweetpage">
              <TweetPage/>
            </Route>
            <Route exact path="/tweetpage/:tweetid">
              <TweetPage/>
            </Route>
            <Route exact path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default MyApp;
