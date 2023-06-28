import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    
    return {
      photo,
      user,
    };
  } catch (error) {
    console.error(error); // Optional: log the error for debugging purposes
    return {
      photo: null,
      user: null,
    };
  }
}

