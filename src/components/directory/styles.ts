import styled from "styled-components";

export const Aside = styled.aside`
  border: 1px solid #2b2d39;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 35vw;

  .project-title {
    background-color: #2b2d39;
    font-size: 16px;
    padding: 10px 12px;
    margin: 0 0 10px;
    text-transform: uppercase;
  }
`;

export const Container = styled.ul`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const HeaderContent = styled.li`
  display: flex;
  height: 27px;
  align-items: center;

  &:hover {
    color: #fff;
  }
`;

export const HeaderTitle = styled.span`
  font-size: 16px;
  font-weight: normal;
  margin: 0;
  padding: 0 0 0 5px;
`;

export const DeleteButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  color: #fff;
  padding: 0;
  margin-left: auto;
  margin-right: 12px;
  cursor: pointer;
`;
