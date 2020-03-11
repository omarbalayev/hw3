//Если а – четное посчитать а*б, иначе а+б
describe ("oddOrEven", function() {
    
    it ("b=2 / if a is even then a*b else a+b", function() {
        const b = 2;
        const a = 7;
        const expected = 9;

        const actual = oddOrEven(a, b);

        assert.deepEqual(actual, expected);
    });
});

// Определить какой четверти принадлежит точка с координатами (х, у)

describe ('getQuarter', function() {
    it('should return 1st quarter', function() {
        const x = 1;
        const y = 1;
        const quarter = "1st quarter";
        
        const coords = getQuarter(x, y);

        assert.deepEqual(coords, quarter);
    });

    it('should return 2nd quarter', function() {
        const x = (-1);
        const y = 1;
        const quarter = `2nd quarter`;
        
        const coords = getQuarter(x, y);

        assert.deepEqual(coords, quarter);
    });

    it('should return 3rd quarter', function() {
        const x = -1;
        const y = -1;
        const quarter = `3rd quarter`;
        
        const coords = getQuarter(x, y);

        assert.deepEqual(coords, quarter);
    });

    it('should return 4th quarter', function() {
        const x = 1;
        const y = -1;
        const quarter = `4th quarter`;
        
        const coords = getQuarter(x, y);

        assert.deepEqual(coords, quarter);
    });

    it('should return on x axis', function() {
        const x = 0;
        const y = -1;
        const quarter = `on x axis`;
        
        const coords = getQuarter(x, y);

        assert.deepEqual(coords, quarter);
    });

    it('should return on y axis', function() {
        const x = 1;
        const y = 0;
        const quarter = `on y axis`;
        
        const coords = getQuarter(x, y);

        assert.deepEqual(coords, quarter);
    });
});

//Найти сумму только положительных из трех чисел

describe ('sumPos', function() {
    
    it('should return 9.7', function() {
        const a=5;
        const b=4.7;
        const c=-3;
        const sumreturn = 9.7;

        const sumresult = sumPos(a,b,c);

        assert.deepEqual(sumreturn, sumresult);
    });
});


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

/*// zachem ya poluchayu error 
//Error: timeout of 2000ms exceeded
//at https://cdnjs.cloudflare.com/ajax/libs/mocha/2.1.0/mocha.js:4404:19
rate = 19;
let gradereturn = 'F';
let graderesult = rateGrade(rate);

       assert.deepEqual(gradereturn, graderesult);
tried to set timeout to 5000ms
it('should post a post and get the post back', function (done) {
  this.timeout(5000);
  // the rest 
       
*/

describe('rateGrade', function() {
    
    it('should return F', function() {
        const rate = 19;
        const gradereturn = 'F';

        const graderesult = rateGrade(rate);

       assert.deepEqual(gradereturn, graderesult);
    });

    it('should return E', function() {
        const rate = 39;
        const gradereturn = 'E';

       const graderesult = rateGrade(rate);

       assert.deepEqual(gradereturn, graderesult);
    });

    it('should return D', function() {
        const rate = 59;
        const gradereturn = 'D';

       const graderesult = rateGrade(rate);

       assert.deepEqual(gradereturn, graderesult);
    });

    it('should return C', function() {
        const rate = 74;
        const gradereturn = 'C';

       const graderesult = rateGrade(rate);

       assert.deepEqual(gradereturn, graderesult);
    });

    it('should return B', function() {
        const rate = 89;
        const gradereturn = 'B';

        const graderesult = rateGrade(rate);

       assert.deepEqual(gradereturn, graderesult);
    });

    it('should return A', function() {
        const rate = 100;
        const gradereturn = 'A';

        const graderesult = rateGrade(rate);

       assert.deepEqual(gradereturn, graderesult);
    });

    it('should return  -You need set correct grade', function() {
        const rate = 123;
        const gradereturn = `You need set correct grade`;

        const graderesult = rateGrade(rate);

       assert.deepEqual(gradereturn, graderesult);
    });
});


//Циклы


//Найти сумму четных чисел и диапазоне от 1 до 99

describe('sumEven', function() {
    it('should return 2550', function() {
      
        const sumEvenExpc = 2550;

        const sumEvenAct = sumEven();

        assert.deepEqual(sumEvenExpc, sumEvenAct);
    });
});

//Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

describe('isPrime', function() {
    it('should return: 65 is composite number', function() {
        const num = 65;
        
        const isPrimeExpc = `${num} is composite number`;

        const isPrimeAct = isPrime(num);

        assert.deepEqual(isPrimeExpc, isPrimeAct);

    });
});


//Найти корень натурального
//числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

describe('sqRoot', function() {
    it('should return 11 - decimal value - for square root of 125', function() {
        const number = 125;
        const expected = 11;

        const actual = squareRoot(number);

        assert.deepEqual(expected, actual);
    });
});

describe('sqRoot2', function() {
    it('should return 8 - decimal value - for square root of 64', function() {
        const number = 64;
        const expected = 8;

        const actual = squareRootB(number);

        assert.deepEqual(expected, actual);
    });
});


describe('nFact', function() {
    it('Should return 5040 for factorial 7', function() {
        const number = 7;
        const expected = 5040;

        const actual = factN(number);

        assert.deepEqual(expected, actual)
    });
});

//sum of digits of number
describe('sumNums', function() {
    it('Should return 10 for number 19', function() {
        const number = 19;
        const expected = 10;

        const actual = sumNums(number);

        assert.deepEqual(expected, actual)
    });
});

//mirror given number

describe('mirrorNum', function() {
    it('should return 654 (mirrored num) for 456', function() {
        const number = 456;
        const expected = 654;
        
        const actual = mirrorNum(number);

        assert.deepEqual(expected, actual);
    });
});

