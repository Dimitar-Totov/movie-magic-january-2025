import fs from 'fs/promises';
import path from 'path';

const databasePath = path.resolve('./src/database.json');

async function getDatabase(){

    const database = await fs.readFile(databasePath, {encoding: 'utf-8'});
    const data = JSON.parse(database);
    
    return data;
}

async function getAll() {
    
    const database = await getDatabase();
    return database.movies;
}

function saveDatabase(data) {
    return fs.writeFile(databasePath,JSON.stringify(data,{},2));
}

async function create(movieData) {
    
    const database = await getDatabase();
    database.movies.push(movieData);

    return saveDatabase(database);

}

export default {
    getAll,
    create,
}