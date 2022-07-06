import { Formik } from 'formik';
import { Form, Button, Modal } from 'react-bootstrap';
import { updateBook } from '../../helpers/axios-api-client';
export const UpdateModal = (props) => {
  const handleUpdateProduct = async ({ name, price, author }) => {
    await updateBook(props.id, name, author, price);
  };

  return (
    <div>
      <Modal show={props.show} size="lg" centered>
        <Modal.Header closeButton onHide={props.onHide}>
          <Modal.Title>Ürün Güncelle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Formik
              initialValues={{
                name: '',
                author: '',
                price: '',
              }}
              onSubmit={(values) => handleUpdateProduct(values)}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                      isInvalid={!!errors.lastName}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="text"
                      name="price"
                      value={values.lastName}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                      isValid={touched.lastName && !errors.lastName}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                      type="text"
                      name="author"
                      value={values.lastName}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                      isValid={touched.lastName && !errors.lastName}
                    />
                  </Form.Group>

                  <Button className="mt-3" type="submit">
                    Submit form
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
