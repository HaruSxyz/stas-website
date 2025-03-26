const path = require("path");

module.exports = {
    entry: "./src/scripts/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "../backend/static/scripts")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    mode: "development" // or "production"
};