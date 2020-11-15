import StartupProfile from '../models/StartupProfile';
import startup_profile_image_views from './startup_profile_image_views';
import startup_images_views from './startup_images_view';

export default {
  render (startupProfile: StartupProfile) {
    return {
      id: startupProfile.id,
      name: startupProfile.name,
      description: startupProfile.description,
      email: startupProfile.email,
      startup_profile_image: startup_profile_image_views.renderMany(
        startupProfile.startup_profile_image
      ),
      startup_images: startup_images_views.renderMany(startupProfile.startup_images),
    };
  },

  renderMany(startupProfiles: StartupProfile[]) {
    return startupProfiles.map(startupProfile => this.render(startupProfile));
  }
};
