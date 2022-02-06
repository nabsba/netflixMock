# 🚀  Netflix Mock 🚀 

This repo houses the assets used to build the 'Netflix mock' website (first page) with some features of it.

## Technologies 

- Main library: [**React**](https://reactjs.org/docs/getting-started.html).
- Bundler: [**Webpack**](https://webpack.js.org/).
- Linter: [**Eslint**](https://eslint.org/).  
- Typing: [**Typescript**](https://www.typescriptlang.org/). 
- Backend: [**NodeJS**](https://nodejs.org/en/). 
- Version control: [**GIT**](https://git-scm.com/doc). 

## Structure

### Frontend
The **frontend** is implemented as following:

- asset: images, videos.
- component: components of the app.
- service: services related to components with their logics, data, reducer & type.

The following picture shows how **components** have been implemented:

![nab](https://miro.medium.com/max/1400/1*fOVQj8dgr1Oobj3Uta24JQ.png)

>*Pages are hydrated with datas ([**redux**](https://redux.js.org/) is used to manage datas) that will then be passed throw the different steps of the **atomic design** .*

 ### Backend
The **backend** is implemented as following:

- Controller: this is where routes are defined.
- Model:
  - Common: shared functions and types.

 ### Version control

**Git: workflow**

![gitflow](https://i.stack.imgur.com/RSAAo.png)

**Convention commits**
- **Feat** Commits, that adds a new feature.
- **Fix** Commits, that fixes a bug.
- **Refactor** Commits, that rewrite/restructure your code, however - does not change any behaviour.
- **Perf** Commits are special refactor commits, that improves performance.
- **Style** Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc).
- **Test** Commits, that add missing tests or correcting existing tests.
- **Docs** Commits, that affect documentation only.
- **Build** Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
- **ocd_ps** Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
- **Chore** Miscellaneous commits e.g. modifying .gitignore, eslint, prettier.
- **Merge** Merge branches.

### The application

#### Features:
- Mock the design of the first page of [**Netflix**](https://www.netflix.com/).
- A random movie with his description fetched from an API is played in the header.
- Multiple lists of videos with descriptions are retrieved from an API and displayed as cards.
- If the video of the card is available, the video will start to play.

## Installation
#### Terminal
```
# Install dependencies 

Frontend (root level):
yarn 
Backend:
cd ./backend/apis/netflix
yarn 
```
#### Configuration

Create **.env** file in ***frontend/*** and add:
```
SKIP_PREFLIGHT_CHECK=true
REACT_APP_DEVELOPMENT=true
REACT_APP_NETFLIX_KEY=XXX
HOST=LOCAL
```
> Note: You should add your own API key. To get it, follow the documentation [**Themoviedb**](https://developers.themoviedb.org/3/getting-started/introduction).

Create a second **.env** file in *** backend/apis/tnwc/dist*** and add:
```
HOST_PORT=LOCAL
DEVELOPMENT=true
HTTPS_LOCAL=false
```
> Note: at this stage, the folder 'dist' is not here yet. It will be created once you run 'yarn tsc'. See the point 'Usage' just bellow.

> Note: HTTPS_LOCAL=true would require you to follow this documentation from [**node.js**](https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/). But, it is not compulsory to run the app as long as HTTPS_LOCAL is set to false.

## Usage

#### Backend
- Terminal, path to be in:
```
cd backend/apis/netflix
```

- Run typescript

```
yarn tsc 
```
- Run node.js

```
nodemon dist/app
```
> Note: those commands must run simultaneously. Therefore, two sessions of the terminal should be opened.

#### Frontend 

- Terminal, path to be in
```
Root of the application
```
- Run application

```
yarn dev
```

## Contributing
Pull requests or advises are always welcome. 
