const express = require('express')
const cors = require('cors')
const streamRoutes = require('./routes/streamRoutes')
require('dotenv').config();


const app = express()
const PORT = process.env.PORT || 5050

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  console.log(`Zahtev pristigao: ${req.method} ${req.url}`);
  next();
});

app.get('/api/stream', (req, res) => {
  console.log('Ruta /api/stream je pozvana');
  res.send('caoskic');
});
// app.use('/api/stream', streamRoutes)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Server ovajje pokrenut na http://localhost:${PORT}`))