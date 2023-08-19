process.stdin.setEncoding('utf8');

process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let a_repeat = "*".repeat(a)
    let b_repeat = "*".repeat(b)
    for(let i=0; i<b; i++){
        console.log(a_repeat);
    }
    // console.log(a_repeat);
    // console.log(b_repeat);
});