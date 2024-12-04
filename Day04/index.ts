import {input} from "./input"

function xValidator(x,y,list2d){
    let xmas = ["X", "M", "A", "S"]
    let results = {}
    for(let i = -3; i < 4; i++){
        for(let j = -3; j < 4; j++){
            if(i == 0 && j == 0) continue;
            if(!(Math.abs(i) == Math.abs(j)) || ((i == 0 && j != 0) || (j == 0 && i != 0))) continue;
            if(!(list2d[x+i] && (list2d[x+i][y+j] == xmas[Math.abs(i) || Math.abs(j)]))) continue;
            let xcord = i < 0 ? `-` : i == 0 ? `0` : `+`;
            let ycord = j < 0 ? `-` : j == 0 ? `0` : `+`;
            results[`${xcord}${ycord}`] ? results[`${xcord}${ycord}`] += 1 : results[`${xcord}${ycord}`] = 1;
        }
    }
    return Object.values(results).filter(item => item == 3).length
}

function aValidator(x,y,list2d){
    let mlocation: number[][] = []
    for(let i = -1; i < 2; i+= 2){
        for(let j = -1; j < 2; j += 2){
            if(list2d[x+i] && list2d[x+i][y+j] == "M") mlocation.push([i,j])
        }
    }

    if(mlocation.length != 2) return 0;

    for(let i = 0; i < mlocation.length; i ++){
       if(list2d[x + (mlocation[i][0] * -1)][y + (mlocation[i][1] * -1)] != "S") return 0;
    }
    return 1;
}

function partOne(list){
    const list2d = list.split('\n').map(item => item.split(""));
    let totalXmas = 0;
    for(let i = 0; i < list2d.length; i++){
        for(let j = 0; j < list2d[i].length; j++){
            if(list2d[i][j] == "X") totalXmas += xValidator(i,j,list2d);
        }
    }
    return totalXmas;
}

function partTwo(list){
    const list2d = list.split('\n').map(item => item.split(""));
    let totalXmas = 0;
    for(let i = 1; i < list2d.length - 1; i++){
        for(let j = 0; j < list2d[i].length; j++){
            if(list2d[i][j] == "A") totalXmas += aValidator(i,j,list2d);
        }
    }
    return totalXmas;
}

console.log("Part one", partOne(input()))
console.log("Part two", partTwo(input()))