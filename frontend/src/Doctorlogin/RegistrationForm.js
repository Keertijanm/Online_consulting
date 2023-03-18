import React, { useContext, useState } from 'react';
import { Redirect, useHistory } from "react-router-dom";
import { Container, Row, Col, Card, Form, CardHeader, CardBody, FormGroup, CardFooter, Button, Label, Input } from 'reactstrap'
import axios from 'axios';
import { AuthContext } from '../Auth/AuthContext';
const RegistrationForm = () => {
  //register(); fxn  in button onClick={register}
  async function register() {
   return <Redirect to="/doctor" />;
  }
  return (
    <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5 ">
          <Card>
            <Form>
              <CardHeader className="">Hello, Doctor</CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Username
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="provide your username"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="your password here"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Name" sm={3}>
                    Name
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="your Name here"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="your Email here"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="phoneNumber" sm={3}>
                    phoneNumber
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="your Phone number here"
                      minlength="10"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="specialization" sm={3}>
                    Specialization
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="specialization"
                      id="specialization"
                      placeholder="your specialization "
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="feesPerSession" sm={3}>
                    Consulting Fees
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="feesPerSession"
                      id="feesPerSession"
                      placeholder="your feesPerSession "
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button block color="primary" onClick={register}>
                  Sign up 
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}







/*
<>
		<div class="contact-area pt_60 pb_90">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-6">
						<div class="contact-form headstyle user-login-tab pt_0">
							<ul class="nav nav-tabs mt_15" role="tablist">
								<li class="nav-item">
									<a class="nav-link active" data-toggle="tab" href="#" role="tab">Doctors
										Registration</a>
								</li>
							</ul>

							<!-- Tab panes -->
							<div class="tab-content">
								<div class="tab-pane active" id="patientLogin" role="tabpanel">
									<form action="/doctorregistration" method="POST" accept-charset="utf-8">
										< class="form-row row mt_20">
											<div class="form-group col-12">
												<p>Username</p>
												<input type="text" class="form-control" placeholder="Name" name="name"
													autocomplete="off" required>
											</div>
											<div class="form-group col-12">
												<p>Password</p>
												<input type="password" class="form-control" placeholder="password"
													name="password"  required>
											</div>
											<div class="form-group col-12">
												<p>Name</p>
												<Input type="text" class="form-control" placeholder="Name" name="name" autocomplete="off" required>

                                            </div>
											
											
											
											
											
										
											<div class="form-group col-12">
												<p>Email Id</p>
												<input type="email" class="form-control" placeholder="Email Address"
													name="username"  required>
											</div>

<div class="form-group col-12">
	<p>Phone Number</p>
	<input type="text" class="form-control" placeholder="Phone Number (format: +91'xxxxxxxxxx')" name="phone"
		minlength="10" required>
		</div>

											<div class="form-group col-12">
												<div class="mb-3">
													<p>Please enter a Specialization in the textarea</p>
													<select id="specialization" name="specialization" required>
													<option value=""> anaesthesia</option>      
													<option value=""> dermatology</option>
													<option value=""> emergency medicine</option>
													<option value=""> general pra</option>
													<option value=""> intensive care medicine</option>
													<option value=""> medical adminstration</option>
													<option value=""> obstetrics </option>
													<option value=""> occupationa</option>
													<option value=""> ophthalmolo</option>
													<option value=""> pediatrics </option>
													<option value=""> pain medicine</option>
													<option value=""> pathology</option>
													<option value=""> physician</option>
													<option value=""> psychiatry</option>
													<option value=""> public heal</option>
													<option value=""> radiation </option>
													<option value=""> radiology
													<option value=""> dentistry
													<option value=""> rehabilitat</option>
													<option value=""> sport and medicine</option>
													</select>
												</div>
											</div>
											<div class="form-group col-12">
												
												<div class="mb-3">
													<p>Please enter a Address of hospital/clinic in the textarea</p>
													<textarea class="form-control" class="validationTextarea"
														placeholder="Hospital/Clinic Address" name="feesPerSession"
													 required></textarea>
												</div>
											</div>
											
											<div class="form-group col-12">
												<button type="submit" class="btn" name="form_login">Register</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


			<!-- JavaScript -->
			<script defer src="assets/lib/js/jquery-3.4.1.min.js"></script>
			<script defer src="assets/lib/js/popper.min.js"></script>
			<script defer src="assets/lib/js/bootstrap.bundle.min.js"></script>
			<script defer src="assets/lib/js/all.min.js"></script>
			<script defer src="assets/lib/js/select2.full.min.js"></script>
			<script defer src="assets/js/about.js"></script>


</html>
*/
export default RegistrationForm;