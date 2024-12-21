def in_box(box):
    for i in range(len(box)):
        if '*' in box[i]:  # Buscar el '*' en la fila actual
            col = box[i].index('*')  # Obtener la posición (columna) del '*'
            
            # Comprobar si está completamente rodeado por '#'
            is_surrounded = (
                i > 0 and box[i - 1][col] == '#' and   # Arriba
                i < len(box) - 1 and box[i + 1][col] == '#' and  # Abajo
                col > 0 and box[i][col - 1] == '#' and  # Izquierda
                col < len(box[i]) - 1 and box[i][col + 1] == '#'  # Derecha
            )
            
            return is_surrounded  # Devolver el resultado inmediato
    
    return False  # Si no encontramos '*', devolver False
