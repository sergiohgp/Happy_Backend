import Image from '../models/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`,
      created_at: image.created_at,
      updated_at: image.updated_at,
    };
  },

  renderMany(images: Image[]) {
    return images.map(image => {
      return this.render(image);
    });
  },
};
