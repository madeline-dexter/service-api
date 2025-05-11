const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Parse and merge all YAML files in a directory
const mergeYaml = (directoryPath) => {
  const mergedYaml = {};

  fs.readdirSync(directoryPath)
    .filter((file) => file.endsWith('.yml'))
    .forEach((file) => {
      const filePath = path.join(directoryPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const parsedYaml = yaml.load(fileContent);
      Object.assign(mergedYaml, parsedYaml);
    });

  return mergedYaml;
};

module.exports = { mergeYaml };
