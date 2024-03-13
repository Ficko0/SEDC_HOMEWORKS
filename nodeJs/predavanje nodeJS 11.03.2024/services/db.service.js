import fsPromise from 'fs/promises';

// Normal Method
// const service = new DataService ();
// service.readData();

// Static Method


export default class DataService {

    static async readData(path) {
        const arr = await fsPromise.readFile(path);

        return JSON.parse(arr);
    }

    static async writeData(path, data) {
        return fsPromise.writeFile(path, JSON.stringify(data, null, 2));
    }
}