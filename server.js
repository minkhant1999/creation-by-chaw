const e = require('express');
const PORT = process.env.PORT;
const PUBLIC_DIR = `${__dirname}/dist/aquatic-plants/`;

const app = e();

app.use(e.static(PUBLIC_DIR));

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));