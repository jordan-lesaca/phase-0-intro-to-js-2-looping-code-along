// for (let age = 30; age < 40;age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }
// wrapGifts(gifts);

let newArray = ["adam", "sophia", "jesus"]

function writeCards(newArray, eventName){
    let messages = []
    for( let i = 0; i < newArray.length; i++){
        messages.push(`Thank you, ${newArray[i]}, for the wonderful ${eventName} gift!`)
    }
    return messages;
}

// writeCards(["Ada", "Brandon", "Steve"], "birthday")
// writeCards(newArray, "Birthday")
// let count = 0

function countDown(count){
    while(count >= 0){
        console.log(count)
        count--;
    }
    return count;
}
countDown(10)