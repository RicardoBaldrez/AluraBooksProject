import React, { ReactElement } from "react";
import { Wrapper, WrapperContent } from "./styles";

export function MostSearchedCategories(): ReactElement {
	const categories = [{
		id: 1,
		value: "Android"
	},
	{
		id: 2,
		value: "OO"
	},
	{
		id: 3,
		value: "Marketing Digital"
	},
	{
		id: 4,
		value: "Agile"
	},
	{
		id: 5,
		value: "Startups"
	},
	{
		id: 6,
		value: "HTML & CSS"
	},
	{
		id: 7,
		value: "Java"
	},
	{
		id: 8,
		value: "Python"
	}
	];

	return (
		<Wrapper>
			<header>
				<h1>CATEGORIAS MAIS BUSCADAS</h1>
			</header>
			<WrapperContent>
				{categories.map(category => {
					return <span key={category.id}>{category.value}</span>;
				})}
			</WrapperContent>
		</Wrapper>
	);
}
