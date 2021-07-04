import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice'

function App() {

  const [numDogs, setNumDogs] = useState(10);
  const { data = [] } = useFetchBreedsQuery(numDogs);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        
        <div>
          <p>Dogs to fetch:</p>
          <select 
            value={numDogs} 
            onChange={(e) => setNumDogs(Number(e.target.value))}
            >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        
        <div>
          <p>Number of dogs fetched: {data.length}</p>
          <table>
            <thead>
              <th>Name</th>
              <th>Picture</th>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img 
                      src={breed.image.url} 
                      alt={breed.name}
                      height={259}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
