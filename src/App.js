import "./App.css";
import HeaderDev from "./components/HeaderDev";
import Switcher from "./components/Switcher";
import { UserProvider } from './contexts'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <UserProvider>
      <Router>
        <header>
          <HeaderDev />
        </header>
        <Switch>
          <main className=" mt-5"  >
            <Switcher />
          </main>
        </Switch>
        <footer>
          <Footer />
        </footer>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
