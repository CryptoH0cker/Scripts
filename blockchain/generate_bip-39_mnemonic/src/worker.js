const { Mnemonic, HDNodeWallet, randomBytes } = require('ethers')
const { parentPort } = require('worker_threads')

while (true) {
  let mnemonic = Mnemonic.fromEntropy(randomBytes(32)).phrase
  let wallet = HDNodeWallet.fromPhrase(mnemonic)

  let characters = wallet.address.slice(2, 5)

  if (characters === '777') {
    parentPort.postMessage(wallet)
    return
  }
}
