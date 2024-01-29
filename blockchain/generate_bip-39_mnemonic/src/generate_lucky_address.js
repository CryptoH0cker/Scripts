const { Worker } = require('node:worker_threads')
const { cpus } = require('os')

let threads = new Set()

for (let i = 0; i < cpus().length; i++) {
  threads.add(new Worker('./worker.js'))
}

for (let worker of threads) {
  worker.on('message', (wallet) => {
    console.log('Address:', wallet.address.toLowerCase())
    console.log('Mnemonic:', wallet.mnemonic.phrase)
    worker.terminate()
  })
}
