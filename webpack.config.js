const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                exclude: /node-modules/,
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                exclude: /node-modules/,
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
}