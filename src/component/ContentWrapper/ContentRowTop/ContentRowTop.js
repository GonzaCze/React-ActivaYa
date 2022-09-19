import React from "react"
import foto2 from "../../../assets/image/mandalorian.jpg"
import ContentoRowMovies from "./ContentRowMovies/ContentRowMovies"
import GenresInDb from "./GenresInDb/GenresInDb"


const dataMovies = [{
  titulo:"Movies in Data Base",
  cifra: "21",
  color:"primary", 
  icono:"fas fa-film fa-2x text-gray-300" 
},
{
  titulo:"Total awards",
  cifra: "10",
  color:"success", 
  icono:"fas fa-film fa-2x text-gray-300" 
},
{
  titulo:"Actors quantity",
  cifra: 43,
  color:"warning", 
  icono:"fas fa-film fa-2x text-gray-300" 
}
] 

function ContentRowTop() {
return (
<div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
    </div>

    {/* <!-- Content Row Movies--> */}
    <div className="row">
     
    
      {dataMovies.map((element,e)=> {
        return <ContentoRowMovies key={e} titulo={element.titulo} cifra={element.cifra} color={element.color} icono={element.icono} />
      })}

     
      </div>

    {/* <!-- Content Row Last Movie in Data Base --> */}
    <div className="row">
      {/* <!-- Last Movie in DB --> */}
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Last movie in Data Base
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "40rem" }}
                src={foto2}
                alt=" Star Wars - Mandalorian "
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              consequatur explicabo officia inventore libero veritatis iure
              voluptate reiciendis a magnam, vitae, aperiam voluptatum non
              corporis quae dolorem culpa citationem ratione aperiam voluptatum
              non corporis ratione aperiam voluptatum quae dolorem culpa ratione
              aperiam voluptatum?
            </p>
            <a
              className="btn btn-danger"
              target="_blank"
              rel="nofollow"
              href="/"
            >
              View movie detail
            </a>
          </div>
        </div>
      </div>
      {/* <!-- End content row last movie in Data Base --> */}

      {/* <!-- Genres in DB --> */}

      <div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<GenresInDb/>

							</div>
						</div>
					</div>
				</div>
);
}

export default ContentRowTop
