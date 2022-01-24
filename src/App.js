import './App.css';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList.js'


function App() {
  return (
    <div className="App">

      <h1>My To-Do-List</h1>
      <AddTask/>
      <TaskList/>
    </div>
  );
}

export default App;
