export default function uploadPhoto(fileName) {
  const failed = `${fileName} cannot be processed`;
  return Promise.reject(Error(failed));
}
