export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      throw new Error('Error occurred');
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
