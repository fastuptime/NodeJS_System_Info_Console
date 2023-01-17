const { printTable, Table } = require('console-table-printer');
const os = require('os');
const moment = require('moment');
let colors = ["red", "green", "yellow", "blue", "magenta", "cyan"];

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
};

let uptime = os.uptime();

const p = new Table();
p.addRow({ System: 'CPU', Value: os.cpus()[0].model }, { color: `${randomColor()}` });
p.addRow({ System: 'CPU Speed', Value: os.cpus()[0].speed + ' MHz' }, { color: `${randomColor()}` });
p.addRow({ System: 'CPU Core', Value: os.cpus().length }, { color: `${randomColor()}` });
p.addRow({ System: 'RAM', Value: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + ' GB' }, { color: `${randomColor()}` });
p.addRow({ System: 'OS', Value: os.type() }, { color: `${randomColor()}` });
p.addRow({ System: 'OS Version', Value: os.release() }, { color: `${randomColor()}` });
p.addRow({ System: 'OS Platform', Value: os.platform() }, { color: `${randomColor()}` });
p.addRow({ System: 'OS Arch', Value: os.arch() }, { color: `${randomColor()}` });
p.addRow({ System: 'OS Hostname', Value: os.hostname() }, { color: `${randomColor()}` });
p.addRow({ System: 'OS Uptime', Value: `${Math.floor(uptime / 60 / 60 / 24)} days, ${Math.floor(uptime / 60 / 60) % 24} hours, ${Math.floor(uptime / 60) % 60} minutes, ${Math.floor(uptime) % 60} seconds` }, { color: `${randomColor()}` });
p.addRow({ System: 'OS Load Average', Value: os.loadavg() }, { color: `${randomColor()}` });
p.addRow({ System: 'OS Home Dir', Value: os.homedir() }, { color: `${randomColor()}` });
p.addRow({ System: 'OS Temp Dir', Value: os.tmpdir() }, { color: `${randomColor()}` });
p.addRow({ System: 'OS User', Value: os.userInfo().username }, { color: `${randomColor()}` });
p.addRow({ System: 'OS User Home Dir', Value: os.userInfo().homedir }, { color: `${randomColor()}` });
p.addRow({ System: 'OS User Shell', Value: os.userInfo().shell }, { color: `${randomColor()}` });
p.addRow({ System: 'OS User UID', Value: os.userInfo().uid }, { color: `${randomColor()}` });
p.addRow({ System: 'OS User GID', Value: os.userInfo().gid }, { color: `${randomColor()}` });
p.addRow({ System: 'OS User Groups', Value: os.userInfo().groups }, { color: `${randomColor()}` });
p.addRow({ System: 'OS User Name', Value: os.userInfo().username }, { color: `${randomColor()}` });
p.addRow({ System: 'Node Version', Value: process.version }, { color: `${randomColor()}` });
p.addRow({ System: 'Node Path', Value: process.execPath }, { color: `${randomColor()}` });
p.addRow({ System: 'Node Platform', Value: process.platform }, { color: `${randomColor()}` });
p.addRow({ System: 'Node Arch', Value: process.arch }, { color: `${randomColor()}` });
p.addRow({ System: 'Node PID', Value: process.pid }, { color: `${randomColor()}` });
p.addRow({ System: 'Node Uptime', Value: `${moment.duration(process.uptime(), 'seconds').humanize()}` }, { color: `${randomColor()}` });
p.addRow({ System: 'Node Memory Usage', Value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB` }, { color: `${randomColor()}` });
p.addRow({ System: 'Node CPU Usage', Value: `${process.cpuUsage().user} ms` }, { color: `${randomColor()}` });
p.printTable();