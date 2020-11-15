import StartupImages from '../models/StartupImages';

export default {
  render (startupImages: StartupImages) {
    return {
      id: startupImages.id,
      url: `http://localhost:3333/uploads/${startupImages.path}`,
    };
  },

  renderMany(startupImage: StartupImages[]) {
    return startupImage.map(startupImages => this.render(startupImages));
  }
};
