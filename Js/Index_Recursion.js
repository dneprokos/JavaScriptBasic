//Pow as example let's calculate 2 in 3 pow

function pow(x, n) {
    if (n != 1) return x * pow(x, n - 1);
    else return x;
    
  }
  
  console.log('Pow calculation ', pow(2, 3) ); // 8


  //Maximum recursion in browsers 10000. In some cases it's more.
  
  

  //Task. Create a function using recursion calculates sum of number from current to 1.

  //Recurison solution Solution
  function sumTo(n){
    if (n > 0) return n + sumTo(n-1);
    else return n;
  }

  console.log('Calculate sum of numbers from 0 to defined value: ', sumTo(2));

  
