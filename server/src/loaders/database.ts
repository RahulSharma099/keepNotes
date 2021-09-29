import config from '../config';
import { MongoClient } from 'mongodb';
let dbClient: MongoClient;

export async function initDbClient(): Promise<MongoClient> {
  dbClient = await MongoClient.connect(config.databaseURL);
  console.log('Connected to Database');
  return dbClient;
}

export async function getDbClient(): Promise<MongoClient> {
  if (!dbClient) {
    await initDbClient();
  }
  return dbClient;
}
