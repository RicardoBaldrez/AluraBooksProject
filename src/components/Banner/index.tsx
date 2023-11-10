import React, { ReactElement, ReactNode } from "react";
import { BannerWhereToStart } from "./styles";

interface BannerProps {
  title?: string;
  background?: string;
  subTitle?: string;
  children?: ReactNode;
}

export const Banner = ({title, subTitle, background, children}: BannerProps): ReactElement => {
	return (
		<BannerWhereToStart background={background}>
			<header>
				<h1>{title}</h1>
			</header>
			<p>{subTitle}</p>
			{children}
		</BannerWhereToStart>
	);
};
