const fetch = require('node:fetch');
(async () => {
    try {
        const d = await fetch('https://github-calendar.vercel.app/api?username=SoumenDass1').then(r => r.text());
        console.log(d.substring(0, 500));
    } catch(e) {}
})();
