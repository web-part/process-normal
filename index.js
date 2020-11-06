

const watch = require('./modules/watch');
const build = require('./modules/build');

module.exports = exports = {

    mode: 'normal',//标准模式。

    watch(website) { 
        watch(exports.mode, website);
    },

    build(website) { 
        build(exports.mode, website);
    },
};