import styled from "styled-components";

export const Section = styled.section`
  height: 100%;
`;

export const ListRequests = styled.ul`
  & li {
    padding: 15px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 1px solid #002f52;
    & button {
      padding: 0;
      width: 100px;
      height: 40px;
      font-size: 15px;
      text-shadow: 1px 1px 2px #000;
    }
  }
`;

export const WrapperButtons = styled.div`
  & button:nth-child(2) {
    border: 2px solid red;
    background-color: red;
    transition: all .3s ease-in-out;
    &:hover {
      cursor: pointer;
      background-color: rgba(0,0,0,0.7);
    }
  }
`;

export const WrapperError = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  & h1 {
    font-size: 35px;
  }
`;
