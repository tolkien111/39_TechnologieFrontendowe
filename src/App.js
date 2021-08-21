import logo from './logo.svg';
import './App.css';
import Title from './Tilte';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <Title name="Ogniem i mieczem" autor="Henryk Sienkiewicz" class="red" description="FanTastyka Naukowa" classDes="orange" extDescription="opowiada o smokach i goblinach"></Title>
          <Title name="Popot" autor="Adam Mickiewicz" class="red" description="Komedia Romantyczna" classDes="orange" extDescription="opowiada o smokach i goblinach"></Title>
          <Title name="Pan Wołodyjowski" autor="Jan Brzechwa" class="blue" description="Horror z ElemnatnTami komedii" classDes="orange" extDescription="opowiada o smokach i goblinach"></Title>
      </header>
    </div>
  );
}

export default App;
