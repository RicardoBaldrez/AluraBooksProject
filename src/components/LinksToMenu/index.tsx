import React, { ReactElement } from "react";
import { LinkDropdown, LinkOption, Link, SubLinksList, SubLink } from "./styles";

export const LinksToMenu = (): ReactElement => {
	return (
		<LinkDropdown>
			<LinkOption>
				<Link href="#!" className="linkDropdown">Categorias
					<SubLinksList className="subMenu">
						<SubLink>Programação</SubLink>
						<SubLink>Front-end</SubLink>
						<SubLink>Infraestrutura</SubLink>
						<SubLink>Business</SubLink>
						<SubLink>Design/UX</SubLink>
					</SubLinksList>
				</Link>
			</LinkOption>
		</LinkDropdown>
	);
};
