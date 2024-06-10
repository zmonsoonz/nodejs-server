const path = require('path');
//создает путь до файла с помощью path библиотеки
const createPath = (page) => path.resolve(__dirname, '../ejs-views', `${page}.ejs`);

module.exports = createPath;