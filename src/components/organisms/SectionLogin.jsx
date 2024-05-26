import React, { useState } from 'react';
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './SectionLogin.css';
import { guardar, imprimir } from "../../data/pilas";

function SectionLogin() {
    const [producto, setProducto] = useState('');
    const [fecha, setFecha] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [descp, setDescp] = useState('');
    const [celular, setCelular] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        const datos = {
            producto,
            fecha,
            cantidad,
            descp,
            celular,
        };
        guardar(datos);
        imprimir();
    };

    return (
        <div id='div_principal'>
            <div>
                <h2 id='texto'>Productos Básicos de Maquillaje</h2>
            </div>
            <div id="login_section">
                <Field type="text" placeholder="Maquillaje" text="Tipo de maquillaje" value={producto} onChange={(e) => setProducto(e.target.value)} />
                <Field type="datetime-local" text="Fecha del Pedido" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                <Field type="number" placeholder="Cantidad" text="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                <Field type="text" placeholder="Descripción" text="Descripción del producto" value={descp} onChange={(e) => setDescp(e.target.value)} />
                <Field type="tel" placeholder="Celular" text="Número de Telefono" value={celular} onChange={(e) => setCelular(e.target.value)}/>
                <Button onClick={handleClick} />
            </div>
        </div>
    );
}

export default SectionLogin;
