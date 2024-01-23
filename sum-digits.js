function solve(num){
    let sum=0;
    const numasstring=num.toString();
    for(const  char of numasstring){
        const charasnum=parseInt(char,10)
        sum+=charasnum
        
    }
    console.log(sum);
}
solve(345)