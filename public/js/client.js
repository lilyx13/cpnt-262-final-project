// Endpoint
const endpoint = '/api/v0/gallery';
// Fetch
fetch(endpoint)
  // Error Handling
  .then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return res.json();
  });
// Gallery Loading
  .then((gallery) => {
    // Gallery Content Here
  });
// Catch
  .catch ((err) => {
  console.log(err);
});