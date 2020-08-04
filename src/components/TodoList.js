import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="1일 1커밋" done={true} />
      <TodoItem text="1일 1프로덕트" done={true} />
      <TodoItem text="프로젝트 블로깅" done={false} />
      <TodoItem text="면접 준비 하기" done={true} />
      <TodoItem text="독서" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
