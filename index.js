function recursiveLoop(i = 0){
    if(i <= 7){
        console.log(i)
        i++;
        return recursiveLoop(i);
    }
    return;
}

recursiveLoop();

function recursiveLoop1(total = 10, i = 0){
    if(i < total){
        console.log(i)
        i++;
        return recursiveLoop1(total, i)
    }
    return;
}

recursiveLoop1(20)

function recursiveLoop2(totalFingers = 10, i = 0){
    if(i < totalFingers){
        console.log("I have " + (i+1) + " fingers.")
        i++;
        return recursiveLoop2(totalFingers, i)
    }
    return;
}

recursiveLoop2()

function recursiveArrayLoop(data, i=0){
    if(i < data.length){
        console.log(data[i])
        i++
        return recursiveArrayLoop(data, i)
    }
    return;
}

const data = [1,543,2543,56,456,546,2456,43,63]
recursiveArrayLoop(data)