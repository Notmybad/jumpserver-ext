function activate (content) {
    goby.registerCommand('hello', function (content) {
        goby.showInformationMessage("helloWorldfdfdfsd");
    });
}

exports.activate = activate;