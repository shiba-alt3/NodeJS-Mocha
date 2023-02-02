module.exports.multiplyAsync = function (x, y, callback){
    setTimeout(function() {
        callback(x * y);
    }, 500)
}

module.exports.isValidUserIdAsync = function (userList, user, callback) {
    setTimeout(function() {
        callback(userList.indexOf(user) >= 0)
    }, 500);
}
