import logo from './logo.svg';
import './App.css';
import Resource from './components/Resource';
import withResourceId from './hocs/withResourceId';

//The is the way use to HOC pattern
const CurrentUser = withResourceId(Resource);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Learn React - Hocs </h1>
        <CurrentUser resourceName="users" resourceId={1} colorName="red"/>
        <br/>
        <CurrentUser resourceName="comments" resourceId={1} colorName="green"/>
        <br/>
      </header>
    </div>
  );
}

export default App;
