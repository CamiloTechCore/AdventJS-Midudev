function organizeShoes(shoes) {
    const obj={}
    const arr =[]
    shoes.forEach(shoe => {
       if(obj[shoe.size] && obj[shoe.size].count>0){
        if(obj[shoe.size].type !== shoe.type){
            arr.push(shoe.size)
            obj[shoe.size].count--
        }else{
            obj[shoe.size].count++
        }
       }else{
        obj[shoe.size]={
            type: shoe.type,
            count: 1,
        }
    
       }
    });

    return arr
  }