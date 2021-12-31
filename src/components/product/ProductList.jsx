import React from "react";
import Card from "../../ui/layout/Card";
import Product from "./Product";
import classes from "./ProductList.module.css";
// Component to Hold the list of products
const ProductList = (props) => {
  return (
    <Card className='productList' classes={classes}>
      {props.products.map((product) => (
        //  Pass the onDeleteProduct function from the parent component to the child component
        // Destructure the props object to pass properties to the component
        // Pass key attribute to the child component to avoid warning and optimize performance
        // Pass product object to the component for editing
        <Product
          key={product.id}
          {...product}
          onDeleteProduct={props.onDeleteProduct}
          onOpenEditProductForm={props.onOpenEditProductForm}
          product={product}
        />
      ))}
    </Card>
  );
};

export default ProductList;
