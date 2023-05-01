import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1>Welcome to the Movies App</h1>
        <nav>
          <ul>
            <li> 
              <Link to={"/"}>Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
