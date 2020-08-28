# Data Lovers

## Índice

* [1. Introdução](#1-introdução)
* [2. Histórias de usuário](#2-historias-de-usuario)
* [3. Desenho de interface de usuário](#3-desenho-de-interface-de-usuario)
* [4. Protótipo de baixa qualidade](#4-prototipo-de-baixa-qualidade)
* [5. Protótipo de alta qualidade](#5-prototipo-de-alta-qualidade)
* [6. Problemas de usuário](#6-problemas-de-usuario)
* [7. Tecnologias utilizadas no projeto](#7-tecnologias-utilizadas-no-projeto)
* [8. Como rodar o projeto?](#8-como-rodar-o-projeto)
* [9. Como testar o projeto?](#9-como-testar-o-projeto)
* [10. GitHub Pages](#10-github-pages)
* [11. Autores](#11-autores)

***

## 1. Introdução

Sejam bem-vindos ao Projeto Data Lovers - **Rick and Morty!**

Para quem não conhece, **Rick and Morty** é uma série de animação adulto norte-americana de comédia e
ficção científica criada por Justin Roiland e Dan Harmon para o bloco de programação noturno [**_Adult Swin_**](http://www.adultswim.com/streams)
exibido aqui no Brasil através da plataforma de Streaming [**_Netflix_**](https://www.netflix.com/br/n/3SPHBNZT-1). 

A história gira em torno de Rick, um cientista louco, excêntrico e alcoólatra, e seu neto inseguro e com 
hormônios em ebulição Morty Smith, membros de uma família tipica americana, composta por Jerry, um pai
ignorante; Beth, uma mãe sensata e Summer, a irmã mais velha, típica adolescente alienada, que se compadece do
irmão quando passa a fazer parte das aventuras de seu avô. Entre planetas, universos, realidades paralelas, 
problemas conjugais, e TV a cabo, **Rick and Morty** é uma série sobre a nossa insignificância perante a tudo o que existe.

## 2. Histórias de usuário

Durante o nosso mapeamento e pequisa de usuário identificamos que:

* Os usuários gostariam de ter um ranking dos melhores episódios/ mais bem avaliados;
* Gostariam de ter uma lista com todas as temporadas disponíveis;
* Querem poder pesquisar por determinado personagem, trazendo todas as informações pertinentes a ele: (Gênero, Status, Localização);
* Poder buscar por um episódio em específico;
* Poder fazer a pesquisa apenas da temporada que deseja assistir.


## 3. Desenho de interface de usuário

No primeiro esboço feito antes de todo o mapeamento e pesquisa com os usuários, havíamos optado por uma interface onde nos apresentaria um
menu com itens que nos trouxessem cards com todas as informações sobre o personagem. Você pode visualizá-lo [**aqui**](./src/assets/PrimeiroPrototipo.png).
Porém, após toda a nossa pesquisa identificamos que não seria funcional ter um menu que nos trouxesse praticamente as mesmas informações, e ainda faria o usuário perder muito tempo clicando em várias telas sem necessidade. 

## 4. Protótipo de baixa qualidade

Após nossa pesquisa e mapeamento, desenvolvemos um novo protótipo de baixa qualidade onde o usuário teria um menu dropdwn de personagens e temporadas na página principal e dentro de cada item do menu, o usuário tem disponível um filtro onde pode buscar por ordem alfabetica, nome de personagem, episódios, temporadas, etc. Você pode visualizá-lo [**aqui**](./src/assets/PrototipoFinal.png).

## 5. Protótipo de alta qualidade

Decidimos por fazer um protótipo de alta fidelidade para visualizar melhor nosso projeto e verificar se todo o nosso mapeamento está de acordo com o que entregaremos. 

[Página Inicial](./src/assets/pagina-inicial.png) 

[Personagens](./src/assets/personagens.png) 

[Temporadas](./src/assets/temporadas.jpeg)

## 6. Problemas de usuário

Detectamos uma falha durante nossa pesquisa onde não sendo possível mostrar todos os episódios de todas as temporadas existentes, não ficou interessante para o usuário ter apenas 31 episódios disponíveis para consulta. Com isto, tiramos esta opção do nosso projeto e resolvemos incluir as opções de origem dos personagens e sua última localização. Também identificamos que a opção de ordenação por ordem alfabética ficaria mais interessante para o usuário se visivel na página inicial, e não dentro de cada item do menu como havíamos pensado anteriormente.
Outro ponto que avaliamos foi em relação aos cards. Para o usuário, a apresentação de todos os 493 cards em uma única tela pode pesar e causar eventuais travamentos, principalmente na versão mobile, dito isto, optamos por fazer uma paginação para que apresentasse somente 10 cards por página.

## 7. Tecnologias utilizadas no projeto

* HTML
* Javascript
* CSS
* NodeJs

## 8. Como rodar o projeto?

Na primeira vez em que for rodar o projeto, utilizar os seguintes comandos:

```
npm install
```

```
npm start
```

Para as próximas vezes, utilizar apenas

```
npm start
```

## 9. Como testar o projeto?

```
npm test
```

## 10. GitHub Pages

Acesse pelo link: https://kellyalves87.github.io/SAP004-data-lovers/

## 11. Autores

* [Aline Souza](https://github.com/AlineSanqueza) e [Kelly Alves](https://github.com/kellyalves87)


