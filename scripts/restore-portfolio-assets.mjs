import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {dirname, resolve} from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'source-assets/yangtze-city-loop');
const manifest = JSON.parse(await readFile(resolve(source, 'manifest.json'), 'utf8'));
const gif = Buffer.concat(await Promise.all(manifest.parts.map(name => readFile(resolve(source, name)))));
if (gif.length !== manifest.bytes || createHash('sha256').update(gif).digest('hex') !== manifest.sha256) {
  throw new Error('The YANGTZE GIF source is incomplete or corrupted.');
}
await mkdir(resolve(root, 'public/assets'), {recursive:true});
await writeFile(resolve(root, 'public/assets/yangtze-city-loop.gif'), gif);
console.log('Restored original YANGTZE GIF (' + gif.length + ' bytes).');
