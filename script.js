const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const fs = require('fs');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

client.on('ready', () => {
    console.log(`Đã đăng nhập với tài khoản ${client.user.tag}!`);
});
i = 0;
async function fuckyou() {
    const channelID = '1102870817550905384';
    const channel = client.channels.cache.get(channelID);
    a = "a";
    if (channel) {
        while(true){
            if (i % 9 === 0) {
                await sleep((Math.floor(Math.random() * 2)+1)*1000);
                channel.send('owo');
                console.log('owo');
            }
            if (i % 12 === 0) {
                await sleep((Math.floor(Math.random() * 2)+1)*1000);
                channel.send('owoh');
                await sleep((Math.floor(Math.random() * 2)+1)*1000);
                channel.send('owob');
                console.log('hunt/battke');
            }
            client.on('message', async (message) => {
                if (message.channel.id === '1102870817550905384') {
                    await sleep(1000);
                    console.log(`channel: ${message.content}`);
                    await sleep(1000);
                    a =  message.content;
                }
                if (a === 'stop') {
                        await sleep(1000);
                        const fs = require('fs');

                        fs.readFile('D:\\all\\songs\\Alan Walker\\c.mp3', 'utf8', (err, data) => {
                            if (err) {
                                console.error(err);
                                return;
                            }
                        
                            console.log(data);
                        });                        
                        process.exit();
                    }
                if (a.includes('captcha')) {
                        await sleep(1000);
                        const fs = require('fs');

                        fs.readFile('D:\\all\\songs\\Alan Walker\\c.mp3', 'utf8', (err, data) => {
                            if (err) {
                                console.error(err);
                                return;
                            }
                        
                            console.log(data);
                        });
                        await sleep(1000);
                        //process.exit();
                    }
                if (a.includes('(1/5)')) {
                        await sleep(1000);
                        const fs = require('fs');

                        fs.readFile('D:\\all\\songs\\Alan Walker\\c.mp3', 'utf8', (err, data) => {
                            if (err) {
                                console.error(err);
                                return;
                            }
                        
                            console.log(data);
                        });
                        await sleep(1000);
                        //process.exit();
                    }
                if (a.includes('(2/5)')) {
                        await sleep(1000);
                        const fs = require('fs');

                        fs.readFile('D:\\all\\songs\\Alan Walker\\c.mp3', 'utf8', (err, data) => {
                            if (err) {
                                console.error(err);
                                return;
                            }
                        
                            console.log(data);
                        });         
                        await sleep(1000);               
                        //process.exit();
                    }
                if (a.includes('(3/5)')) {
                        await sleep(1000);
                        const fs = require('fs');

                        fs.readFile('D:\\all\\songs\\Alan Walker\\c.mp3', 'utf8', (err, data) => {
                            if (err) {
                                console.error(err);
                                return;
                            }
                        
                            console.log(data);
                        });            
                        await sleep(1000);            
                        //process.exit();
                    }
                if (a.includes('(5/5)')) {
                        await sleep(1000);
                        const fs = require('fs');

                        fs.readFile('D:\\all\\songs\\Alan Walker\\c.mp3', 'utf8', (err, data) => {
                            if (err) {
                                console.error(err);
                                return;
                            }
                        
                            console.log(data);
                        });        
                        await sleep(1000);                
                        //process.exit();
                    }
                if (a.includes('(4/5)')) {
                        await sleep(1000);
                        const fs = require('fs');

                        fs.readFile('D:\\all\\songs\\Alan Walker\\c.mp3', 'utf8', (err, data) => {
                            if (err) {
                                console.error(err);
                                return;
                            }
                        
                            console.log(data);
                        });    
                        await sleep(1000);                    
                        //process.exit();
                    }
                
                })
            i++;
            await sleep(1000);
        }
    } else {
        console.log('con cac');
        process.exit();
    }
}

client.login("OTk1NjExODU4MTk3Mjk5MjMz.GjxuiI.1jylRzlzdVLJH207DVNmkpWNPrAmcBuVl-W7Qk");
