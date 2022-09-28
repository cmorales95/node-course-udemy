// setTimeout(() => {
//     console.log('Hello World');
// }, 1000);

const getUserByID = (id, callback) => {
    const user = {
        id,
        name: 'Cristian'
    }

    setTimeout(() => {
        callback(user);
    }, 1000);
}

getUserByID(10, (user) => {
    console.log(user.name.toUpperCase());
});