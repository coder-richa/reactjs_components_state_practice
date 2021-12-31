import { React, Fragment, useState } from "react";
import Card from "../../ui/layout/Card";
import Row from "../../ui/layout/Row";
import Column from "../../ui/layout/Column";
import Form from "../../ui/form/Form";
import Label from "../../ui/form/Label";
import Input from "../../ui/form/Input";
import Button from "../../ui/form/Button";
import Textarea from "../../ui/form/Textarea";
import Modal from "../../ui/modal/Modal";
import { checkEmpty } from "../../utility/stringFunctions";
// Form for adding a new product
const EditProductForm = (props) => {
  /**
   *  @description State for the form inputs
   * useState returns an array with the first element being the state and the second element being a function to update the state
   * @type {Array}   [userInput, setUserInput]
   * @param {Object} userInput - The state of the form inputs
   */
  const [userInput, setUserInput] = useState(props.product);

  /** @description Function to update the state of the form inputs error messages
   * @param {null} null - null to present no error message
   * @returns {Array} [error, setError] - The state of the form inputs error messages and function reference to update the state
   */
  const [error, setError] = useState(null);

  /**
   *   Event Handlers Start
   */

  const titleOnChangeHandler = (event) => {
    // Retrieve latest snapshot of the form inputs and overwrite the title value
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const priceOnChangeHandler = (event) => {
    // Retrieve latest snapshot of the form inputs and overwrite the price value
    setUserInput((prevState) => {
      return { ...prevState, price: event.target.value };
    });
  };
  const descriptionOnChangeHandler = (event) => {
    // Retrieve latest snapshot of the form inputs and overwrite the description value
    setUserInput((prevState) => {
      return { ...prevState, description: event.target.value };
    });
  };
  const dateOnChangeHandler = (event) => {
    // Retrieve latest snapshot of the form inputs and overwrite the date value
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  // Event handler for the dismissing of the modal
  const onConfirmHandler = () => {
    // Reset Error state to close the error message
    setError(null);
  };

  // Form submission handler
  const editProductHandler = (event) => {
    event.preventDefault();
    // Check if the form inputs are empty
    if (checkEmpty(...Object.values(userInput))) {
      setError({
        heading: "Invalid Input",
        message: "Please fill in all fields",
      });
      return;
    }
    // Check if price is zero or negative
    if (userInput.price < 0) {
      setError({
        heading: "Invalid Product Price",
        message: "Please enter valid product price",
      });
      return;
    }
    // If the form inputs are not empty, then update the product to the database
    props.onEditProduct(userInput);
  };

  /**
   *   Event Handlers Ends
   */
  /**
   *  We are using Fragment to return multiple elements in a single return statement
   * It avoids div soup and allows us to return multiple elements in a single return statement without creating unnecessary divs in the DOM
   *
   */
  return (
    <Fragment>
      {/* Modal to display error messages when error is non-empty */}
      {error && (
        <Modal
          heading={error.heading}
          message={error.message}
          onClick={onConfirmHandler}
        ></Modal>
      )}

      <Card>
        <h2>Edit Product</h2>
        <Form onSubmit={editProductHandler}>
          <Row>
            <Column className='is-one-half'>
              <Label className='required' htmlFor='title'>
                Title
              </Label>
              <Input
                type='text'
                id='title'
                required='required'
                onChange={titleOnChangeHandler}
                value={userInput.title}
              />
            </Column>
            <Column className='is-one-half'>
              <Label className='required' htmlFor='price'>
                Price
              </Label>
              <Input
                type='number'
                id='price'
                min='1'
                step='1'
                required='required'
                onChange={priceOnChangeHandler}
                value={userInput.price}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <Label className='required' htmlFor='description'>
                Description
              </Label>
              <Textarea
                id='description'
                required='required'
                onChange={descriptionOnChangeHandler}
                value={userInput.description}
              />
            </Column>
          </Row>
          <Row>
            <Column className='is-one-half'>
              <Label className='required' htmlFor='date'>
                Date
              </Label>
              <Input
                type='date'
                id='date'
                min='2019-01-01'
                step='2022-12-31'
                required='required'
                onChange={dateOnChangeHandler}
                value={userInput.date}
              />
            </Column>
            <Column className='is-one-half'></Column>
          </Row>
          <Row>
            <Column>
              <Button type='submit'>Submit</Button>
            </Column>
          </Row>
        </Form>
      </Card>
    </Fragment>
  );
};
export default EditProductForm;
