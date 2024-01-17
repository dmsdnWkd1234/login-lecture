'use strict';

class UserStorage {
    static #users = {
        id: ['안녕하세요', '저는', '으노미에요'],
        password: ['1234', '5678', '12345678'],
        name: ['뜸부기', '따오기', '가오리'],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
