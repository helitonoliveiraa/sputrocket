import StartupProfileImages from '../models/StartupProfileImages';

export default {
  render (startupProfileImages: StartupProfileImages) {
    return {
      id: startupProfileImages.id,
      url: `http://localhost:3333/uploads/${startupProfileImages.path}`,
    };
  },

  renderMany(startupProfileImages: StartupProfileImages[]) {
    return startupProfileImages.map(startupProfileImage => this.render(startupProfileImage));
  }
};
