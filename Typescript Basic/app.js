// console.log('helloworld')
var str = 'Hello';
function printMessage(message, code) {
    if (typeof code === 'string') {
        console.log("".concat(message, ". status code ").concat(code.trim()));
    }
    else {
        console.log("".concat(message, ". status code ").concat(code));
    }
}
printMessage('succes', 200);
printMessage('resource not founf', '400');
var role;
function roleMessage(role) {
    switch (role) {
        case 'Admin':
            console.log(' you have admin permission');
            break;
        case 1:
            console.log('you have read permission');
            break;
        case 'write':
            console.log('you have read and write permission');
            break;
        default:
            console.log('unknow permission');
    }
}
roleMessage('Admin');
roleMessage(1);
