//most asked question.  (block off a variable’s scope)

for(var i = 0; i <  5; i++){
    setTimeout(() => {
        console.log(i)
    })
    
}

// o/p =  5 5 5 5 5

//solution

for(let i = 0; i < 5; i++){
    setTimeout(() => {
        console.log(i)
    })
}

//o/p = 0 1 2 3 4

// explaination  = Declaring i in the for loop creates a global variable named i , and then iterates it until its value reaches 5 .
// so when setTimout executes it takes current value for 'i' i.e '5'