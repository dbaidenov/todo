import "./todoList.scss";
import { FC } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import VoidTodoList from "../voidTodoList/VoidTodoList";
import ValidTodoList from "../validTodoList/ValidTodoList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { removeAllTodos } from "../../store/todo/todoSlice";

const TodoList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todo.todos);

  return (
    <Container className="d-flex align-items-center justify-content-center flex-column todoList">
      <Row className="w-100">
        <Col className="col-12 d-flex justify-content-space-between mb-4">
          <Container className="d-flex align-items-center column-gap-2">
            <span className="text-primary">Всего</span>
            <span className="bg-secondary rounded d-flex px-2 py-1 text-center">
              {todos.length}
            </span>
          </Container>
          {todos.length > 0 && (
            <Container className="d-flex justify-content-center">
              <Button
                variant="danger"
                className="px-3 text-center"
                onClick={() => dispatch(removeAllTodos())}
              >
                Удалить всё
              </Button>
            </Container>
          )}
          <Container className="d-flex align-items-center column-gap-2 justify-content-end">
            <span className="text-success">Выполнено</span>
            <span className="bg-secondary d-flex rounded p-2 text-center">
              {todos.reduce((acc, todo) => {
                if (todo.isDone) {
                  return acc + 1;
                } else return acc;
              }, 0)}{" "}
              из {todos.length}
            </span>
          </Container>
        </Col>
        {todos.length > 0 ? <ValidTodoList /> : <VoidTodoList />}
      </Row>
    </Container>
  );
};

export default TodoList;
