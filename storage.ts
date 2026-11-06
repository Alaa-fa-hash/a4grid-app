// Offline-first project persistence. The database stays on the device; no network is needed.
// @ts-ignore: react-native-sqlite-storage ships without bundled TypeScript declarations.
import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);
const database = SQLite.openDatabase({name: 'a4grid.db', location: 'default'});

export async function initLocalStore() {
  const db = await database;
  await db.executeSql('CREATE TABLE IF NOT EXISTS projects (id INTEGER PRIMARY KEY, name TEXT NOT NULL, payload TEXT NOT NULL, updated_at TEXT NOT NULL)');
}

export async function saveProject(name: string, payload: unknown) {
  const db = await database;
  await db.executeSql('INSERT OR REPLACE INTO projects (id, name, payload, updated_at) VALUES (1, ?, ?, ?)', [name, JSON.stringify(payload), new Date().toISOString()]);
}
