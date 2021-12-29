module.exports = {
	publicPath: '',
	outputDir: '../src/main/resources/static',
	chainWebpack(config) {
		config.output.filename("js/[name].js");
	},
};