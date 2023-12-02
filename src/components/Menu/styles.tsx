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
  & ul {
    display: flex;
    justify-content: space-between;
    width: 230px;
    & li {
      display: flex;
      align-items: center;
      margin-left: 10px;
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
  }
`;
