import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const sign = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);
  return Promise
    .all([sign, upload])
    .then((result) => {
      const signresult = result[0];
      const uploadresult = result[1];
      const status = 'pending';
      const fname = signresult.firstName;
      const lname = signresult.lastName;
      return [status, fname, lname, uploadresult];
    });
}
