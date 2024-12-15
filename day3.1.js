function organizeInventory(inventory) {
    const superObject = {}

    inventory.forEach(toy=> {
        if (!superObject[toy.category]){
            superObject[toy.category]={}
        }
        if(superObject[toy.category][toy.name]){
        superObject[toy.category][toy.name]+=toy.quantity}
        else{
            superObject[toy.category][toy.name]= toy.quantity
        }
    })
    return superObject
  }