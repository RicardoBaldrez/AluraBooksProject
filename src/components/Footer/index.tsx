import React, { ReactElement } from "react";

import { Wrapper, WrapperContent } from "./styles";

export function Footer(): ReactElement {
	return <Wrapper>
		<WrapperContent>
			<div className='alura-group'>
				<ul>
					<li>Grupo Alura</li>
				</ul>
			</div>
			<div>
				<ul>
					<li><img src="/imagens/Caelum.svg" alt="Alura" />Caelum</li>
					<li><img src="/imagens/CasaDoCodigo.svg" alt="Alura" />Casa do código</li>
				</ul>
			</div>
			<div>
				<ul>
					<li><img src="/imagens/Alura.svg" alt="Alura" />Alura</li>
					<li><img src="/imagens/AluraEmpresas.svg" alt="Alura" />Alura Para Empresas</li>
					<li><img src="/imagens/AluraLATAM.svg" alt="Alura" />Alura LATAM</li>
					<li><img src="/imagens/AluraStart.svg" alt="Alura" />Alura Start</li>
					<li><img src="/imagens/MusicDot.svg" alt="Alura" />MusicDot</li>
					<li><img src="/imagens/AluraLingua.svg" alt="Alura" />Alura Língua</li>
					<li><img src="/imagens/PM3.svg" alt="Alura" />PM3</li>
				</ul>
			</div>
			<div>
				<ul>
					<li><img src="/imagens/HipstersTech.svg" alt="Alura" />Hipsters ponto Tech</li>
					<li><img src="/imagens/ScubaDev.svg" alt="Alura" />Scuba Dev</li>
					<li><img src="/imagens/LayersTech.svg" alt="Alura" />Layers ponto Tech</li>
					<li><img src="/imagens/LikeABoss.svg" alt="Alura" />Like a Boss</li>
					<li><img src="/imagens/CarreiraSemFronteira.svg" alt="Alura" />Carreira sem Fronteira</li>
					<li><img src="/imagens/HipstersJobs.svg" alt="Alura" />Hipsters ponto Jobs</li>
					<li><img src="/imagens/GUJ.svg" alt="Alura" />GUJ</li>
				</ul>
			</div>
		</WrapperContent>
	</Wrapper>;
}
