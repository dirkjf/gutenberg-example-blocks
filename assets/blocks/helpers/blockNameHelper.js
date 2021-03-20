import blocksConfig from 'config/blocks.yaml';

const blockNameHelper = {
  namespacedKebabCase(str) {
    return blocksConfig.namespace + '/' + this.kebabCase(str);
  },

  frontEndCase(str) {
    return blocksConfig.namespace + '-' + this.kebabCase(str);
  },

  kebabCase(str) {
    return str
      .replace(/([a-z])([A-Z])/g, '$1-$2')    // get all lowercase letters that are near to uppercase ones and insert dash.
      .replace(/[\s_]+/g, '-')                // replace all spaces and low dash
      .toLowerCase()                          // convert to lower case
  },

  humanCase(str) {
    return str
      .replace(/([a-z])([A-Z])/g, '$1 $2')    // get all lowercase letters that are near to uppercase ones and insert whitespace.
      .replace(/[_-]/g, ' ')                  // replace dash and underscore with a whitespace
      .replace(/(\w)(\w*)/g,
        function (g0, g1, g2) {
          return g1.toUpperCase() + g2.toLowerCase();
        });
  }
}

export default blockNameHelper;
