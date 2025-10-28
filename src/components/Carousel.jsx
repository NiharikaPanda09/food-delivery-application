import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="2500" // smoother timing
        style={{ objectFit: "contain" }}
      >
        <div className="carousel-inner" id="carousel">
          {/* Search Bar Overlay */}
          <div
            className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center"
            style={{
              zIndex: "10",
              top: "45%",
              transform: "translateY(-50%)",
            }}
          >
            <h2 className="fw-bold text-white mb-3 display-6">
              Discover Delicious Meals Near You 🍱
            </h2>
            <form className="d-flex w-75 justify-content-center">
              <input
                className="form-control me-2 rounded-pill px-3"
                type="search"
                placeholder="Search for dishes or restaurants..."
                aria-label="Search"
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  border: "none",
                }}
              />
              <button
                className="btn btn-success fw-semibold px-4 rounded-pill"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          {/* Carousel Images with Gradient Overlay */}
          <div className="carousel-item active">
            <div
              style={{
                position: "relative",
              }}
            >
              <img
                src="https://cdn.pixabay.com/photo/2017/01/22/19/20/burger-2002915_1280.jpg"
                className="d-block w-100"
                style={{
                  height: "90vh",
                  objectFit: "cover",
                  filter: "brightness(60%)",
                }}
                alt="Delicious Burger"
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
                }}
              ></div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pasta-3007375_1280.jpg"
              className="d-block w-100"
              style={{
                height: "90vh",
                objectFit: "cover",
                filter: "brightness(60%)",
              }}
              alt="Pasta Dish"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
              className="d-block w-100"
              style={{
                height: "90vh",
                objectFit: "cover",
                filter: "brightness(60%)",
              }}
              alt="Pizza Slice"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2017/12/09/08/18/sushi-3007403_1280.jpg"
              className="d-block w-100"
              style={{
                height: "90vh",
                objectFit: "cover",
                filter: "brightness(60%)",
              }}
              alt="Sushi Rolls"
            />
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
