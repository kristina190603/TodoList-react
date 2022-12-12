import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalEdit({
  handleShow,
  show,
  setShow,
  editTodo,
  setEditTodo,
  handleEditSave,
}) {
//   console.log(editTodo);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            value={editTodo.task}
            onChange={(e) =>
              setEditTodo((prev) => {
                // при изменении копируется значение предыдущего объекта, и меняется поле таск на значение из инпута
                return { ...prev, task: e.target.value };
              })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleEditSave(editTodo);
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEdit;
