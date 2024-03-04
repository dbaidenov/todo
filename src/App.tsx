import "bootstrap/dist/css/bootstrap.min.css";
import './app.scss'
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import TodoInput from "./components/todoInput/TodoInput";
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <Router>
      <Container fluid className="d-flex flex-column py-5 App">
        <Navbar />
        <TodoInput />
        <Routes>
          <Route path="/" element={<TodoList />}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
