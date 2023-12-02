import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 32px;
  & form {
    width: 500px;
    max-width: 100%;
    & label {
      margin-top: 10px;
    }
    & footer {
      border-top: 1px solid gray;
      margin-top: 32px;
      padding-top: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & span {
        color: #002f52;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  & .wrapper-password {
      border: 2px solid red;
    }
`;

export const WrapperPassword = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & div {
    margin-bottom: 16px;
    width: 100%;
  }
  & a {
    font-size: 16px;
    color: #002f52;
    text-decoration: underline;
  }
`;
