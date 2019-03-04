const Generation = require('./index');
const GenerationTable = require('./table');
//handle api logic here
class GenerationEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }

  start() {
    this.buildNewGeneration();
  }

  stop() {
    clearTimeout(this.timer);
  }
  buildNewGeneration() {
    const generation = new Generation();
    GenerationTable.storeGeneration(generation)
      .then(({ generationId: id }) => {
        this.generation = generation;
        this.generation.generationId = id;

        console.log('new generation', this.generation);

        this.timer = setTimeout(
          () => this.buildNewGeneration(),
          this.generation.expiration.getTime() - Date.now()
        );
      })
      .catch(err => console.error(err));
  }
}

module.exports = GenerationEngine;
