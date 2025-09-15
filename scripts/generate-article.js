#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import {
  input,
  editor
} from '@inquirer/prompts';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const main = async () => {
  const title = await input({ message: 'Article title:' });
  const description = await input({ message: 'Description:' });
  const published = await input({ message: 'Published date (YYYY/MM/DD):', default: new Date().toISOString().slice(0, 10).replace(/-/g, '/') });
  const slug = await input({ message: 'Slug:' });
  const contentMd = '---\n**[Also check my other articles](/articles/)**';

  const metadata = `---\ntitle: "${title}"\ndescription: "${description}"\npublished: ${published}\nslug: "${slug}"\n---\n`;
  const fileContent = `${metadata}\n${contentMd.trim()}\n`;
  const fileName = `${slug}.md`;
  const outDir = path.join(__dirname, '../content/articles');
  const outPath = path.join(outDir, fileName);

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, fileContent);
  console.log(`Article generated: ${outPath}`);
};

main();
