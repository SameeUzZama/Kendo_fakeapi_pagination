import "./detail.css";
import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardTitle,
  CardImage,
  CardHeader,
  CardSubtitle,
  CardBody,
} from "@progress/kendo-react-layout";

const ProductDetails = () => {
  const selectedItem = useSelector(
    (state) => state.productReducer.selectedProduct[0]
  );

  return (
    <div>
      <h1>Product Details</h1>
      <div className="main">
        <Card className="card">
          <CardTitle>ID: {selectedItem.id}</CardTitle>
          <CardImage className="image" src={selectedItem.image} />
          <div>
            <CardHeader>
              <CardTitle>
                <b>Title: </b>
                {selectedItem.title.substr(0, 20) + "..."}
              </CardTitle>
              <CardSubtitle>
                <span className="reviews">
                  <div>
                    <b>Rating:</b> {selectedItem.rating.rate}/5 Count:{" "}
                    {selectedItem.rating.count}
                  </div>
                </span>
                <p>
                  <b>Price: </b>
                  {selectedItem.price}
                </p>
                <p>
                  <b>Category: </b>
                  {selectedItem.category}
                </p>
              </CardSubtitle>
            </CardHeader>
            <CardBody>
              <p>
                <b>Description: </b>
                {selectedItem.description.substr(0, 100) + "..."}
              </p>
            </CardBody>
          </div>
        </Card>
      </div>
      {/* <div className="details-parent">
        <div className="product-image-div">
          <img className="product-image" src={selectedItem.image} alt="" />
        </div>
        <div className="product-content">
          <h3>{selectedItem.title}</h3>
          <h4>Price: ${selectedItem.price}</h4>
          <span>
            <b>Category: {selectedItem.category}</b>
          </span>
          <p style={{ width: "400px" }}>{selectedItem.description}</p>
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetails;
