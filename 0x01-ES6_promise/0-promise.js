export default function getResponseFromAPI() {
  const promise = new Promise((res, rej) => {
    res('success');
    rej(Error('fail'));
  });
  return promise;
}
