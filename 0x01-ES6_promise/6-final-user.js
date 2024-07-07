import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const sign = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);
  return Promise
    .all([sign, upload])
    .then((result) => {
      result.map((result) => ({
        status: 'fulfilled',
        value: result,
      }));
    })
    .catch((error) => {
      error.map((error) => ({
        status: 'rejected',
        value: error,
      }));
    });
}
