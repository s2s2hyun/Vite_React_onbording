import "./App.css";

import About from "./pages/About";

import Route from "./components/Route";
import Router from "./components/Router";
import Routes from "./components/Routes";
import Main from "./pages/Main";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" component={<Main />} />
                    <Route path="/about" component={<About />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
