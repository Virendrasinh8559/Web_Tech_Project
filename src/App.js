
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import newTask from './pages/newTask';
import Login from './pages/Login';
import Register from './pages/Register';
import Tasks from './pages/tasks';


function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/add' Component={newTask}/>
          <Route path="/login" Component={Login}/>
          <Route path="/register" element={<Register/> } />
          <Route path="/tasks/" element={<Tasks/> } />
          </Routes>
      </Router>
  );
}

export default App;
