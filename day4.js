
function createXmasTree(height, ornament) {
    let tree = ""
    const width = height*2-1

    for (let i = 0; i<height; i++){

        const ornamentWidth = i *2 +1
        const line = "_".repeat((width-ornamentWidth)/2)+ornament.repeat(ornamentWidth)+"_".repeat((width-ornamentWidth)/2)

        tree=tree+line+"\n"
    }

    const base =  "_".repeat((width-1)/2)+"#"+"_".repeat((width-1)/2)
    
    tree = tree + base + "\n"
    tree = tree + base 

    return tree
  }
  

 
