import React from "react";
import classes from "./Product.module.css";
import Button from "../../ui/form/Button";
import Row from "../../ui/layout/Row";
import Column from "../../ui/layout/Column";
import { formatDate } from "../../utility/dateFunctions";
import { formatCurrency } from "../../utility/numberFunctions";
// Destructuring the props object
const Product = ({
  title,
  price,
  description,
  date,
  id,
  onDeleteProduct,
  onOpenEditProductForm,
  product,
}) => {
  return (
    <Row className='product' classes={classes}>
      <Column className='is-three-quarters'>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.price}>{formatCurrency(price)}</p>
        <p className={classes.date}>{formatDate(date)}</p>
        <p>{description}</p>
      </Column>
      <Column className='is-one-quarter'>
        {/* Call  onOpenEditProductForm function from the parent component by passing product (Lifting State Up) */}
        <Button
          className='edit'
          classes={classes}
          type='button'
          onClick={() => onOpenEditProductForm(product)}
        >
          Edit
        </Button>
        {/* Call  onDeleteProduct function from the parent component by passing product id (Lifting State Up) */}
        <Button
          className='delete'
          classes={classes}
          onClick={() => onDeleteProduct(id)}
          type='button'
        >
          Delete
        </Button>
      </Column>
    </Row>
  );
};

export default Product;
