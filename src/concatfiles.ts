import fs = require('fs-extra');

function generateSaveMapArray(contentString: string): Array<{ filename: string, contents: string }> {
  const result = [
    { filename: 'osoitteet_enter.txt', contents: contentString },
    { filename: 'osoitteet_puolipiste.txt', contents: contentString.split('\n').join('; ') }
  ];
  return result;
}

fs.readdir('.')
  .then(filenames => filenames.filter(name => name.match(/osoitteet_\d{2}\.txt/)))
  .then(filenames => Promise.all(filenames.map(name => fs.readFile(name)))
  .then(buffers => generateSaveMapArray(buffers.map(buffer => buffer.toString()).join('\n')))
  .then(array => Promise.all(array.map(item => fs.writeFile(item.filename, item.contents)))
  .then(() => console.log('Done!'))
  .catch(err => console.log(err));
