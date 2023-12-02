import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { WrapperOrderAccount, WrapperContent, HeaderOrderAccount, WrapperOrderOptions, WrapperOrderContent } from "./stylex";

export const LoggedArea = () => {
	const [linkChoose, setLinkChoose] = useState<string>("pedidos");

	const links = [
		"pedidos",
		"trocas",
		"cupons",
		"dados"
	];

	return (
		<WrapperOrderAccount>
			<HeaderOrderAccount>
				<h1>Minha conta</h1>
			</HeaderOrderAccount>
			<WrapperContent>
				<WrapperOrderOptions>
					<ul>
						{links.map(link => {
							return (
								<li key={link} onClick={() => setLinkChoose(link)} className={link === linkChoose ? "active-option" : ""}>
									<Link to={`/area-logada/${link}`}>{link}</Link>
								</li>);
						})}
					</ul>
				</WrapperOrderOptions>
				<WrapperOrderContent>
					<Outlet />
				</WrapperOrderContent>
			</WrapperContent>
		</WrapperOrderAccount>
	);
};
