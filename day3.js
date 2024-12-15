Type inventory = array < {
    name: String, quantity: Number, category: String}
    >

function organizeInventory(inventory: inventory):Object{
    return inventory.reduce((acc, curr)=>{acc[curr.category]=acc[cur.category]||{}
    acc[curr.category][curr.name]=(acc[curr.category][curr.name] || 0)+ curr.quantity
    return acc
},{})
    
}

//No funciona esperando el proximo video de explicacion 