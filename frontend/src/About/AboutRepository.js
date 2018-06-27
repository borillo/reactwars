const BASE_URL = 'http://localhost:8080';

export default {
  async retrieveAbout() {
    return new Promise(async (resolve, reject) => {
      var corsHeaders = new Headers();
      corsHeaders.append('Origin', '*');

      let response = await fetch(BASE_URL + '/about', { headers: corsHeaders });
      let data = await response.json();
      
      resolve(data);
    });
  }
}