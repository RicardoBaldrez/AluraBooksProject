import React, { ReactElement } from "react";
import { MenuWrapper, WrapperLeft, MenuCompanyName, WrapperUserMenu } from "./styles";

import logo from "./assets/logo.png";
import user from "./assets/usuario.svg";
import sacola from "./assets/sacola.svg";

import { LinksToMenu } from "../LinksToMenu";

export const Menu = (): ReactElement => {
	return (
		<MenuWrapper>
			<WrapperLeft>
				<MenuCompanyName>
					<img src={logo} alt="Logo" />
				</MenuCompanyName>
				<LinksToMenu />
			</WrapperLeft>
			<WrapperUserMenu>
				<p>
					<img src={sacola} alt="Sacola icon" />
					<span>Minha sacola</span>
				</p>
				<p>
					<img src={user} alt="User icon" />
					<span>Meu perfil</span>
				</p>
			</WrapperUserMenu>
		</MenuWrapper>
	);
};
