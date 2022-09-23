import logo from './logo.svg';
import './App.css';
import { useToggle } from './hooks/useToggle';

function App() {
  const [isVisible, toggleVisible] = useToggle(true);

  // const toggleHandler = () => {
  //   toggleVisible();
  // };

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={toggleVisible}>ToggleVisible</button> */}
        {isVisible && (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
          </>
        )}
      </header>
    </div>
  );
}
export default App;
