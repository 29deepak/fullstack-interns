import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Module1 from './components/Module1/Module1'
import Module2 from './components/Module2/Module2'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Module3 from './components/Module3/Module3';
import Module4 from './components/Module4/Module4';
import Module5 from './components/Module5/Module5';
import Search from './components/SearchBox/SearchBox'
import Pagination from './components/Pagination/Pagination';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about"   component={About}></Route>
      <Route exact path="/module1" component={Module1}></Route>
      <Route exact path="/module2" component={Module2}></Route>
      <Route exact path="/module3" component={Module3}></Route>
      <Route exact path="/module4" component={Module4}></Route>
      <Route exact path="/module5" component={Module5}></Route>
      <Route exact path="/search"  component={Search}></Route>
      </Switch>
      <Pagination/>
    </Router>
  );
}

export default App;
