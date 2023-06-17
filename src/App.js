import Nav from "./components/Nav/Nav.jsx"
import Hero from "./components/Hero/Hero.jsx";
import Main from "./components/Main/Main.jsx";
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="header">
      <Nav />
      <Hero />
      </div>
      <Main />
      
    </div>
  );
}

export default App;
