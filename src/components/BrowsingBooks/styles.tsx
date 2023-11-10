import styled from "styled-components";

export const ListBooks = styled.ul`
  display: flex;
  flex-basis: 70%;
  align-items: center;
  justify-content: space-around;
  & li {
    & img {
      width: 150px;
      cursor: pointer;
      -webkit-transition: width 0.5s ease-in-out;
      -moz-transition: width 0.5s ease-in-out;
      -o-transition: width 0.5s ease-in-out;
      transition: width 0.5s ease-in-out;
      &.selected {
        width: 200px;
      }
    }
  }
  & > div {
    width: 500px;
    height: 320px;
  }
`;

// AbCard content
export const HeaderAbCard = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 !important;
`;

export const BodyAbCard = styled.div`
  margin-bottom: 20px;

  & h2 {
    color: #002F52;
    font-size: 18px;
    margin: 20px 0;
  }
  & p {
    font-size: 14px;
    color: rgba(0,0,0,0.85)
  }
`;

export const FooterAbCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & div p:first-child {
    font-size: 14px;
    font-weight: normal;
    color: rgba(0,0,0,0.5)
  }
  & div p {
    font-size: 36px;
    color: #002F52;
    font-weight: bold;
  }
`;

