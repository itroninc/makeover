const Rsync = require('rsync');
const path = require('path');

const rsync = new Rsync();
const rsyncSource = path.resolve(__dirname, '../public/storybook/*');
const rsyncDest = 'ssn@sandbox-gbruins01.eng.ssnsgs.net:/usr/ssn/combover/public';

function runRsync() {
    // rsync.flags('avzPr');
    rsync.flags('zPr');
    rsync.set('delete');
    rsync.source(rsyncSource);
    rsync.destination(rsyncDest);

    return new Promise((resolve, reject) => {
        try {
            let logData = "";
            rsync.execute(
                (error, code, cmd) => {
                    resolve({ error, code, cmd, data: logData });
                },
                (data) => {
                    logData += data;
                },
                (err) => {
                    logData += err;
                }
            );
        } 
        catch (error) {
            reject(error);
        }
    });
  }

  (async () => {
    console.log('starting rsync');
    let output = await runRsync();
    console.log(output);
    console.log('rsync complete');
  })();