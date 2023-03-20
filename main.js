
const str = "Lorem ipsum dolor sit amet consectetur adipisicing elit , Animi aspernatur"
function toCapitalCase(str){
    const words = str.split(' ')
    const newWords = []
    for(let word of words) {
        word = word[0].toUpperCase().concat(word.split("").slice(1).join(""))
        newWords.push(word)
    }
    return newWords.join(" ")
}
//alert( toCapitalCase(str))  // [Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit , Animi Aspernatur]

const arr = [150,24,42,65,78,90,34,12]
const els = []
arr.forEach(el => els.push(el+1))

//alert(els)         //  [151,25,43,66,79,91,35,13]

//alert(arr.map(el => el+1))  // [151,25,43,66,79,91,35,13]

//alert(arr.filter(el => el > 30))  // [150,42,65,78,90,34]

const initialValue = 5;
arr.reduce((accumulator, currentValue ) =>
    accumulator + `${currentValue} `,[] ).split(' ').pop() //[150,24,42,65,78,90,34,12]
arr.splice(0,1,'77,33') //[77,33,24,42,65,78,90,34,12]
arr.reverse() // [12,34,90,78,65,42,24,77,33]
arr.length   //  8
arr[7]       //  77,33
arrCorrect = arr.join(',').split(',')  // [12,34,90,78,65,42,24,77,33]
//alert(arrCorrect.length)  // 9
const phrase = "Consectetur"
//console.log(phrase.split("")) // [C,o,n,s,e,c,t,e,t,u,r]
//console.log([...phrase])  //  [C,o,n,s,e,c,t,e,t,u,r]
//alert([...phrase].includes('c'))
const arrF = [...phrase].map(el  =>  el.toUpperCase()) // [C,O,N,S,E,C,T,E,T,U,R]
const arrN = []
for(let el of arrF) {
    if(el === "T") {
        el = "t"
        arrN.push(el)
    }else{
        arrN.push(el)
    }
}
//alert(arrN)  //  [C,O,N,S,E,C,t,E,t,U,R]
alert(arrN.slice(3,arrN.length))  //  [S,E,C,t,E,t,U,R]

//alert(arrN.sort()) //  [C,C,E,E,N,O,R,S,U,t,t]

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b)
//alert(numbers); // [1, 2, 3, 4, 5]

const arrT = ['w', 'y', 'k', 'o', 'p'];
const eArr = arrT.values();
//console.log([...eArr])
for (let letter of eArr) {
 //   console.log(letter);
}

const arrM = ['a', 'b','c'];
const mArr = arrM.entries();
console.log(mArr.next().value); // [0, 'a']

let n = 0
let x = 0
while(n < 3) {
    n++
    x = x + n //x += n
}
//alert(x)  // 6

let request = ''
let regexp = ''
do {
    request = prompt('What is your name ?')?.trim()
    regexp = request?.match(/\D+/ig)?.join('')
        console.log(regexp)
} while (request !== regexp)
alert(`${request}  :  ${regexp}`)
