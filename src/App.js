import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from "./pages";
import Work from "./pages/work";
import Credit from './pages/credit';
import Career from './pages/career';
import ProjectPage from './pages/project';

import Navbar from './Components/Navbar';
import style from "./App.module.css";

// reroutes to the specified page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<><Navbar /><Home /></>} />
        <Route exact path='/career' element={<><Navbar /><Career /></>} />
        <Route exact path='/projects' element={<><Navbar /><Work /></>} />
        <Route path='/projects/:projectId' element={<div className={style.grid}><Navbar /><ProjectPage /></div>} />
        <Route exact path='/credit' element={<><Navbar /><Credit /></>} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Router>
  );
}

export default App;
