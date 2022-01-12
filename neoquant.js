// function greet(name, myFunction) {
//     console.log('Hello world');

//     // callback function
//     // executed only after the greet() is executed
//     myFunction(name);
// }

// // callback function
// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function after 2 seconds
// setTimeout(greet, 2000, 'John', sayName);




// const funA = () => {
//     setTimeout(function(){
//     console.log("call funA");
//     funB()

// }, 3000);

// }
// const funB = () => {
//     console.log("call funB")
// }
// funA()


///////// synch callback

// const funA=(name,callback)=>{
//     console.log(`my name is ${name }`)
//     callback();
// }

// const funB=()=>{
//     console.log(`hello`)
// }
// funA("prajakta",funB)


//////async call back

// setTimeout(() => {
//     console.log('time')
// },3000);
// function x(y){
//     console.log("x call")
//     y();
// }
// x( function y(){
//     console.log("y call")
// });


/////// foreach with callback?

// num=[1,2,3,4,5]
// num.forEach(callback);

// function callback(item,index,arr){
//     console.log(item)
// }
// callback=()=>{

// }


///////// string reverse

        let str = "Neoquant Solutions"
        newstr = ""
        for (let i = str.length - 1; i >= 0; i--) {
            newstr+=str[i]
        }
        console.log(newstr)  



////////string count
    let strr = 'neoquantsolution'
    obj={}
    for(let i=0; i<strr.length;i++){
        char=strr.charAt(i)
    
        if(obj[char]){
            obj[char]++
        }
        else{
            obj[char]=1
        }
    }
    console.log(obj)









///////array of object

let  pepole=[
    {
        name:'prajakta',
        age:23
    },
    {
        name:'richa',
        age:24  
    },   
     {
        name:'amruta',
        age:19
    }, 
      {
        name:'sanjay',
        age:20  
    },  
      {
        name:'zebra',
        age:28  
    },    
]

// /////4
////1 find names
      let names=pepole.map(a =>{
          return a.name
      })
      console.log(names)

////2 
 ///find age

      let ages=pepole.map(a =>{
          return a.age
      })
      console.log(ages)

///age reverse
    let array= pepole.map(a=>a.age).sort().reverse()
    console.log(array)

//age max and min
    console.log("min age "+ " "+array[array.length-1])
    console.log("max age "+ " "+array[0])
////names reverse
    let arrayg= pepole.map(a=>a.name).sort().reverse()
    console.log(arrayg)
////age total 
    let total=pepole.reduce((previous,current)=>current.age+previous,0)
    console.log(total)

    
























