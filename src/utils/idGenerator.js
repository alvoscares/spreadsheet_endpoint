const {indicator, indicatorDefault} = require('./api/indicator');

const idGenerator =  (name) => {
  const generator = indicator[name] || indicatorDefault;
  return generator;
}

module.exports = {
    idGenerator: idGenerator
}