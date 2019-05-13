const {Worker} = require('worker_threads')

function runThread(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__dirname + '/worker.js', {workerData});
    // worker.on('online', ()=>console.log('Worker started!'));
    worker.on('message', resolve);
    worker.on('error',reject);
    worker.on('exit', (code) => {
      if (code !== 0){
        return reject(new Error('WORKER STOPPED WITH CODE ${code}'))
      }
    })
  })
}

async function run(workerData) {
  const result = await runThread(workerData);
  console.log(result)
}

run("Result " + Math.random()).catch(reason => console.log(reason));
run("Result " + Math.random()).catch(reason => console.log(reason));
run("Result " + Math.random()).catch(reason => console.log(reason));
run("Result " + Math.random()).catch(reason => console.log(reason));
run("Result " + Math.random()).catch(reason => console.log(reason));
run("Result " + Math.random()).catch(reason => console.log(reason));

