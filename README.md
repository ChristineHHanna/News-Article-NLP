# Project Overview

Build a web tool that allows users to run **Natural Language Processing (NLP)** on articles or blogs found on other websites.

The goal of this project is to give you practice with:
- _Setting up Webpack_
- _Sass styles_
- _Webpack Loaders and Plugins_
- _Creating layouts and page design_
- _Service workers_
- _Using APIs and creating requests to external urls_
- _Installing Jest to test the functionality of the functions_

## Technologies Used
- **HTML**
- **CSS/SCSS**
- **JavaScript**
- **NodeJs**
- **Jest**

## Getting started

### Follow the steps and begin your project setup:

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

### Setting up the API

You can find the API [here](https://www.meaningcloud.com/developer/sentiment-analysis). Once you create an account with MeaningCloud, you will be given a license key to start using the API. .

At the root of the project, create a new file named .env. Inside the file, add the following line, replacing the stars with your personal API key.

API_KEY=**************************

### Scripts

Use the following command to start the developer server. This should open a new window in your browser with the app running on localhost:8080
```
`npm run build-dev-area`
```
To run the production server (with express), run these commands. The production server runs on localhost:8081
```
`npm run build-prod-site`
`npm start` 
```
To run the functionality test of the functions in Js folder.
```
`npm run test-jest`

```

### Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.

### Credits
This Project was done by @ChristineHHanna.