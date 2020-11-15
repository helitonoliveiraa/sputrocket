import PersonalProfile from '../models/PersonalProfile';
import personal_profile_image_views from './personal_profile_image_views';

export default {
  render (personalProfile: PersonalProfile) {
    return {
      id: personalProfile.id,
      name: personalProfile.name,
      nickname: personalProfile.nickname,
      gender: personalProfile.gender,
      age: personalProfile.age,
      address: personalProfile.address,
      phone_number: personalProfile.phone_number,
      in_a_startup: personalProfile.in_a_startup,
      description: personalProfile.description,
      email: personalProfile.email,
      personal_profile_image: personal_profile_image_views.renderMany(
        personalProfile.personal_profile_image
      ),
    };
  },

  renderMany(personalProfiles: PersonalProfile[]) {
    return personalProfiles.map(personalProfile => this.render(personalProfile));
  }
};
