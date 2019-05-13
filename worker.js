const {workerData, threadId, parentPort} = require('worker_threads');
parentPort.postMessage({message: `It's thread #${threadId}.`, data: workerData} );