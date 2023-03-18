const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6282274499424'] // no own
global.author = '𝙎𝙩𝙤𝙧𝙮 || 𝙎𝙖𝙙🥀' // nama author 
global.packname = '𝙎𝙩𝙤𝙧𝙮 || 𝙎𝙖𝙙🥀' // nama pack sticker
global.namabot = '𝙍𝙖𝙞𝙣𝙗𝙤𝙩 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥🤖' // nama bot mu
global.group = 'https://chat.whatsapp.com/Kxgw8YE7JxuHjaKtGZAfvh' // grup mu



let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
