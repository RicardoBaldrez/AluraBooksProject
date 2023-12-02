import React, { ReactElement, useState } from "react";
import { AbModal, AbCampoTexto, AbBotao } from "ds-alurabooks";

import RegisterImage from "./assets/login.svg";

import { ModalWrapper, WrapperPassword } from "./styles";
import axios from "axios";
import { usePersistToken } from "../../hooks";

interface PropsModalLogin {
	open: boolean;
	onClose: () => void;
	aoEfetuarLogin?: any;
}

export const ModalUserLogin = ({open, onClose, aoEfetuarLogin}: PropsModalLogin): ReactElement => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const setToken = usePersistToken();

	const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const user = {
			email,
			password
		};

		axios.post("http://localhost:8000/public/login", user)
			.then(response => {
				setToken(response?.data?.access_token);
				setEmail("");
				setPassword("");
				aoEfetuarLogin();
			})
			.catch(error => {
				if (error?.response?.data?.message) {
					alert(error.response.data.message);
				} else {
					alert("Algo deu errado, tente novamente!");
				}
			});
	};

	return (
		<AbModal
			titulo='Login'
			aberta={open}
			aoFechar={onClose}
		>
			<ModalWrapper>
				<figure>
					<img src={RegisterImage} alt="Monitor com uma fechadura com uma pessoa com a chave" />
				</figure>
				<form onSubmit={onSubmitForm}>
					<AbCampoTexto
						label='Email'
						value={email}
						onChange={setEmail}
					/>
					<WrapperPassword>
						<AbCampoTexto
							label='Password'
							value={password}
							onChange={setPassword}
						/>
						<a href="#">Esqueci minha senha</a>
						<AbBotao texto='Fazer login' />
					</WrapperPassword>
					<footer>
						<span>Ainda nao tem uma conta?</span><AbBotao texto='Criar uma conta' />
					</footer>
				</form>
			</ModalWrapper>
		</AbModal>
	);
};
