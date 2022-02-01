module.exports = {
    mode : "development",
    entry : "./app.js",
    resolve : {
        
    },
    module : {
        rules : [
            {
                test : /\.js/,
                exclude : /node_modules/,
                loader : "babel-loader",
                options : {
                    presets : ["@babel/preset-react"]
                }
            }
        ]
    }
}