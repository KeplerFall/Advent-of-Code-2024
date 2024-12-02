import {list} from "./list"

function partOne(list: string){
    const list1: number[] = [];
    const list2: number[] = [];

    list.split("\n").forEach(item=>{
        list1.push(parseInt(item.split("   ")[0]))
        list2.push(parseInt(item.split("   ")[1]))
    })

    list1.sort()
    list2.sort()

    let distance = 0;

    for(let i = 0; i < list1.length; i++){
        distance += list1[i] > list2[i] ? list1[i] - list2[i] : list2[i] - list1[i]
    }

    return distance;
}

function partTwo(list: string){
    const list1: number[] = [];
    const list2: number[] = [];

    list.split("\n").forEach(item=>{
        list1.push(parseInt(item.split("   ")[0]))
        list2.push(parseInt(item.split("   ")[1]))
    })

    list1.sort()
    list2.sort()

    let occurrences = 0;

    for(let i = 0; i < list1.length; i++){
        occurrences += list2.filter((item) => item == list1[i]).length * list1[i]
    }

    return occurrences;
}