import IndexTemplate from './templates/index/IndexTemplate';
import * as fs from 'fs';
import {minify} from 'html-minifier';
import getConfigOptions from './get-config-options';
import path from 'path';

const config = getConfigOptions();

const htmlMinifyOptions = {
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: true,
  removeRedundantAttributes: true,
};

const indexContents = minify(
  new IndexTemplate().render(config),
  htmlMinifyOptions,
);

const indexFilePath = path.join(__dirname, '..', 'build', 'index.html');
fs.writeFile(indexFilePath, indexContents, (err) => {
  if (err) throw err;
  console.log(indexFilePath + ' built!');
});
