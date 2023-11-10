import styled from "styled-components";

export const SessionBooksDefault = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & header {
    margin: 50px 0 20px;
    font-weight: 700;
    flex-basis: 100%;
    text-align: center;
    & h1 {
      font-size: 32px;
      color: #EB9B00;
    }
  }
  & > div {
    display: flex;
    flex-basis: 100%;
    justify-content: center;
    padding: 60px 150px;
    background-color: #EBECEE;
  }
`;
