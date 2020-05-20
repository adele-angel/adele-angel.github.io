<img src="logo.png" alt="Adele Angel" width="100" height="100" align="right"/>

# adele-angel.github.io [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4)](https://github.com/prettier/prettier) [![CSS methodology: BEM](https://img.shields.io/badge/CSS_methodology-BEM-brightgreen)](http://getbem.com/introduction/) [![npm version: 6.14.5](https://img.shields.io/badge/npm%20version-6.14.5-blue)](https://www.npmjs.com/) [![node version: 14.2.0](https://img.shields.io/badge/node%20version-14.2.0-blue)](https://nodejs.org/) [![@vue/cli: 4.3.1](https://img.shields.io/badge/@vue/cli-4.3.1-blue)](https://github.com/vuejs/vue-cli)

:warning: :construction: _**work in progress**_

This repository contains the source code and project files for my personal portfolio.

Website: https://adele-angel.github.io/

## Built with

- Vue.js as client-side framework
- JSX (ES6 JavaScript syntax)
- Sass as CSS pre-processor (SCSS)
- HTML5, CSS3
- Node.js as runtime environment
- Express.js as server-side framework

### Prerequisites

- Single page application
- MVC pattern: Model-View-Controller architecture
- Reactive state management (Redux pattern using VUEX)
- Form validation
- Error handling

### Features

- Responsive layout
- Themes (dark/light mode)
- Animations

## Usage

```
$ git clone https://github.com/adele-angel/adele-angel.github.io.git
$ cd /adele-angel.github.io/portfolio
$ npm run serve
```

Open [`localhost:8080`](http://localhost:8080) in a browser

## Packages

**Client dependencies**

```
$ npm install --save
@fortawesome/vue-fontawesome
@fortawesome/fontawesome-svg-core
@fortawesome/free-brands-svg-icons
@fortawesome/free-regular-svg-icons
@fortawesome/free-solid-svg-icons
```

**Server dependencies**

```
$ npm install --save cors express body-parser mongoose
$ npm install --save-dev nodemon
```

## Future improvements and changes

- [ ] Preform unit testing with Jest
- [ ] Preform E2E testing with Cypress
- [ ] Browser support: because this project uses CSS3 features, it's only meant for modern browsers. Some browsers currently fail to apply some of the animations correctly. Chrome and Firefox have full support.
- [ ] Code refactoring

| Copyrights `:warning:`                                                                |
| ------------------------------------------------------------------------------------- |
| The logo and favicon images for this portfolio were created by me and are copyrighted |

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
