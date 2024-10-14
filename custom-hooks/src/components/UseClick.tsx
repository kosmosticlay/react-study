import { useRef } from "react";
import styled from "styled-components";
import useClick from "../hooks/useClick";

const Heading1 = styled.h1`
  cursor: pointer;
  &:hover {
    color: #bd91ff;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const handleClick = (title: string) => {
  alert(title);
};

export default function UseClick() {
  const titleRef = useClick<HTMLHeadingElement>(handleClick);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Wrapper>
      <Heading1 ref={titleRef}>useClick</Heading1>
      <Form>
        <input ref={inputRef}></input>
        <button onClick={handleFocus}>Let's focus</button>
      </Form>
    </Wrapper>
  );
}
