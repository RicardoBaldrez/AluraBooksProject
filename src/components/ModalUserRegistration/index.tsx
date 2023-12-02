import React, { ReactElement, useState } from "react";
import axios from "axios";
import { AbModal, AbCampoTexto, AbBotao } from "ds-alurabooks";

import RegisterImage from "./assets/login.svg";

import { ModalWrapper } from "./styles";

interface PropsModalRegister {
	open: boolean;
	onClose: () => void;
}

export const ModalUserRegistration = ({open, onClose}: PropsModalRegister): ReactElement => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [complement, setComplement] = useState("");
	const [cep, setCep] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmed, setPasswordConfirmed] = useState("");

	const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const user = {
			name,
			email,
			password,
			address,
			cep,
			complement
		};

		axios.post("http://localhost:8000/public/registrar", user)
			.then(() => {
				alert("User has been registered successfully!");
				setName("");
				setEmail("");
				setAddress("");
				setComplement("");
				setCep("");
				setPassword("");
				setPasswordConfirmed("");
				onClose();
			})
			.catch(() => {
				alert("OPS! Somenthing went wrong!");
			});
	};

	return (
		<AbModal
			titulo='Cadastrar'
			aberta={open}
			aoFechar={onClose}
		>
			<ModalWrapper>
				<figure>
					<img src={RegisterImage} alt="Monitor com uma fechadura com uma pessoa com a chave" />
				</figure>
				<form onSubmit={onSubmitForm}>
					<AbCampoTexto
						label='Name'
						value={name}
						onChange={setName}
					/>
					<AbCampoTexto
						label='Email'
						value={email}
						onChange={setEmail}
					/>
					<AbCampoTexto
						label='Address'
						value={address}
						onChange={setAddress}
					/>
					<div className='wrapper-input-row'>
						<AbCampoTexto
							label='Complement'
							value={complement}
							onChange={setComplement}
						/>
						<AbCampoTexto
							label='CEP'
							value={cep}
							onChange={setCep}
						/>
					</div>
					<AbCampoTexto
						label='Password'
						value={password}
						onChange={setPassword}
					/>
					<AbCampoTexto
						label='PasswordConfirmed'
						value={passwordConfirmed}
						onChange={setPasswordConfirmed}
					/>
					<footer>
						<AbBotao texto='Cadastrar' />
					</footer>
				</form>
			</ModalWrapper>
		</AbModal>
	);
};
