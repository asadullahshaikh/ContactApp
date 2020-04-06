// import SQLite from 'react-native-sqlite-storage';
const SQLite = require('react-native-sqlite-storage');
const db = SQLite.openDatabase('places.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, firstName TEXT NOT NULL, lastName TEXT NOT NULL,  number REAL NOT NULL);',
        [],
        (data) => {
          resolve();
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};
export const insertContact = (firstName, lastName, number) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO places (firstName, lastName, number) VALUES (?, ?, ?);',
        [firstName, lastName, number],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
          console.log(err.message, 'err');
        },
      );
    });
  });
  return promise;
};
export const fetchContact = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM places',
        [],
        (_, result) => {
          console.log(result, 'fetch');
          var dbLoopOVer = [];
          for (var i = 0; i <= result.rows.length - 1; i++) {
            const element = result.rows.item([i]);
            dbLoopOVer.push(element);
          }
          resolve(dbLoopOVer);
        },
        (_, err) => {
          reject(err);
          console.log(err, 'error');
        },
      );
    });
  });
  return promise;
};
export const deleteContact = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM places WHERE id=${id}`,
        [],
        (_, result) => {
          console.log(result, 'updated pro');
        },
        (_, err) => {
          reject(err);
          console.log(err, 'error');
        },
      );
    });
  });
  return promise;
};

export const updateContact = (firstName, lastName, number, id) => {
  // console.log(firstName, lastName, number, id);
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE places SET firstName=? , lastName=? , number=?  WHERE id=?`,
        [firstName, lastName, number, id],
        (_, result) => {
          console.log(result, 'updated');
          resolve(result);
        },
        (_, err) => {
          reject(err);
          console.log(err.message, 'error');
        },
      );
    });
  });
  return promise;
};
