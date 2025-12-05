const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// කන්ස්ට් කරගමු නේද එහෙනම්......
module.exports = {
SESSION_ID: '', // "𝙼𝙾𝚅𝙸𝙴-𝚂𝙿𝙸𝚁𝙸𝚃𝚂=" මේක මෙතනට දාන්න ඕන...
ANTI_DELETE: process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE, // මේකේ ANTI DELETE ON : OFF දාගන්න
MV_BLOCK: process.env. MV_BLOCK === undefined ? 'true' : process.env. MV_BLOCK,  // මෙතනින් MOVIE BLOCK ON : OFF කරගන්න පුලුවන්  
ANTI_LINK: process.env.ANTI_LINK === undefined ? 'true' : process.env.ANTI_LINK, // මෙතනින් ANTI DELETE ON : OFF කරගන්න පුලුවන්
SEEDR_MAIL: '', // මෙතනට ඔයාගෙ SADEER එකව්න්ට් එකේ ඊමේල් එක දාන්න ඕන..
SEEDR_PASSWORD: '', // මෙතනට ඔයාගෙ SADEER එකව්න්ට් එකේ පාස්වර්ඩ් එක දාන්න ඕන..
SUDO: '',// මෙතනට SUDO නම්බර් එක දාන්න ඕන...
DB_NAME: 'movieeeedatabase', // මේක ඩේටාබේස් එකේ නම මේවා වෙනස් කරන්න එපා
LANG: 'SI', // මේක භාශාව මේක ENG,CHI,JAP,KOR,HIN,TAM,MAL,ALL කැමති එකක් දාගන්න පුලුවන්..
OWNER_NUMBER: '94754871798', // මේකට නම්බර් එක දාගන්න ඕන ඔයාගෙ CONTRY COAD එක එක්ක්ම ලංකාවෙනම් +94 දාන්න ඕන....
TG_GROUP: 'https://t.me/+Load-Dilisha-VipLK' // මේකට ඔයාගේ TELEGRAM GROUP එක දාන්න ඕන....

};


