import fs = require('fs-extra');
import { Parser } from './modules/parser/parser';

const parser = new Parser();
let addresses: string[];

fs.readFile('varauslistaus.html')
  .then(contents => contents.toString())
  .then(html => addresses = parser.extractAddressesFromHtml(html))
  .then(() => fs.readdir('.'))
  .then(files => files.filter(filename => filename.match(/osoitteet_\d{2}\.txt/)).length)
  .then(index => fs.writeFile('osoitteet_' + ('0' + (index + 1)).slice(-2) + '.txt', addresses.join('\n'), 'utf-8'))
  // tslint:disable-next-line:no-console
  .then(() => console.log('Done!'))
  // tslint:disable-next-line:no-console
  .catch(err => console.log(err));
