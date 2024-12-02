import { list } from "./list";


function validateArray(arr: number[]): boolean{
    if(!((arr.every((item, index) => index === 0 || item >= arr[index - 1])) || (arr.every((item, index) => index === 0 || item <= arr[index - 1])))) return false;
    if(arr.every((item, index) => index === 0 || Math.abs(item - arr[index - 1]) <= 3 && Math.abs(item - arr[index - 1]) >= 1)) return true;
    return false;
}

function partOne(list: string){
    let safes = 0;
    const splittedList = list.split("\n")

    for(let i = 0; i < splittedList.length; i++){
        let numberArr = splittedList[i].split(" ").map(Number);
        safes += validateArray(numberArr) ? 1 : 0;
    }

    return safes
}

function partTwo(list: string){
    let safes = 0;
    const splittedList = list.split("\n") 

    for(let i = 0; i < splittedList.length; i++){
        let numberArr = splittedList[i].split(" ").map(Number);
        if(validateArray(numberArr)){
            safes += 1;
            continue;
        }

        for(let j = 0; j < numberArr.length; j++){
           let testArray = [...numberArr];
           testArray.splice(j,1);
           if(validateArray(testArray)){
                safes += 1;
                break;
           }
        }
    }

    return safes;
}

console.log(partOne(list()))
console.log(partTwo(list()))