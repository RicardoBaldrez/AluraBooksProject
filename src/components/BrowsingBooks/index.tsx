import React, { ReactElement, useState } from "react";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";

import { AbBotao, AbCard } from "ds-alurabooks";

import { ListBooks, HeaderAbCard, BodyAbCard, FooterAbCard } from "./styles";

interface BrowsingBooksProps {
  books: any;
}

interface BookProps {
  autor: string,
  descricao: string,
  imagem: string,
  nome: string,
  preco: number
}

export const BrowsingBooks = ({ books }: BrowsingBooksProps): ReactElement => {
	const [chosenBook, setChosenBook] = useState(books[1]);

	const changeBook =  (book: BookProps) => {
		setChosenBook(book);
	};

	return (
		<ListBooks>
			{books.map((book: BookProps) => {
				return (
					<li key={book.nome}>
						<img
							src={book.imagem}
							onClick={() => changeBook(book)}
							className={book.nome === chosenBook.nome  ? "selected" : ""}
							alt={`Capa do livro ${book.nome} escrito por ${book.autor}`}
						/>
					</li>
				);
			})}

			<AbCard>
				<HeaderAbCard>
					<h1>Sobre o livro</h1>
					<div>
						<AiOutlineShopping size={30} />
						<AiOutlineHeart size={30} />
					</div>
				</HeaderAbCard>
				<BodyAbCard>
					<h2>{chosenBook.nome}</h2>
					<p>
						{chosenBook.descricao.length > 50 ?
							chosenBook.descricao.substring(0, 50) + "..." :
							chosenBook.descricao
						}
					</p>
					<p>Por: {chosenBook.autor}</p>
				</BodyAbCard>
				<FooterAbCard>
					<div>
						<p>A partir de:</p>
						<p>{chosenBook.preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</p>
					</div>
					<div>
						<AbBotao texto='Comprar' />
					</div>
				</FooterAbCard>
			</AbCard>
		</ListBooks>
	);
};
