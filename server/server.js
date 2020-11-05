const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (_, res) => {
	res.json({ bobo: 'proof' });
});

app.listen(PORT, () => console.log(`Server up ::${PORT}`));
