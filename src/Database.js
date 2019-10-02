import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({ name: 'testeDB.db', createFromLocation: 1, });

export default class Database {

  validUser() {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM user', [], (tx, results) => {
        var temp = [];
        // for (let i = 0; i < results.rows.length; ++i) {
        //   temp.push(results.rows.item(0));
        // }
        temp = results.rows.item(0);
        //console.log(temp.user_email);
        return temp.user_name;
      });
    });
  }


  closeDatabase(db){
    if (db) {
      console.log("Closing DB");
      db.close()
        .then(status => {
          console.log("Database CLOSED");
        })
        .catch(error => {
          this.errorCB(error);
        });
    } else {
      console.log("Database was not OPENED");
    }
  };


  selectUser(emailUser, passUser) {
    return new Promise( (resolve) => {
      db.transaction(tx => {
        tx.executeSql('SELECT * FROM user WHERE user_name = ? AND user_pass = ?', [emailUser, passUser], (tx, results) => {
          let temp;
          if( results.rows.length > 0 ){
            temp = results.rows.item(0);
          }else{
            temp = false;
          }
          resolve(temp);
        });
      });


    });  
  }


  


}