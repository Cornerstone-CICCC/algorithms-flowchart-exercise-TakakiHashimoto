let num1 = 5
let num2 = 4
let num3 = 9

if (num1 > num2){
    if (num1>num3){
        console.log(`${num1} is the largest number`)
    } else if (num1 < num3){
        console.log(`${num3} is the largest number`)
    }
} else if (num1 < num2){
    if (num2 > num3){
        console.log(`${num2} is the largest number`)
    } else if (num2 < num3){
        console.log(`${num3} is the largest number`)
    }
}