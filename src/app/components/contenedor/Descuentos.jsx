import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Descuentos = ({ setDiscount }) => {
  const [login, setLogin] = useState(false); // Simulación del login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      // Verifica si los campos no están vacíos
      setLogin(true); // Simula el inicio de sesión exitoso
      setError(""); // Limpia cualquier error
    } else {
      setError("Por favor ingrese un usuario y contraseña válidos"); // Muestra error si faltan campos
    }
  };

  const applyDiscount = () => {
    setDiscount(30); // Fija el descuento al 30%
    navigate("/"); // Redirige a Inicio
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="text-center">
          {!login ? (
            <div>
              <h2>Login</h2>
              <form>
                <div>
                  <label htmlFor="username" className="form-label">Usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre de usuario o correo electrónico"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="form-label">Contrasena</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}{" "}
                {/* Muestra el error si existe */}
                <button type="button" className="btn btn-primary" style={{ marginTop: '15px' }} onClick={handleLogin}>Iniciar sesión</button>
              </form>
            </div>
          ) : (
            <div>
              <h2>Aplica un 30% de descuento en todos los productos</h2>
              <button type="button" className="btn btn-success" onClick={applyDiscount}>Aplicar descuento</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
