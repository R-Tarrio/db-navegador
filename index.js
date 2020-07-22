'use strict';

let DB_NAME = 'coditaDB';
let DB_VERSION = 1.0;
let DB;
let OPB = "users";
let STORES = false;

export default {
    config(config){
        DB_NAME = config.DB_NAME || "";
        DB_VERSION = config.DB_VERSION || 1.0;
        STORES = config.STORES || false;
    },
    store(db=false){
        if(db){
            OPB = db;
            return this;
        }else{
        }
    },
    async storeFind(key, valor){
        var data = await this.getStore();
        return data.find(a=>{
            return a[key] == valor;
        });
    },
    async getDb() {
        return new Promise((resolve, reject) => {

            if(DB) { return resolve(DB); }
            let request = window.indexedDB.open(DB_NAME, DB_VERSION);
            
            request.onerror = e => {
                reject('Error');
            };
    
            request.onsuccess = e => {
                DB = e.target.result;
                resolve(DB);
            };
            
            request.onupgradeneeded = e => {
                let db = e.target.result;
                if(STORES){
                    STORES.forEach(a=>{
                        db.createObjectStore(a, { autoIncrement: true, keyPath:'id' });
                    });
                }else{
                    // db.createObjectStore("users", { autoIncrement: true, keyPath:'id' });
                    // db.createObjectStore("albun", { autoIncrement: true, keyPath:'id' });
                    // db.createObjectStore("fotos", { autoIncrement: true, keyPath:'id' });
                }
            };
        });
    },
    async deleteCat(cat, opb="users") {

        OPB = opb;

        let db = await this.getDb();

        return new Promise(resolve => {

            let trans = db.transaction([OPB],'readwrite');
            trans.oncomplete = () => {
                resolve();
            };

            let store = trans.objectStore(OPB);
            store.delete(cat.id);
        }); 
    },
    async getStore(opb="users") {

        let db = await this.getDb(OPB);

        return new Promise(resolve => {

            let trans = db.transaction([OPB],'readonly');
            trans.oncomplete = () => {
                resolve(cats);
            };
            
            let store = trans.objectStore(OPB);
            let cats = [];
            
            store.openCursor().onsuccess = e => {
                let cursor = e.target.result;
                if (cursor) {
                    cats.push(cursor.value)
                    cursor.continue();
                }
            };

        });
    },

    async saveCat(cat) {

        let db = await this.getDb();

        return new Promise(resolve => {

            let trans = db.transaction([OPB],'readwrite');
            trans.oncomplete = () => {
                resolve(cat);
            };

            let store = trans.objectStore(OPB);
            store.put(cat);
            

        });
    
    },
    async insert(cat) {

        let db = await this.getDb();

        return new Promise(resolve => {

            let trans = db.transaction([OPB],'readwrite');
            trans.oncomplete = () => {
                resolve();
            };

            let store = trans.objectStore(OPB);
            store.put(cat);
            

        });
    
    },

    async updateCat(idCat, cat, opb="users") {

        OPB = opb;
        let db = await this.getDb();

        return new Promise(resolve => {

            let trans = db.transaction([opb],'readwrite');
            trans.oncomplete = () => {
                resolve();
            };

            let store = trans.objectStore(opb);
            var akj = store.openCursor();

            akj.onsuccess = (event) => {
                var cursor = event.target.result;
                if(cursor.value.id == idCat){
                    cursor.update(cat);
                }
            }
            // store.put(cat);

        });
    
    }

}