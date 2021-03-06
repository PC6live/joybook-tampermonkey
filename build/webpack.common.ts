import { Configuration } from "webpack";
import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import WebpackUserscript from "webpack-userscript";

export type TENV = {
	WEBPACK_BUNDLE: boolean;
	NODE_ENV: "development" | "production";
};

const resolve = (str: string): string => path.resolve(__dirname, str);

const headers: WebpackUserscript.HeaderObject = {
	name: "bilibili-joybook",
	version: "0.0.7",
	description: "共享大会员",
	author: "PC6live",
	include: "*://*.bilibili.com/*",
	exclude: "*://passport.bilibili.com/*",
	homepage: "https://github.com/PC6live/joybook-tampermonkey",
	supportURL: "https://github.com/PC6live/joybook-tampermonkey/issue",
	grant: [
		"GM_cookie",
		"GM_setValue",
		"GM_getValue",
		"GM_addStyle",
		"GM_deleteValue",
		"GM_getTab",
		"GM_getTabs",
		"GM_listValues",
		"GM_saveTab",
		"unsafeWindow",
	],
	"run-at": "document-start",
	noframes: true,
};

const config = (env: TENV): Configuration => {
	const localIdentName = env.NODE_ENV === "development" ? "[path][name]__[local]" : "[hash:base64]";
	return {
		entry: resolve("../src/index.ts"),
		output: {
			path: resolve("../dist"),
			filename: "joybook.user.js",
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					use: "babel-loader",
					exclude: /node_modules/,
				},
				{
					test: /\.ts(x)?$/,
					loader: "ts-loader",
					exclude: /node_modules/,
				},
				{
					test: /\.s(a|c)ss$/,
					use: ["style-loader", "css-loader", "sass-loader"],
					exclude: /\.module\.s(a|c)ss$/,
				},
				{
					test: /\.s(a|c)ss$/,
					use: [
						"style-loader",
						{
							loader: "css-loader",
							options: {
								importLoaders: 1,
								modules: {
									localIdentName,
								},
							},
						},
						"sass-loader",
					],
					include: /\.module\.s(a|c)ss$/,
				},
				{
					test: /\.svg$/,
					use: [
						{
							loader: "@svgr/webpack",
						},
					],
				},
			],
		},
		resolve: {
			alias: {
				"@": resolve("../src"),
			},
			extensions: [".tsx", ".ts", ".js"],
		},
		plugins: [new CleanWebpackPlugin()],
	};
};

export { resolve, headers };

export default config;
