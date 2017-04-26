# hrsf74-mvp-photoalbumproject
short MVP practice with React and MySql



## Overall
[ ] determine basic file structure for front-end
  - app
  - db
  - lib
  - public
  - server

[ ] set up `npm install` with packages
  [ ]`npm init` 

  - [ ] react
  - [ ] react-dom
  - [ ] babel-core `npm install --save-dev babel-core`
  - [ ] babel-loader
  - [ ] babel-preset-react
    - [ ] create .babelrc `{presets:['react']}`
  - [ ] webpack `npm install --save-dev webpack webpack-dev-server html-webpack-plugin`
  - [ ] webpack-dev-server
  - [ ] html-webpack-plugin
    - **webpack.config.js** *This file must be located in the outermost layer of your root directory, and must be named webpack.config.js. It is where you will put all of the details required to make webpack operate. -- In your root directory, create a new file named webpack.config.js.*

    ```javascript
    Webpack needs to know three things:
          What JavaScript file it should transform.
          Which transformations it should use on that file.
          Where the new, transformed file should go.```

    - `module.exports` All of webpack's configuration will go inside of that object literal!.
    - **entry point** The first thing that webpack needs to know is an entry point. The entry point is the file that Webpack will transform. -- Your entry point should be the outermost component class of your React project.
      ```javascript
      module.exports = {
        entry: __dirname + app/index.js
      }```

  

### Tasks to Complete 
[ ] 