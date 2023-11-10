import styled from "styled-components";

import fundo from "./assets/fundo.png";

interface BannerProps {
  background: any;
}

export const SessionBanner = styled.section<BannerProps>`
  height: 330px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${({ background }) => background ?
		`
      background-image: url(${fundo})
    ` : `
      background-color: ${"#002F52"}
    `
};
`;

export const BannerWhereToStart = styled(SessionBanner)`
  & h1, p {
    color: #fff;
  }
  & h1 {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
  }
  & p {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  & input {
    color: #000;
    width: 500px;
  }
`;
