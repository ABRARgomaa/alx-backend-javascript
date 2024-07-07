import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const upload = uploadPhoto();
  const creat = createUser();
  return Promise
    .all([upload, creat])
    .then((result) => {
      const photo = result[0];
      const name = result[1];
      console.log(`${photo.body} ${name.firstName} ${name.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
