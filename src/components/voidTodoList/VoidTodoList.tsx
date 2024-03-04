import { FC } from "react";
import forVoidTodosIcon from "./../../asets/images/todoList/forVoidTodosIcon.png";
import { Col, Container, Image } from "react-bootstrap";

const VoidTodoList: FC = () => {
  return (
    <Col className="col-12 d-flex justify-content-center align-items-center border-top rounded-top border-secondary pt-5 mt-4">
      <Container className="d-flex flex-column align-items-center justify-content-center row-gap-3 text-center">
        <Image src={forVoidTodosIcon} />
        <span className="fw-bold">У вас еще нет зарегистрированных задач</span>
        <span>Создавайте задачи и организуйте свои дела</span>
      </Container>
    </Col>
  );
};

export default VoidTodoList;
