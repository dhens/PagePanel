"use strict";

class Database {

    addUrl(key, value) {
        localStorage.setItem(key, value);
        if (localStorage.getItem(key)) {
            console.log(`Added ${key} successfully`)
        }
        else {
            console.warn('setItem failed! Please try again');
        }
    }

    deleteUrl(key) {
        localStorage.removeItem(key);
        if (!localStorage.getItem(key)) {
            console.log('Item deleted successfully')
        }
        else {
            console.warn('Error deleting item. Please try again');
        }
    }

    listAllItems() {
        return Object.keys(localStorage)
    }
}

const databaseCommands = new Database();

export default databaseCommands;