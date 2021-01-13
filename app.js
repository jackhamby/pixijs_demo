const express = require('express');
const port = 3000;
const app = express();
const path = require('path');


app.use(express.static('public'))

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/app.html'));
});


// Examples
app.get('/1', (request, response) => {
  response.sendFile(path.join(__dirname + '/examples/1_create_pixi_application.html'));
});

app.get('/2', (request, response) => {
  response.sendFile(path.join(__dirname + '/examples/2_load_textures.html'));
});

app.get('/3', (request, response) => {
  response.sendFile(path.join(__dirname + '/examples/3_create_pixi_sprite.html'));
});

app.get('/4', (request, response) => {
  response.sendFile(path.join(__dirname + '/examples/4_center_sprite.html'));
});

app.get('/5', (request, response) => {
  response.sendFile(path.join(__dirname + '/examples/5_pixi_ticker.html'));
});

app.get('/challenges', (request, response) => {
  response.sendFile(path.join(__dirname + '/examples/challenges.html'));
});




app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
