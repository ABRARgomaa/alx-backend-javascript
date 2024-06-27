import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const namePromise = createUser();

  return Promise
    .all([photoPromise, namePromise])
    .then((results) => {
      const photo = results[0];
      const name = results[1];
      console.log(`${photo.body} ${name.firstName} ${name.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
