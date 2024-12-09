function prepareGifts(gifts){
    const Dontrepeat = Array.from(new Set(gifts)) // quita los elementos 
    
   return Dontrepeat.sort((a, b) =>{ // Organiza los elementos 
    return a-b // Ordena de manera decendente 

   })

}

console.log(
    prepareGifts([3,1,2,3,4,2,5])
)
