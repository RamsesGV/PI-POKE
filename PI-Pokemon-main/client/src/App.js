import './App.css';
import landing from './components/Landing/Landing.jsx';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component={landing} />
    </div>
  );
}

export default App;
