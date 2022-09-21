{
    "env": {
      "browser": true,
      "node": true,
      "commonjs": true,
      "jest": true,
      "es6": true
    },
    "globals": {
      "fail":true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 2018
    },
    "rules": {
      "no-console": "off",
      "indent": "off",
      "quotes": "off",
      "comma-dangle": "off",
      "semi": [ "error", "always" ],
      "no-unused-vars": [1, {"vars": "local", "args": "none"}]
    }
  }