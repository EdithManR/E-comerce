import React from "react";
import './ProductList.css'
const ProductList = () => {
  return(
    <section className="main-content">
      <aside className="filters">
        <h2>Filtros</h2>
        <div className="filters-category">
            <div className="filter-category">
              <h3>Categorias</h3>
              <label >
                <input type="checkbox" />
                <span>Hombres</span>
              </label>
              <label >
                <input type="checkbox" />
                <span>Mujeres</span>
              </label>
              <label >
                <input type="checkbox" />
                <span>Niños</span>
              </label>
            </div>
            <div className="filter-category">
              <h3>Tipos</h3>
              <label >
                <input type="checkbox" />
                <span>Prendas de abrigo</span>
              </label>
              <label >
                <input type="checkbox" />
                <span>Ropa interior</span>
              </label>
              <label >
                <input type="checkbox" />
                <span>Calzado</span>
              </label>
            </div>
        </div>
      </aside>
      <main className="collections">
        <div className="options">
          <h2>TODAS LAS COLECCIONES</h2>
          <div className="sort-options">
            <label>
              Ordenar por:
              <select>
                <option>Relevantes</option>
                <option>Precio: Mayor a menor</option>
                <option>Precio: Menor a mayor</option>
              </select>
            </label>
          </div>
        </div>
      </main>
    </section>
  );
}

export default ProductList;