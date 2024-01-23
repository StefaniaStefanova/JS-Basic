function solve(rawNumber,num1,num2,num3,num4,num5){
    "use strict;"
    let number=parseint(rawNumber,10);
    if (num1==='chop'){
      number=number/2;
    }
    else if(num1==='dice'){
      number=Math.sqrt(number)
    }
    else if(num1==='spice'){
       number=+1
    }
    else if(num1==='bake'){
      number=number*3
    }
    else if(num1==='fillet'){
        number=number*0.8;
    }
    console.log(number)
    if (num2==='chop'){
        number=number/2;
      }
      else if(num2==='dice'){
        number=Math.sqrt(number)
      }
      else if(num2==='spice'){
         number=+1
      }
      else if(num2==='bake'){
        number=number*3
      }
      else if(num2==='fillet'){
          number=number*0.8;
      }
      console.log(number)
      if (num3==='chop'){
        number=number/2;
      }
      else if(num3==='dice'){
        number=Math.sqrt(number)
      }
      else if(num3==='spice'){
         number=+1
      }
      else if(num3==='bake'){
        number=number*3
      }
      else if(num3==='fillet'){
          number=number*0.8;
      }
      console.log(number)
      if (num4==='chop'){
        number=number/2;
      }
      else if(num4==='dice'){
        number=Math.sqrt(number)
      }
      else if(num4==='spice'){
         number=+1
      }
      else if(num4==='bake'){
        number=number*3
      }
      else if(num4==='fillet'){
          number=number*0.8;
      }
      console.log(number)
      if (num5==='chop'){
        number=number/2;
      }
      else if(num5==='dice'){
        number=Math.sqrt(number)
      }
      else if(num5==='spice'){
         number=+1
      }
      else if(num5==='bake'){
        number=number*3
      }
      else if(num5==='fillet'){
          number=number*0.8;
      }
      console.log(number)
}