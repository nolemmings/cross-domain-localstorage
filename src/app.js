const express = require('express');
const exphbs = require('express-handlebars');

exports.start = (home, port) => {
  const app = express();
  app.use(express.static(`${__dirname}/public`));

  const hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: `${__dirname}/views/layouts`,
  });

  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  app.set('views', `${__dirname}/views`);

  app.get('/', (req, res) => {
    res.render(home)
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  });
}
