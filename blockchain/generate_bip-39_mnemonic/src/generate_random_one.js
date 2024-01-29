const { Mnemonic, HDNodeWallet, randomBytes } = require('ethers')

const number = 1

for (let times = 0; times < number; times++) {
  let mnemonic = Mnemonic.fromEntropy(randomBytes(32)).phrase
  let wallet = HDNodeWallet.fromPhrase(mnemonic)
  console.log('Address:', wallet.address.toLowerCase())
  console.log('Mnemonic:', wallet.mnemonic.phrase)
}
