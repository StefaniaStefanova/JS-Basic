function solve(num){
    const isleapyear= (num%4==0&&num%100!=0)||num%400===0;
    const message=isleapyear? "yes":"no";
    console.log(message)        
    
}
solve(1984)