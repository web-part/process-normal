
/**
*
*/

const master = require('@webpart/master');


module.exports = function (mode, website) {
    const JsLink = master.require('JsLink');
    const Lines = master.require('Lines');


    website.on('parse', {

        'master': function (file, content, data) {
            let lines = Lines.split(content);

            let links = JsLink.parse(content, {
                'dir': data.dir,
            });

            links.forEach(function (item) {
                let meta = item.meta;
                
                if (meta.mode && meta.mode != mode ) {
                    lines[item.no] = '';
                    return;
                }
            });

            content = Lines.join(lines);

            return content;
        },
    });


};
