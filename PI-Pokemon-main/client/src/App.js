import './App.css';
import landing from './components/Landing/Landing.jsx';
import HomePage from './components/HomePage/HomePage'
import Detail from './components/DetailPage/Detail'
import Form from './components/FormPage/Form'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component={landing}/>
      <Route path={'/home'} component={HomePage}/>
      <Route exact path={"/detail/:id"} component={Detail} />
      <Route exact path={"/create"} component={Form} />
    </div>
  );
}

export default App;
