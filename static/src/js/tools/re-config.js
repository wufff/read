require.config({
	// baseUrl: "http://wufff.estudyimages.dev.dodoedu.com/static/src/js",
	baseUrl: "/read/static/src/js",
	// urlArgs: "v=" + new Date().getTime(),
	paths: {
			 "jquery": "./lib/jquery/jquery1.21",
			 "layer":"./lib/layer/layer",
		     "laydate":"./lib/laydate/laydate",
		     "md": "./ui/md",
			 "paths":"./tools/paths",
			 "page": "./tools/pages",
		     "head":"./app/headerLogin",
		     "swiper":"./lib/swiper/swiper.min",
	},
	shim: {
		  "ZeroClipboard":{
         	exports:"ZeroClipboard"
          },
		  "Swiper":["jquery"], //声明依赖简写
          "layer":{
          	exports:"layer"
          },
		  "laydate":{
			exports:"laydate"
		},
	}
});
