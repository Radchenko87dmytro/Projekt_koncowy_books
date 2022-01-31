import logo from './logo.svg';
import './App.scss';
import Title from './components/Tytle';

function App() {
  return (
    <div className="App">
    <Title></Title>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editt <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <imput></imput>
      <imput></imput>
      <imput></imput>
      <imput></imput>
      <imput></imput>
      <imput></imput>
      <imput></imput>
      <imput></imput>
      <imput></imput>
      <imput></imput> */}
    </div>
  );
}

export default App;
