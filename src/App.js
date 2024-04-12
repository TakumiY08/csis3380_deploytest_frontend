import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SimpleTodoList from "./components/todolist"
import CreateTask from "./components/createTask";
import EditTask from "./components/editTask";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SimpleTodoList />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/update/:id" element={<EditTask />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
