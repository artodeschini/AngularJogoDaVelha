# Jogo Da Velha

Este projeto foi desenvolvido com [Angular CLI](https://github.com/angular/angular-cli) version 15.2.3.

Trata-se de um jogo com uma certa IA, nada muito complexo você joga contra o computador. São jogadas aleatórias porém 100% funcionais.

O código para o as manipulações se encontrar como padrão na camada service `app/jogo-da-velha/shared/jogo-da-velha.service.ts`

[service](./src/app/jogo-da-velha/shared/jogo-da-velha.service.ts)

## requisitos

* Node
* npm
* npx
* git

## instalar as dependencias

```bash
npm install
```

## Development server

Para executar como desenvolvemento

```bash
npm run ng serve
```

[acesso local](http://localhost:4200/)

## Code scaffolding (geracao de codigo)

executado com `npm run ng g component component-name` para gerar um novo component. pode ser usado também para outros `npm run ng g directive|pipe|service|class|guard|interface|enum|module`.

## Build

Para buildar a app os build serão feitos no diretorio dist

```bash
npm run ng build
```

## execucao de testes unitarios

voce pode executar como o comando abaixo e ajudar a desenvolve-los

Eu não me detive a escreve-los e testa-los

```bash
npm run ng test
```

Para mais informações sobre o [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## guia de referencia

Para mais informações use

```bash
npm run ng help
```

Você pode acessar a pagina do [Angular CLI Overview and Command Reference](https://angular.io/cli).
