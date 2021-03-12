import React from 'react'

function Carousel() {
    return (
        <div>
      
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="./img/home/fondohome.jpg" alt="First slide" />
              <div className="carousel-caption d-none  d-flex justify-content-start text-danger">
                <h5 className="h5">hola</h5>
                <p className="p">tamesis</p>
              </div>

            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./img/home/fondohome2.jpg" alt="Second slide" />
              <div className="carousel-caption d-none   d-flex justify-content-end">
                <h5 className="h52">hola</h5>
                <p className="p2">balto</p>
              </div>
            </div>

          
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        </div>
    )
}

export default Carousel
