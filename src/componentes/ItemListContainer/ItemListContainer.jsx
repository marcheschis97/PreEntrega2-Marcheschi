import { useEffect, useState } from "react";

import obtenerProductos from "../utilidades/data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners"

import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true)
  const { categoria } = useParams()

  useEffect(() => {
    obtenerProductos
      .then((respuesta) => {
        if (categoria) {
          const productosFiltrados = respuesta.filter((producto) => producto.categoria === categoria)
          setProductos(productosFiltrados)
        } else {
          setProductos(respuesta);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false)
      });
  }, [categoria]);

  return (
    <div>
      {cargando ? (
        <div className="cargando">
          <PulseLoader color="rgb(245, 166, 70)" />
        </div>
      ) : (
        <div className="item-list-container">
          <p className="saludo">{saludo}</p>
          <ItemList productos={productos} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
