import React from "react";
import AddProductForm from "../components/product/AddProductForm";
import EditProductForm from "../components/product/EditProductForm";
import ProductList from "../components/product/ProductList";
import classes from "./App.module.css";
import { products as data } from "../data/products";
const App = (props) => {
  // Mantain state of the products
  const [products, setProducts] = React.useState(data);
  // Maintain state of the product to be edited
  const [productToEdit, setProductToEdit] = React.useState(null);

  // add Product Handler
  const addProductHandler = (product) => {
    // Add product to the products array from the latest previous state snapshot
    setProducts((prevProducts) => {
      return [...prevProducts, { ...product, id: Math.random() }];
    });
  };
  // delete Product Handler
  const deleteProductHandler = (productID) => {
    // Removes product to the products array from the latest previous state snapshot
    setProducts((prevProducts) => {
      return prevProducts.filter((product) => product.id !== productID);
    });
  };
  // edit Product Handler
  const editProductHandler = (product) => {
    // Update product to the products array from the latest previous state snapshot
    setProducts((prevProducts) => {
      // Find the product to be edited
      let index = prevProducts.findIndex((prod) => prod.id === product.id);
      // Replace the product to be edited with the new product
      return [
        ...prevProducts.slice(0, index),
        product,
        ...prevProducts.slice(index + 1),
      ];
    });
    setProductToEdit(null);
  };

  // open edit Product Form Handler
  const openEditProductHandler = (product) => {
    // Removes product to the products array from the latest previous state snapshot
    setProductToEdit(product);
  };

  return (
    <div className={classes[`page-content`]}>
      {/* Display Add Form when showAddProductForm is enabled */}
      {!productToEdit && <AddProductForm onAddProduct={addProductHandler} />}
      {/* Display Edit Form when showAddProductForm is disabled
        Pass product to be edited to the Edit Form
      */}
      {productToEdit && (
        <EditProductForm
          {...productToEdit}
          product={productToEdit}
          onEditProduct={editProductHandler}
        />
      )}
      <ProductList
        products={products}
        onDeleteProduct={deleteProductHandler}
        onOpenEditProductForm={openEditProductHandler}
      ></ProductList>
    </div>
  );
};
export default App;
