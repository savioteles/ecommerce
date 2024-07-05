import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/teste2.png"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Novidades da temporada</h5>
              <p className="card-text fs-5 mb-2">Descubra as últimas tendências e atualize seu guarda-roupa com estilo!</p>
              <p className="card-text fs-5 mt-0">
                <strong>Faça seu pedido agora e destaque-se nesta temporada!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
