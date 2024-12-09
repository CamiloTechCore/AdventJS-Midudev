
function createFrame(names){

    const longerLength = Math.max(...names.map(names =>names.length)) 
    const marginY = "*".repeat(longerLength+4) // Toma el mas grande y suma los espacios de pading


    let frame = marginY + "\n"
    names.forEach(names => {
        frame = frame +"* "+ names+" ".repeat (longerLength - names.length) +" *\n" 
    });
    frame = frame + marginY

    return frame
 }
