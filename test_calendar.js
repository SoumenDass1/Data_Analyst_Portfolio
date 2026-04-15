const https = require('https');
https.get('https://github-contributions-api.jasonraimondi.com/v1/commits/SoumenDass1', (res) => {
  console.log(res.statusCode);
});
