function activate (content) {
    goby.registerCommand('importIP', function (content) {
        let path = __dirname + '/dist/index.html'
        console.log(path)
        goby.showIframeDia(path, '导入', "1000", '1000')
        // goby.showPage(path)
    });
}

exports.activate = activate;