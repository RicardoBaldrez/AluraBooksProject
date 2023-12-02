import React, { ReactElement, useState } from "react";

import { AbCampoTexto } from "ds-alurabooks";

import { Wrapper, WrapperContent } from "./styles";

export function Newsletter(): ReactElement {
	const [email, setEmail] = useState("");

	return (
		<Wrapper>
			<WrapperContent>
				<div>
					<header>
						<h1>Fique por dentro das novidades!</h1>
						<p>Atualizações de e-books, novos livros, <br /> promoções e outros.</p>
					</header>
				</div>
				<div>
					<AbCampoTexto
						value={email}
						onChange={setEmail}
						placeholderAlign="center"
						placeholder="Cadastre seu e-mail"
					/>
				</div>
			</WrapperContent>
		</Wrapper>
	);
}
