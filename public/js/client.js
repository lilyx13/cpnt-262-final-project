// *** form admin creation *** //
// This prints survey data to admin page
const formEndpoint = 'https://heybud-cpnt262-final.herokuapp.com/api/v0/form';
// recreate as async await function
fetch(formEndpoint)
  .then((res) => {
    if (!res.ok) {
      throw new Error (`Not OK ${res.status}`);
    }
    return res.json();
  })
  .then((formEndpoint) => {
    // create output variable
    let output = `<table>`;
    // loop through definitions
    formEndpoint.forEach((survey) => {
      // print form content in html
      output += ` <caption>Survey Data</caption><tr><th>Name</th><td>${survey.name}</td><th></tr>`;
      output += `<tr><th>Age</th><td>${survey.age}</td><th></tr>`;
      output += `<tr><th>Joint</th><td>${survey.joints}</td><th></tr>`;
      output += `<tr><th>Vaping</th><td>${survey.vaping}</td><th></tr>`;
      output += `<tr><th>Bongs</th><td>${survey.bongs}</td><th></tr>`;
      output += `<tr><th>Pipes</th><td>${survey.pipes}</td><th></tr>`;
      output += `<tr><th>Eadibles</th><td>${survey.eadibles}</td><th></tr>`;
      output += `<tr><th>Beverages</th><td>${survey.beverages}</td><th></tr>`;
      output += `<tr><th>Drops</th><td>${survey.drops}</td><th></tr>`;
      output += `<tr><th>Beverages</th><td>${survey.spray}</td><th></tr>`;
      output += `<tr><th>Daily</th><td>${survey.daily}</td><th></tr>`;
      output += `<tr><th>Often</th><td>${survey.often}</td><th></tr>`;
      output += `<tr><th>Casually</th><td>${survey.casually}</td><th></tr>`;
      output += `<tr><th>Rarely</th><td>${survey.rarely}</td><th></tr>`;
 output += `</table>`

    });
    document.getElementByClassName('admin-form-view').innerHTML = output;
  })
  .catch((err) => {
    console.log(err);
  });
