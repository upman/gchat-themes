import { allOps } from './ops';

var opsMem = [];

for(var i = 0; i < allOps.length; i += 1) {
    opsMem.push({
        applied: false,
        op: allOps[i]
    });
}

function main() {
    for(var i = 0; i < allOps.length; i += 1) {
        if (!opsMem[i].applied) {
            opsMem[i].op();
        }
    }
}

main();

