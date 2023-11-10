import styled from "styled-components";

export const MenuWrapper = styled.menu`
  padding: 20px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuCompanyName = styled.span``;

export const WrapperUserMenu = styled.div`
  display: flex;
  flex-basis: 280px;
  justify-content: space-between;
  & p {
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
    & span {
      font-size: 16px;
      margin-left: 8px;
      font-weight: 500;
      color: #000000;
    }
  }
`;
