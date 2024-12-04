import { input } from "./input";

function partOne(input){
    let totalResult = 0;

    input.match(/mul\(\d+,\d+\)/g)?.forEach(item =>{
        let numbers = item.match(/\d+,\d+/g);
        if(numbers?.length) totalResult += parseInt(numbers[0].split(",")[0]) * parseInt(numbers[0].split(",")[1])
    })
    return totalResult
}

function partTwo(input){
    let matches = input.match(/mul\(\d+,\d+\)|do\(\)|don't\(\)/g)
    let active = true;
    let totalResult = 0;
    for(let i = 0; i < matches.length; i++){
        if(matches[i] == "do()"){
            active = true;
            continue;
        }
        if(matches[i] == "don't()"){
            active = false;
            continue
        }
        if(active) totalResult += parseInt(matches[i].match(/\d+,\d+/g)[0].split(",")[0]) * parseInt(matches[i].match(/\d+,\d+/g)[0].split(",")[1])
    }
    return totalResult;
}


console.log(partOne(input()))
console.log(partTwo(input()))