const num1Ele = document.getElementById('num1') as HTMLInputElement;
const num2Ele = document.getElementById('num2') as HTMLInputElement;
const btnEle = document.querySelector('button')!;

// const numResult: number[] = [];
// const strResult: string[] = [];

const numResult: Array<number> = [];
const strResult: Array<string> = [];

type NumOrStrig = number | string;
type Result = { val: number , timestamp: Date};

interface ResultObj{
    val: number ,
    timestamp: Date
}

function add(num1: NumOrStrig , num2: NumOrStrig){

    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }

    else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + num2;
    }
    
    return +num1 + +num2;
  
  } 


  function printResult(resultObj: ResultObj){
    console.log(resultObj.val)
}
  
//   console.log(add(1, 5))
//   console.log(add('1', '5'))
//   console.log(add(1, '5'))

btnEle.addEventListener('click', () => {

    const num1 = num1Ele.value;
    const num2 = num2Ele.value;
    const result = add(+num1, +num2);
    numResult.push(result as number);
    const stringResult = add(num1, num2);
    strResult.push(stringResult as string)
    // console.log(result)
    // console.log(stringResult)
    printResult({val: result as number, timestamp: new Date()})

    console.log(numResult)
    console.log(strResult)
})


const myPromise = new Promise<string>((resolve, reject)=> {
    setTimeout(() => {
        resolve('It worked:')
    }, 1000)
})

myPromise.then((result) => {
    console.log(result.split('w'))
})