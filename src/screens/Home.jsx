import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("https://food-delivery-application-3-r5t3.onrender.com/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <NavBar />

      {/* Carousel Section */}
      <Carousel />

      {/* Food Section */}
  <div className="container mt-5">
  {foodCat.length > 0 ? (
    foodCat.map((data) => (
      <div key={data._id} className="mb-5">
        <h3 className="text-uppercase text-warning fw-bold mb-3">
          {data.CategoryName}
        </h3>
        <hr className="border-light" />

        {/* Bootstrap row with proper gutters */}
        <div className="row g-4">
          {foodItem.length > 0 ? (
            foodItem
              .filter(
                (item) =>
                  item.CategoryName === data.CategoryName &&
                  item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((filterItems) => (
                <div
                  key={filterItems._id}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
                >
                  <div
                    className="card bg-dark text-light shadow-lg border-0 rounded-4 p-2"
                    style={{
                      width: "100%",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 25px rgba(0,255,100,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 10px rgba(0,0,0,0.3)";
                    }}
                  >
                    <Card
                      foodItem={filterItems}
                      options={filterItems.options[0]}
                    />
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center text-muted fs-5">
              No items found
            </div>
          )}
        </div>
      </div>
    ))
  ) : (
    <div className="text-center py-5 fs-4 text-light">
      Loading delicious food...
    </div>
  )}
</div>

      <Footer />
    </div>
  );
};

export default Home;
