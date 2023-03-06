import path from 'path';
import fs from 'fs';

export const readFilesFromDisk = (dir: string): Array<string> => {
    let data: Array<string> = [];

    fs.readdirSync(dir, 'utf8').forEach((file) => {
        data.push(fs.readFileSync(path.resolve(dir) + '/' + file, 'utf8'));
    });

    return data;
};
