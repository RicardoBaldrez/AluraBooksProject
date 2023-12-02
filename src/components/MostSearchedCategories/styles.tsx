import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
  background-color: #002F52;
  & header {
    & h1 {
      color: #fff;
      font-size: 32px;
      font-weight: 300;
      margin-bottom: 20px;
    }
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 41.6%;
  & span {
    color: #fff;
    font-size: 24px;
    padding: 20px;
    margin: 0 10px 10px 0;
    background-color: #EB9B00;
  }
  & span:nth-child(5) {
    margin-left: 10px;
  }
`;
