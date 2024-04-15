import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseUrl = "https://minipro.pythonanywhere.com/api";

const Category = () => {
  useEffect(() => {
    document.title = "LMS | Our Categories";
  });

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    try {
      fetch(baseUrl + "/category/")
        .then((response) => response.json())
        .then((data) => setCategoryData(data))
        .catch((error) => console.error("Error fetching categories:", error));
    } catch (error) {
      console.log("Error:", error);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mt-4">
      <div className="mt-3 text-center wow fadeInUp">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Categories
        </h6>
        <h1 className="mb-5">Our Categories</h1>
      </div>
      <div className="row mb-4">
        {categoryData &&
          categoryData.map((row, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to={`/course/${row.id}/${row.title}`} className="text-decoration-none">
                      {row.title} ({row.total_courses})
                    </Link>
                  </h5>
                  <p className="card-text">{row.description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;