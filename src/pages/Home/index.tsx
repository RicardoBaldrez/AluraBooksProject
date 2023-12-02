import React, { ReactElement, useState } from "react";

import { AbCampoTexto } from "ds-alurabooks";

import { Banner } from "../../components/Banner";
import { SessionBooks } from "../../components/SessionBooks";
import { BrowsingBooks } from "../../components/BrowsingBooks";

export const Home = (): ReactElement => {
	const [search, setSearch] = useState("");

	const lastReleases = [
		{
			autor: "Tárcio Zemel",
			descricao: "Técnicas e ferramentas que fazem a diferença nos seus estilos",
			imagem: "/imagens/livros/css.jpg",
			nome: "CSS Eficiente",
			preco: 129.9
		},
		{
			autor: "Natan Souza",
			descricao: "Aprendendo pré-processadores CSS",
			imagem: "/imagens/livros/sass.jpg",
			nome: "Sass",
			preco: 39.9
		},
		{
			autor: "Diego Eis",
			descricao: "O caminho das pedras para ser um dev Front-End",
			imagem: "/imagens/livros/frontend.jpg",
			nome: "Guia Front-End",
			preco: 29.9
		},
	];

	const bestSellers = [
		{
			autor: "Thiago da Silva Adriano",
			descricao: "Melhore suas aplicações JavaScript",
			imagem: "/imagens/livros/typescript.jpg",
			nome: "Guia prático de TypeScript",
			preco: 59.9
		},
		{
			autor: "Akira Hanashiro",
			descricao: "A revolucionária linguagem de consulta e manipulação de dados para APIs",
			imagem: "/imagens/livros/graphql.jpg",
			nome: "GraphQL",
			preco: 9.9
		},
		{
			autor: "Vinícius Carvalho",
			descricao: "PostgreSQL",
			imagem: "/imagens/livros/postgre.jpg",
			nome: "PostgreSQL",
			preco: 29.9
		},
	];

	return (
		<>
			<Banner
				background="true"
				title='Já sabe por onde começar?'
				subTitle='Encontre em nossa estante o que precisa para seu desenvolvimento!'
			>
				<AbCampoTexto
					value={search}
					onChange={setSearch}
					placeholderAlign="center"
					placeholder="Qual será sua próxima leitura?"
				/>
			</Banner>
			<SessionBooks title='Últimos Lançamentos'>
				<BrowsingBooks books={lastReleases} />
			</SessionBooks>
			<SessionBooks title='Mais vendidos'>
				<BrowsingBooks books={bestSellers} />
			</SessionBooks>
		</>
	);
};
