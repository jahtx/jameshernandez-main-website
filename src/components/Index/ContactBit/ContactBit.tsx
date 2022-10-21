import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Container from "react-bootstrap/Container";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./ContactBit.scss";

const ContactBit = () => {
  const recaptchaRef = React.createRef();

  const [human, setHuman] = useState(false);

  const [state, handleSubmit] = useForm("mrgdpogd");

  const handleCaptcha = (value) => {
    value ? setHuman(true) : setHuman(false);
  };

  const handleSubmitButton = (data: any) => {
    if (human) {
      handleSubmit(data);
    } else {
      console.log("handleSubmit error");
    }
  };
  return (
    <section id="contact" className="contactBit">
      <div className="trans-2sec">
        <h2 className="text-center t-block pt-3 one-pt-8-rem">Contact</h2>

        <Container className="contactBit__cont pt-3">
          {!state.succeeded ? (
            <div className="multiBox justify-content-center">
              <div className="multiBox__contForm">
                I'm available for side-projects involving UX, web development,
                general consulting, and full-time employment. Send me a note and
                we'll be in touch!
                <Form
                  className="contactBit__form"
                  onSubmit={handleSubmitButton}
                >
                  <Form.Group>
                    <Form.Label className="contactBit__formLabel">
                      Your name *
                    </Form.Label>
                    <Form.Control
                      className="contactBit__formControl"
                      type="text"
                      placeholder="enter first/last name"
                      name="yourName"
                      required
                    />
                    <ValidationError
                      prefix="Name"
                      field="yourName"
                      errors={state.errors}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="contactBit__formLabel">
                      Email address *
                    </Form.Label>
                    <Form.Control
                      className="contactBit__formControl"
                      type="email"
                      name="_replyto"
                      placeholder="Enter email"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="ControlTextarea1">
                    <Form.Label className="contactBit__formLabel">
                      Message *
                    </Form.Label>
                    <Form.Control
                      className="contactBit__formControl"
                      as="textarea"
                      rows={3}
                      name="message"
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </Form.Group>
                  <div className="contactBit__captchaCont">
                    <ReCAPTCHA
                      className="mb-3"
                      ref={recaptchaRef}
                      sitekey="6Ldt17shAAAAAD8m4xqV0VA8qSRzJye0JQoo82NI"
                      onChange={handleCaptcha}
                    />
                  </div>

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <div className="w-100 d-flex buttonContainer">
                    <Button
                      className="sendButton"
                      variant="primary"
                      type="submit"
                      disabled={state.submitting || !human}
                    >
                      Send
                    </Button>
                  </div>
                  <ValidationError errors={state.errors} />
                </Form>
              </div>
            </div>
          ) : (
            <div className="sentResponse mt-3 d-flex">
              <div className="sentResponse__messageSection">
                <p className="mt-4">
                  Thanks for your message! You will receive a response in less
                  than 24 hours.
                </p>
              </div>
            </div>
          )}
        </Container>
      </div>
    </section>
  );
};

export default ContactBit;
