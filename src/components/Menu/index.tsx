import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import { MenuWrapper, WrapperLeft, MenuCompanyName, WrapperUserMenu } from "./styles";

import logo from "./assets/logo.png";
import user from "./assets/usuario.svg";
import sacola from "./assets/sacola.svg";

import { LinksToMenu } from "../LinksToMenu";
import { ModalUserRegistration } from "../ModalUserRegistration";
import { ModalUserLogin } from "../ModalUserLogin";
import { useGetToken } from "../../hooks";

export const Menu = (): ReactElement => {
	const [toggleModalRegister, setToggleModalRegister] = useState(false);
	const [toggleModalLogin, setToggleModalLogin] = useState(false);

	const token = useGetToken();

	const [isLogged, setIsLogged] = useState<boolean>(token !== null);

	const aoEfetuarLogin = () => {
		setToggleModalLogin(false);
		setIsLogged(true);
	};

	return (
		<>
			<ModalUserLogin
				open={toggleModalLogin}
				onClose={() => {
					setToggleModalLogin(false);
				}}
				aoEfetuarLogin={() => aoEfetuarLogin()}
			/>
			<ModalUserRegistration
				open={toggleModalRegister}
				onClose={() => {
					setToggleModalRegister(false);
				}}
			/>
			<MenuWrapper>
				<WrapperLeft>
					<MenuCompanyName>
						<img src={logo} alt="Logo" />
					</MenuCompanyName>
					<LinksToMenu />
				</WrapperLeft>
				<WrapperUserMenu>
					<ul>
						{isLogged ? (
							<>
								<li>
									<Link to="/area-logada/pedidos">My account</Link>
									{/* <span>My account</span> */}
								</li>
							</>
						) : (
							<>
								<li onClick={() => setToggleModalLogin(true)}>
									<img src={user} alt="User icon" />
									<span>Login</span>
								</li>
								<li onClick={() => setToggleModalRegister(true)}>
									<img src={user} alt="User icon" />
									<span>Cadastra-se</span>
								</li>
							</>
						)}
					</ul>
				</WrapperUserMenu>
			</MenuWrapper>
		</>
	);
};
