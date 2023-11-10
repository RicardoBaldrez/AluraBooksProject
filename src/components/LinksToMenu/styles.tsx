import styled from "styled-components";

export const LinkDropdown = styled.ul`
`;

export const LinkOption = styled.li`
`;

export const Link = styled.a`
  position: relative;
  color: #000;
  font-weight: 500;
  font-size: 16px;
  padding: 8px 14px;
  &:hover {
    color: #FFF;
    cursor: pointer;
    background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
    & ul {
      display: block;
    }
  }
`;

export const SubLinksList = styled.ul`
  display: none;
  position: absolute;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
  top: 100%;
  background-color: #FFF;
  border-radius: 0 3px 3px 3px;
`;

export const SubLink = styled.li`
  color: #000;
  font-size: 14px;
  padding: 6px 10px;
  letter-spacing: 1px;
  &:hover {
    color: #FFF;
    cursor: pointer;
    background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
  }
`;
