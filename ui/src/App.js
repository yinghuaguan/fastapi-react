import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {

//   const [user, setUser] = useState(null);
//   const [host, setHost] = useState(null);

//   useEffect(() => {
//     fetch("/api/user")
//       .then(res => res.json())
//       .then((result) => {
//         setUser(result.username);
//         setHost(result.hostname);
//       }, (error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         Hi, {user}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p>Hostname : {host}</p>
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css';
import AudioRecorder from './AudioRecorder'
import ScatterPlot from './ScatterPlot'

function App() {
  return (
    <div className="App">
      <div><h1>daf</h1>
      </div>
      <div>
        <AudioRecorder/>
      </div>
      <div>
        <ScatterPlot/>
      </div>
    </div>
  );
}

export default App;