import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./composite.scss";

/**
 * A functional component with useState
 * Allows modal windows for diplaying full pictures of compositess
 *

 */

const Composite = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <React.Fragment>
      <div
        className={
          "overflow-hidden " + (props.isMobile ? "mobThumb" : "deskThumb")
        }
        onClick={handleShow}
      >
        <GatsbyImage
          image={props.imageInfo}
          alt={props.title + " " + (props.isMobile ? "Mobile" : "Desktop")}
        />
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName={
          "overflow-hidden " + (props.isMobile ? "modalMobile" : "modalDesktop")
        }
      >
        <Modal.Header closeButton>
          <Modal.Title className="one-pt-1-rem all-caps font-weight-bold">
            {props.title + " " + (props.isMobile ? "Mobile" : "Desktop")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GatsbyImage image={props.imageInfo} alt={props.title} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default Composite;
