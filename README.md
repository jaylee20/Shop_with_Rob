# Shop With Rob

## Project Description:

Shop with Rob's client-facing retail web-portal has become significantly outdated driving an increase in complaints from customers. The increase in customer complaints has led to a decrease in customer loyalty and daily sales.

<p></p>
Project Catwalk comprises a complete refresh and modernization of Shop With Rob's retail web-portal, with the goal of increasing customer satisfaction and average session time.
<p></p>

---

## Project Tech Stack:

- **Front-End:** JavaScript, React, Styled Components
- **Back-End:** Node.js, Express, Redis Cache
- **Testing:** CircleCi, Jest, React Testing Library

---

## How To Use This Repository:

1. **Instructions:**

   1. Fork and clone repository to your local machine.
   2. Open the project and open the terminal.
   3. Create and place an API Key (Follow the API Key Information steps below).
   4. Run `npm install` in the terminal.
   5. Run `npm start` in the terminal. This will start the server.
   6. Run `npm run webpack` in the terminal. This will ensure that webpack has been installed.
   7. Run `npm run react-dev` in the terminal. This will bundle all client side files.
   8. Open http://localhost:3000 in a browser to view **Shop_with_Robs** website!
   <p></p>

2. **API Key Information**

   1. Copy the config.example.js in the config folder
   2. Rename it to config.js
   3. Replace TOKEN value of 'GITHUBKEY' with your personal access token
   <p></p>

---

## Links To Other README's Within This Repository:

1.  **API Documentation - Product Information:**

    - **Purpose:**
      - This README documents and describes the Product Information API endpoint that is used by the client-side web application.
    - **Link:**
      - [Product Information README](https://github.com/jaylee20/Shop_with_Rob/blob/main/server/README.md)
      <p></p>

2.  **Client-Side Documentation - Ratings and Reviews:**
    - **Purpose:**
      - This README documents and describes the client-side web application, specifically the Ratings and Reviews component.
    - **Link:**
      - [Client-Side README](https://github.com/jaylee20/Shop_with_Rob/blob/main/client/README.md)
      <p></p>

---

## Further Learning:

1. **How to install npm on your own on VSCode:**

   1. Run `npm init` in terminal and enter in the walkthrough info as desired (optional). This creates your package.json file.
   2. Run `npm install` in the terminal. This will create your package-lock.json file.
   <p></p>

2. **How to install webpack on your own:**
   1. Run `npm install --save-dev webpack` to download webpack locally.
   2. Run `npm install --save-dev webpack-cli` if you want to run webpack from the terminal (recommended).
   3. Make a new file named `webpack.config.js`. This will be used to tell webpack where to look for its input and where to output the bundled file.
   4. Add your configuration info into `webpack.config.js`. Make sure that your `entry` and `output` paths match your folder set up. You can name the files whatever you like, however it's standard to name the main(exports the folder content) file `index.js`.
      > Note: If your output path file cannot be found(could be the wrong path), webpack will make the file for you!
      - Example:
        ```
        module.exports = {
          entry: './client/src/index.js',
          output: {
            filename: 'bundle.js',
            path: __dirname + '/client/public',
          },
        };
        ```
   5. Copy `"react-dev": "webpack --config webpack.config.js --mode=development -w"` into your package.json `"scripts"` object (you can switch out the command name `react-dev` to whatever you like). This will be your terminal command to run webpack. The `mode` can be set to:
      - `Development:` Makes your output file easier to read if you want to trace a bug
      - `Production:` The default if you don't specify, saves space.
      - Example:
        ```
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "react-dev": "webpack --config webpack.config.js --mode=development -w"
          },
        ```
   6. Run `npm run react-dev`(or whatever you chose to name the command in 5.) in its own terminal. Webpack will automatically re-build the output/browser-using file for you whenever you make a change to your client-side `index.js`-touching code(thanks to the `-w`).

---
