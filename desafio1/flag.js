module.exports = {
    getFlag: function (flag){
        for (var i = 0; i < process.argv.length; i++){
            const result = process.argv[i].search(flag);
            if (result !== -1){
                return process.argv[i+1];
            }
        }
    }
}
