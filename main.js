//Если а – четное посчитать а*б, иначе а+б;
const oddOrEven = (a,b) => {
    if (a%2===0) {    // if(a%2a ? : a*b : a+b )
        return a*b;
    } else {
        return a+b;
    };
};

//Определить какой четверти принадлежит точка с координатами (х, у)
    const  getQuarter = (x, y) => {
        let result = '';
        if (x>0 && y>0) {
            result = `1st quarter`;
        } else if (x<0 && y>0) {
            result = `2nd quarter`;
        } else if (x<0 && y<0) {
            result = `3rd quarter`;
        } else if (x>0 && y<0) {
            result = `4th quarter`;
        } else if (x==0 && y!=0) {
            result = `on x axis`;
        } else if (x!=0 && y==0) {
            //when y=0 gives error. have to use ==
            result = `on y axis`;
        };

        return result;
};


//Найти сумму только положительных из трех чисел

const sumPos = (a, b, c) => {
    let arr = [a,b,c];
    let posArr = arr.filter(function(z) {return z>0; });

    sumPosArr =  eval(posArr.join("+"));
    return sumPosArr;
};


//Написать программу определения оценки студента по его рейтингу, на основе следующих правил
/*
Рейтинг Оценка
0-19    F
20-39   E
40-59   D
60-74   C
75-89   B
90-100  A
*/

const rateGrade = (rate) => {
    
    let result;
    
    if (rate===0 || rate<20) {
        result = 'F';
    } else if (rate<40) {
        result = 'E';
    } else if (rate<60) {
        result = 'D';
    } else if (rate<75) {
        result = 'C';
    } else if (rate<90) {
        result = 'B';
    } else if (rate<=100) {
        result = 'A';
    } else if (rate<0 || rate>100) {
        result = `You need set correct grade`;
    };
    return result;
};


//Циклы


//Найти сумму четных чисел и диапазоне от 1 до 99

const sumEven = () => {
    let sum=0;
    for (i=0; i<=100; i+=2)
        sum+=i;
  
    return sum;
};

////Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)


const isPrime = (num) => {
    num = 65;
    let result;
    if (num<1) return false;
    
    for (let i = num; i>1 ; i--) {
         // eto zdes doljen bit ili net? potomu chto result v 3im uroven 
        //nije stal ponyatnom dlya funksiya. nije uroven element result mojet nazvan bez 
        //constanta v konce statementa?
        if (num%i!==0) {
            return  `${num} is composite number`;
        
        }  else if (num===0){
            return  `${num} is prime number`;
            
        };
            
    }; return result;
    
};

//square root of 125 should return 11 (only integer value)

//n zdes number kotoriy mi poluchaem iz square root 
//var decPart = (n+"").split(".")[1];

//squeare root manual 

var number=65; 

 
number.oninput=function(){

} 
 
/*create custom square root function*/ 
function squareRoot(number){
    
    let square = 1;
    while(true)
    {
        square = (number / square + square) / 2;
        console.log(square) // i called 119 raz. kak mne ostanovit koqda square == (number/square)
        
    if (number+1 > square*square) { 
        break; 
     }
    };
    console.log(square); //resultat kornya
    const result = (`${square}`).split('.'); // ispolzuya split sozdali array iz kornya. 11.25 > [11,25]
    console.log(Number(result[0])) // proverka otveta na console
    return parseInt(result[0]); // obratna daem otvet
};



// // //binary search
   
       


function squareRootB(number) {
            
    let low = 0;
    let high = number;
    let mid = number;
    
    while (high - low >= 1) {
        mid = (high - low) / 2;

        if (mid ** 2 > number) {
            high = mid;
        } else if (mid ** 2 < number) {
            low = mid;
        } else {
            break;
        }         
    };

    return mid;
};

//didnt work.
// sqrtB2 = (number) => {
//     let low = 0;
//     let high = number;

//     while (low<=high) {
//          let mid = (low + (high-low)) / 2;
//          let sqrt;
//         debugger;
//          if (mid*mid === number) {
//             return mid;
//          };

//          if (mid*mid<number) {
//              low = mid+1;

//          } else {
//              high = mid-1;
//          };        
//      };  return mid;
//  };



// Factorial

function factN(number) {
    let sum = number;
    for (let i=1; i<number; i++ ) {
        sum = sum * (number-i)
    };
    return sum;
};

//summ of numerals of number

sumNums = (number) => {
    let output = Array.from(number.toString()).map(Number);
    let sum = 0;
    for (let i=0; i<output.length; i++) {
        sum += output[i];
    };
    return sum;
};

// mirrored number

mirrorNum = (number) => {
    let arr = ((number.toString()).split(''));
    let mirArr = [];
    let result;

    for (let i = 0; i<arr.length; i++) {
        mirArr.unshift(arr[i]);
    }
    
    result = parseInt(mirArr.join(''));
    return result;
};



