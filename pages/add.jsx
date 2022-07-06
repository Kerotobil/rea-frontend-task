import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { Navigation } from '../components/navbar';
import { addBook } from '../helpers/axios-api-client';
export default function Add() {
  const handleAddProduct = async ({ name, price, author }) => {
    await addBook(name, author, price);
  };
  return (
    <div>
      <Navigation />

      <div className="container">
        <Formik
          initialValues={{
            name: '',
            author: '',
            price: '',
            image: '',
          }}
          onSubmit={(values) => handleAddProduct(values)}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isValid={touched.name && !errors.name}
                  isInvalid={!!errors.name}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  isInvalid={!!errors.price}
                  isValid={touched.price && !errors.price}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={values.author}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                  isValid={touched.author && !errors.author}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  value={values.image}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                  isValid={touched.image && !errors.image}
                />
              </Form.Group>

              <Button className="mt-3" type="submit">
                Update
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
