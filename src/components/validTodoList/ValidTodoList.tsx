import editIcon from "./../../asets/images/todoList/editIcon.svg";
import acceptIcon from "./../../asets/images/todoList/acceptIcon.svg";
import deleteIcon from "./../../asets/images/todoList/deleteIcon.svg";
import { FC, useRef, useState } from "react";
import { Col, Container, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  changeTodoName,
  changeTodoStatus,
  removeTodo,
} from "../../store/todo/todoSlice";

const ValidTodoList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todo.todos);
  const [currentTodoID, setCurrentTodoID] = useState<number | null>(null);
  const [isEditIconClicked, setIsEditIconClicked] = useState<boolean>(false);
  const todoInputRef = useRef<
    {
      id: number;
      value: HTMLInputElement;
    }[]
  >([]);

  console.log(todos);

  return (
    <>
      {todos.map((todo) => (
        <Col
          key={todo.id}
          className={`my-1 h-auto col-12 d-flex align-items-center p-2 rounded ${
            todo.isDone ? "bg-dark-subtle" : "bg-info-subtle"
          }`}
        >
          <Form.Check
            defaultChecked={todo.isDone}
            type="checkbox"
            id={`todoStatus${todo.id}`}
            onChange={() => dispatch(changeTodoStatus(todo.id))}
          />
          <Form.Control
            aria-describedby="basic-addon1"
            id={String(todo.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setCurrentTodoID(null);
                setIsEditIconClicked(false);
                e.currentTarget.blur();
                setIsEditIconClicked(false);
                dispatch(
                  changeTodoName({
                    id: todo.id,
                    newTodoName: (e.target as HTMLInputElement).value,
                  })
                );
              }
            }}
            defaultValue={todo.todoName}
            ref={(el: HTMLInputElement) =>
              todoInputRef.current?.push({ id: todo.id, value: el })
            }
            disabled={currentTodoID !== todo.id}
            className={`${
              todo.isDone
                ? "text-decoration-line-through text-secondary"
                : "text-dark"
            } mx-3 bg-transparent border-0 todoList__text`}
          />
          <Container className="d-flex column-gap-3 align-items-center w-auto buttons">
            <Image
              src={
                isEditIconClicked && todo.id === currentTodoID
                  ? acceptIcon
                  : editIcon
              }
              width="40px"
              height="40px"
              role="button"
              onClick={() => {
                if (todoInputRef.current) {
                  const todoInput = todoInputRef.current.find(
                    (value) => value.id === todo.id
                  );
                  if (todoInput && todoInput.value) {
                    if (isEditIconClicked && todo.id === currentTodoID) {
                      todoInput.value.disabled = true;
                      setCurrentTodoID(null);
                      setIsEditIconClicked(false);
                      todoInput.value.blur();
                      dispatch(
                        changeTodoName({
                          id: todo.id,
                          newTodoName: todoInput.value.value,
                        })
                      );
                    } else {
                      todoInput.value.disabled = false;
                      setCurrentTodoID(todo.id);
                      setIsEditIconClicked(true);
                      todoInput.value.focus();
                    }
                  }
                }
              }}
            />
            <Image
              role="button"
              onClick={() => dispatch(removeTodo(todo.id))}
              src={deleteIcon}
              width="40px"
              height="40px"
            />
          </Container>
        </Col>
      ))}
    </>
  );
};

export default ValidTodoList;
