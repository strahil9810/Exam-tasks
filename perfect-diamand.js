function perfectDiamand(input){
    let n=Number(input);

    for(let i=0;i<n;i++){
        console.log(' '.repeat(n-i-1) + 
        '*' + '-*'.repeat(i) + 
        ' '.repeat(n-i-1));
    }

    for(let i=n-2;i>=0;i--){
        console.log(' '.repeat(n-i-1) +
        '*' + '-*'.repeat(i) +
        ' '.repeat(n-i-1));
    }
}
perfectDiamand(5)