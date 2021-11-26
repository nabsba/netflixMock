module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
	"env": {
    "test": {
      "plugins": ["transform-es2015-modules-commonjs"]
    }
  },
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ]
}