function solve (num,typeofgroup , dayofweek){
let price=0;


    if(typeofgroup==="Students"){
        if(dayofweek==="Friday"){
            price=8.45*num;
        }
        else if(dayofweek==="Saturday"){
            price=9.80*num;
        }
        else if(dayofweek==="Sunday"){
            price=10.46*num;
        }
    if (num>=30){
        price=price*0.85;
    }}
    else if(typeofgroup==="Business"){
            if(dayofweek==="Friday"){
                price=10.90*num;
            }
            else if(dayofweek==="Saturday"){
                price=15.60*num;
            }
            else if(dayofweek==="Sunday"){
                price=16*num;
    }
if(num>=100){
    const pernight=price/num;
    price=pernight*(num-10);
}}
   else  if(typeofgroup==="Regular"){
        if(dayofweek==="Friday"){
            price=15*num;
        }
        else if(dayofweek==="Saturday"){
            price=20*num;
        }
        else if(dayofweek==="Sunday"){
            price=22.50*num;
        }
    if(num>=10&&num<=20){
        price=price*0.95;
    }}
        console.log(`Total price: ${price.toFixed(2)}`)

}
solve(30,"Students","Sunday")