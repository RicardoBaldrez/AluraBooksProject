import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

export const WrapperContent = styled.div`
  flex-basis: 48%;
  display: flex;
  justify-content: space-between;
  & header {
    color: #002F52;
    & h1 {
      font-size: 24px;
      color: #002F52;
    }
    & p {
      color: #002F52;
      font-size: 16px;
    }
  }
  & div {
    display: flex;
    align-items: center;
  }
`;

