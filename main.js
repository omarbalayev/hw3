//Если а – четное посчитать а*б, иначе а+б;
const oddOrEven = (a,b) => {
    if (a%2===0) {
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
    
    let square = 1, i=0;
    while(true)
    {
        i = i + 1;
        square = (number / square + square) / 2;

    if (i === number + 1) { 
        break; 
     }
    };
    console.log(square);
    const result = (`${square}`).split('.');
    console.log(Number(result[0]))
    return Number(result[0]);
};
