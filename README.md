# Caju Front End Teste

Esse é um desafio técnico para você demonstrar suas habilidades como frontend, sua missão será dar continuidade ao desenvolvimento da plataforma de admissão que consiste em duas telas, a tela de `Dashboard` e uma tela de `Cadastro`.

## Tecnologias utilizadas

O projeto foi feito com as seguintes tecnologias:

- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [ReactJS](https://react.dev/)
- [React-hooks](https://react.dev/reference/react)
- [Styled-Components](https://styled-components.com/)
- [Playwright](https://playwright.dev/)

## Instalação

**Versão do Node**

```
20.17
```

### Instalação do projeto

```
nvm install 20.17
nvm use 20.17
npm install --global yarn
yarn
```

Ao executar o app em modo `dev`, é possível ter acesso à ele através do link: [http://localhost:8086](http://localhost:8086)

## Ambiente Local

### Subir e buildar aplicação

```
- Sobe uma versão em modo dev
yarn dev

- Faz o build da versão de produção
yarn build

- Sobe a versão do build localmente
yarn serve
```

Ao executar o app em modo `dev`, é possível ter acesso à ele através do link: [http://localhost:8086](http://localhost:8086)

### Executar os testes

```
- Testes unitários
yarn test

- Cobertura geral
yarn test:coverage

- Testes Integração
yarn e2e

- Testes End2End
yarn e2e:ui
```

### Code Formatter

```
- Formata os arquivos seguindo o padrão do projeto
yarn prettier

- Garante que os arquivos estejam seguindo o padrão do projeto
yarn eslint
```

## TODO

```
- Separar componentes de formulário para futuras reutilizações (DRY)
- Ajustar layout (visual) componentes (Modal, TextField, Button…)
- Padronizar cores e estilos do projeto (Design System)
- Criar componente Toast
- Atualizar componente de Dashboard para utilizar contextApi (evitar Prop Drilling)
- Persistir filtros na listagem de registros
- Criar hooks que implementem os repositórios (React Query)
- Criar mais testes unitarios
- Criar mais testes E2E
```
