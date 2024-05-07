export const errorHandler = (texto) => {
    if(texto === ''){
        throw new Error('Por favor, escriba una tarea');
    }
}

 