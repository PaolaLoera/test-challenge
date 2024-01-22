// Imports small array of users
// Pretend it's an API request
const users = require('./data');

// Fetches all users
const getUsers = () => {
    return users;
}

// Filters users by specific ID
const getUser = id => {
    return users.find(user => user.id === id)
}

// By password
const getPass= password => {
    return users.find(users => users.password === password)
}

// test
describe('User functions test', () => {
    it('Should get the user by its id', () => {
        const user = getUser(3);
        expect(user).toEqual ({
            id: 3,
            username: "goosemotionless",
            email: "dotmeheart@outlook.com",
            password: "12345abcde"
        })
    })
})
// console.log(getUser(3));
describe('User functions test', () => {
    it('Should get the user by its password', () => {
        const user = getPass("hArrydotCom");
        expect(user).toEqual ({
            id: 1,
            username: "hpLover4",
            email: "sirious90@gmail.com",
            password: "hArrydotCom"
        })
    })
})

module.exports = {getUsers , getUser};