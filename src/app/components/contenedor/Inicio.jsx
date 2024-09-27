import React, { useEffect, useState } from "react";

export const Inicio = ({ discount }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Llamada a la API de Fake Store
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const applyDiscount = (price) => {
    return price - (price * discount) / 100;
  };

  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="row">
            {/* Seccion de productos*/}
          {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}> {/* 4 columnas en dispositivos medianos y más grandes */}
              <div className="card h-100"> {/* Tarjeta con altura máxima para alineación */}
                <img src={product.image} alt={product.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  {discount > 0 ? (
                    <p className="text-decoration-line-through">
                      Precio original: ${product.price.toFixed(2)}
                    </p>
                  ) : (
                    <p>
                      Precio: ${product.price.toFixed(2)}
                    </p>
                  )}
                  {discount > 0 && (
                    <p className="price">
                      Precio con descuento: ${applyDiscount(product.price).toFixed(2)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};