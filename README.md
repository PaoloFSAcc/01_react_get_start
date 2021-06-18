# 01_react_get_start
Full Stack University - Pluralsight course by Samer Buna


The playground folder has some examples on the usage of cool react features

The cra-test project was created using the npx create-react-app command. NPX is for executing, so it always downloads the latest version of everything before installing.

To create a react project from scratch, use:

jscomplete.com/reactful

Steps:

1. Create folder (fulljs)and go there
2. run npm init
3. Install production dependencies:
    - npm i express: to create a nodejs web server
    - npm i react react-dom: Packages that contain react library
    - npm i webpack webpack-cli: Module bundler. Well put it in modules, just one file for the browser
    - npm i babel-loader @babel/core @babel/node @babel/preset-env @babel/preset-react: Compiles jsx into react regular react api calls. If it sees jsx -> turn it to react calls. 
3. Install development dependencies:
    - npm i -D nodemon: to restart node when we make changes
    - npm i -D eslint babel-eslint eslint-plugin-react eslint-plugin-react-hooks: Linter

4. Configure ESLint itself. With example file, top level and example attached.
5. Folder structure:
            fulljs/
            dist/
                main.js
            src/
                index.js
                components/
                App.js
                server/
                server.js
6. Configure babel: Create a babel.config.js top and see attached example: Instructs babel to use those presents
7. Same but with webpack.config.js. Tells to invoke babel when it sees a js file
8. Under package.json to run the webpack command and a webserver. Added under scripts. To run development server and to bundle with webpack
9. Add src/components/App.js, src/index.js, src/server/server.js with example content

Using Samers script
npx reactful star-match

