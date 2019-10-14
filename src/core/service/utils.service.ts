import fs from 'fs';

export function readJson(path: string) {
    const data = fs.readFileSync(path)
    return JSON.parse(String(data));
}
