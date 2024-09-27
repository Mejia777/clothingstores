import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../components/contenedor/Inicio";
import { Descuentos } from "../../components/contenedor/Descuentos";
import { useState } from "react";

export const Ruteo = () => {
    const [discount, setDiscount] = useState(0);
    return (
        <Routes>
            <Route path="/" element={<Inicio discount={discount}/>}/>
            <Route path="/descuento" element={<Descuentos setDiscount={setDiscount}/>} />
        </Routes>
    )
}