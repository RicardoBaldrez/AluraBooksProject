import React, { ReactElement, ReactNode } from "react";

import { SessionBooksDefault } from "./styles";

interface SectionBooksProps {
  title?: string;
  children?: ReactNode;
}

export const SessionBooks = ({ title, children }: SectionBooksProps): ReactElement => {
	return (
		<SessionBooksDefault>
			<header>
				<h1>{title}</h1>
			</header>
			<div>
				{children}
			</div>
		</SessionBooksDefault>
	);
};
