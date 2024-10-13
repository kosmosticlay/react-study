import styled from "styled-components";
import useTabs from "../hooks/useTabs";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SecitonList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const SectionItem = styled.li<{ isActive: boolean }>`
  list-style: none;
  margin-right: 3px;
  padding: 5px;
  flex-grow: 1;
  box-sizing: border-box;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "white" : "black")};
  color: ${(props) => (props.isActive ? "black" : "white")};
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

const Content = styled.p`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;
  color: black;
  text-align: left;
`;

export interface tabInfoType {
  tab: string;
  content: string;
}

const tabInfo: tabInfoType[] = [
  {
    tab: "section 1",
    content: "섹션 1의 내용입니다.",
  },
  {
    tab: "section 2",
    content: "섹션 2의 내용입니다.",
  },
  {
    tab: "section 3",
    content: "섹션 3의 내용입니다.",
  },
];

export default function UseTabs() {
  const { activeIndex, activeItem, changeItem } = useTabs(0, tabInfo);

  return (
    <Wrapper>
      <h1>useTabs</h1>
      <SecitonList>
        {tabInfo.map((info, idx) => (
          <SectionItem
            key={idx}
            isActive={activeIndex === idx}
            onClick={() => changeItem(idx)}
          >
            {info.tab}
          </SectionItem>
        ))}
      </SecitonList>
      {<Content>{activeItem.content}</Content>}
    </Wrapper>
  );
}
