import { randomBytes } from 'crypto';

const apiKey = randomBytes(30).toString('hex');
console.log(`Votre clé API générée est : ${apiKey}`);
