const _ = require("lodash");

module.exports.Searchables = class {
  constructor(data) {
    this.indexes = [];
    this.data = data; // object or array to be searched
  }
  /**
   * 
   * @param {*} index 
   */
  addIndex(index) {
    if(_.isArray(index)) return this.indexes = _.concat(this.indexes, index)
     this.indexes.push(index);
  }

  /**
   * 
   * @param {*} keyword 
   * @returns Promise that resolves a result matching the keyword at the specified indexes
   */
  find(keyword) {
    return new Promise((resolve, reject) => {
      try {
        const filtered = _.filter(
          this.data,
          function (data) {
            return !_.isEmpty(
              _.find(
                // dynamically generate searchable indexes
                _.concat(
                  _.map(this.indexes, function (index) {
                    return `${data[index]}`
                      .toLowerCase()
                      .split(/[^a-zA-Z0-9]/g);
                  })
                ),
                function (word) {
                  return _.find(
                    `${keyword}`.toLowerCase().split(/[^a-zA-Z0-9]/g),
                    function (keyPhrase) {
                      return `${word}`.toLowerCase().includes(keyPhrase);
                    }
                  );
                }
              )
            );
          }.bind(this)
        );
        resolve(filtered)
      } catch (error) {
        reject(error);
      }
    });
  }
};
