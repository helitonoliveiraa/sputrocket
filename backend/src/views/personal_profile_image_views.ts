import PersonalProfileImage from '../models/PersonalProfileImage';

export default {
  render (personalProfileImage: PersonalProfileImage) {
    return {
      id: personalProfileImage.id,
      url: `http://localhost:3333/uploads/${personalProfileImage.path}`,
    };
  },

  renderMany(personalProfileImages: PersonalProfileImage[]) {
    return personalProfileImages.map(personalProfileImage => this.render(personalProfileImage));
  }
};
