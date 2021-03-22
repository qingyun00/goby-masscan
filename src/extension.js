function activate (content) {
    class MasscanSu{
        constructor() {
            this.cp = require('child_process');
        }
        init() {
            this.config = goby.getConfiguration();
            this.xc = this.config.Xc.default;
        }
        scan(ip) {
            var fs = require('fs')
            const path = './1.json'
            try {
                fs.unlinkSync(path)
                //file removed
            } catch(err) {
                console.error(err)
            }
            const os = require('os');
            if (os.type() == 'Windows_NT') {
                //windows
                console.log(`start cmd /K masscan.exe ${ip} -p0-65535 --rate ${this.xc} -oJ ${__dirname}/1.json`);
                this.cp.exec(`start cmd /K masscan.exe ${ip} -p0-65535 --rate ${this.xc} -oJ ${__dirname}/1.json`);

            }else if (os.type() == 'Darwin') {
                let masscancmd = `
                        osascript -e '
                            tell application "Terminal" 
                                activate
                                do script "sudo masscan ${ip} -p0-65535 --rate ${this.xc} -oJ ${__dirname}/1.json"
                            end tell
                        '`
                this.cp.exec(masscancmd, (error, stdout, stderr) => {
                    if (stdout != "") {
                        console.log(stdout);
                    }
                })
            }else if (os.type() == 'Linux'){
                //Linux
                console.log('basi')
                // cp.exec(`bash -c "${url}"`)
                const { exec } = this.cp;
                exec(`bash -c sudo masscan ${ip} -p0-65535 --reta ${this.xc} -oJ ${__dirname}/1.json"`, (error, stdout, stderr) => {
                        console.log(`stdout: ${stdout}`);
                        console.log(`stderr: ${stderr}`);
                        if (error) {
                            console.error(`执行的错误: ${error}`);
                            goby.showErrorMessage(`执行的错误: ${error}`);
                            return;
                        }
                    }
                )
            }

        }
        readjson(){
            var fs = require('fs');
            const data1 = require('./1.json');
            var ips = [];
            var ports = [];
            for (let i in data1){
                ips.push(data1[i].ip)
                if (data1[i].ports[0].proto == "tcp"){
                    ports.push(data1[i].ports[0].port)
                }else {
                    ports.push('U:'+data1[i].ports[0].port)
                }
            }
            
            return {"ips":Array.from(new Set(ips)),"ports":Array.from(new Set(ips))};

        }
    }

    if (!window.MasscanSu) {
        window.MasscanSu = new MasscanSu();
    }
    
    goby.registerCommand('masscan',function (){
        window.MasscanSu.init()
        let path = __dirname + "/index.html"
        goby.showIframeDia(path, "masscan全端口", "666", "500");
    });
}

exports.activate = activate;
