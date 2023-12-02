import React, { useEffect, useState } from "react";

import axios from "axios";
import { AbBotao } from "ds-alurabooks";

import { Section, ListRequests, WrapperButtons, WrapperError } from "./styles";
import { IPedido } from "../../../interfaces/IPedido";


const Requests = () => {
	const [orders, setOrders] = useState<IPedido[]>([]);
	console.log(orders);

	const currencyFormat = Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" });

	const removeOrder = (orderId: number) => {
		const token = sessionStorage.getItem("token");

		axios.delete<IPedido[]>(`http://localhost:8000/pedidos/${orderId}`, {
			headers: {
				"Authorization": `Bearer ${token}`
			}
		})
			.then(() => {
				setOrders(orders => orders.filter(order => order.id !== orderId));
			})
			.catch(error => console.error(error));
	};

	useEffect(() => {
		const token = sessionStorage.getItem("token");

		axios.get<IPedido[]>("http://localhost:8000/pedidos", {
			headers: {
				"Authorization": `Bearer ${token}`
			}
		})
			.then(response => setOrders(response.data))
			.catch(error => console.error(error));
	}, []);


	return (
		<Section>
			<h1>Pedidos</h1>
			<ListRequests>
				{orders.length > 0 && orders?.map(order => (
					<li key={order.id}>
						<div>
							<p>Pedido: <strong>{order.id}</strong></p>
							<p>Data do pedido: <strong>{new Date(order.data).toLocaleDateString()}</strong></p>
							<p>Valor total: <strong>{currencyFormat.format(order.total)}</strong></p>
							<p>Entrega realizada em: <strong>{new Date(order.entrega).toLocaleDateString()}</strong></p>
						</div>
						<WrapperButtons style={{ display: "flex", justifyContent: "space-between", width: "22%" }}>
							<AbBotao texto='Detalhes' />
							<AbBotao texto='Excluir' onClick={() => removeOrder(order.id)} />
						</WrapperButtons>
					</li>
				))}
				{!orders || orders.length === 0 && (
					<WrapperError>
						<h1>No orders found</h1>
					</WrapperError>
				)}
			</ListRequests>
		</Section>
	);
};

export default Requests;
