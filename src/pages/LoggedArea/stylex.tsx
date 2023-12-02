import styled from "styled-components";

export const WrapperOrderAccount = styled.section`
`;

export const HeaderOrderAccount = styled.header`
  background-color: #002F52;
  & h1 {
    color: #fff;
    padding: 35px 0;
    text-align: center;
  }
`;

export const WrapperContent = styled.div`
  padding: 50px;
  display: flex;
`;

export const WrapperOrderOptions = styled.div`
flex-basis: 20%;
  & ul {
    margin-right: 60px;
    & .active-option {
      font-weight: bold;
      border-bottom: 3px solid #002F52;
    }
    & li {
      height: 55px;
      &:hover {
        cursor: pointer;
        font-weight: bold;
        border-bottom: 2px solid #002F52;
      }
      text-align: center;
      padding: 15px 20px;
      border-bottom: 1px solid #002F52;
      & a {
        color: #002F52;
      }
    }
  }
`;

export const WrapperOrderContent = styled.div`
  flex-basis: 80%;
`;

