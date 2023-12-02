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
      display: flex;
      justify-content: center;
      margin-top: 40px;
    }
    .wrapper-input-row {
      display: flex;
      justify-content: space-between;
      & div {
        width: 48%;
      }
    }
  }
`;
