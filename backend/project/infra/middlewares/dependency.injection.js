"use strict";

const awilix = require("awilix");

const Container = () => {
  const _containerObj = awilix.createContainer();

  _containerObj.loadModules(
    [
      "../../domain/services/*/*.js",
      "../../infra/repositories/*/*.js", // Verifica que esta ruta sea correcta
    ],
    {
      formatName: "camelCase",
      cwd: __dirname,
      resolverOptions: {
        injectionMode: awilix.InjectionMode.PROXY,
        register: awilix.asClass,
      },
    }
  );

  return _containerObj;
};

module.exports = { Container };
