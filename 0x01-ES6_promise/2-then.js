export default function handleResponseFromAPI(promise) {
  return promise.then(() => {
    console.log({ status: 200, body: 'success' });
  }).catch(() => {
    console.error('Error occurred');
    return new Error('Error occurred');
  }).finally(() => {
    console.log('Got a response from the API');
  });
}
