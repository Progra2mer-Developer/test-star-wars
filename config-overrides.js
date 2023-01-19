const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@constants": "src/constants",
    "@hoc-helpers": "src/hoc-helpers",
    "@hooks": "src/hooks",
    "@pages": "src/pages",
    "@routes": "src/routes",
    "@services": "src/services",
    "@static": "src/static",
    "@styles": "src/styles",
    "@ui": "src/components/Ui",
    "@utils": "src/utils",
  })(config);
  return config;
};
