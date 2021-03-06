import dotenv from 'dotenv';
import fs from 'fs';


process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/** To create JWT key files run this command :
 * ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
 */
const RSA_PRIVATE_KEY = fs.readFileSync(__dirname + '/../../jwtRS256.key');

const envFound = dotenv.config();

if (envFound.error) {
    throw new Error('Could not find .env file!');
}

const imagesSize = {
    thumbnail: {
        width: 64,
        height: 64,
    },
    small: {
        width: 240,
        height: 240,
    },
    medium: {
        width: 480,
        height: 480,
    },
    large: {
        width: 960,
        height: 960,
    },
};

export default {
    port: parseInt(process.env.PORT || '8000', 10),
    databaseURL: process.env.MONGO_URI,
    origins: process.env.ORIGINS,
    jwtSecret: RSA_PRIVATE_KEY,
    imagesSize,
};