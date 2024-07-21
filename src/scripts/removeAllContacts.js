import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  return fs.writeFile(PATH_DB, JSON.stringify([]));
};

removeAllContacts();
