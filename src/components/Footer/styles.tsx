import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 40px 0;
  background-color: #F9F9F9;
  border-top: 1px solid #858585;
`;

export const WrapperContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  & div {
    & ul {
      height: 340px;
      border-right: 1px solid gray;
      & li {
        display: flex;
        align-items: center;
        margin: 0 70px 15px 10px;
        & img {
          margin-right: 10px;;
        }
      }
    }
    &.alura-group {
      color: #000;
      font-size: 24px;
      font-weight: 400;
    }
  }
`;
