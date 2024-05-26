let pila = [];

const guardar = (dato) => {
    pila.push(dato);
    alert("Elemento guardado en la pila");
    return true;
};

const imprimir = () => {
    if (pila.length === 0) {
        alert("La pila está vac+ia");
    } else {
        let elementos = pila.map((elem, index) => `Elemento ${index +1}: ${JSON.stringify(elem)}`).join(("\n"));
        alert("Elementos en la pila:\n" + elementos);
    }
};

export {guardar,imprimir}