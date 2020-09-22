import React, { useState } from 'react'

import DayPicker from 'react-day-picker'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

const Hire = () => {
	const past = {
    before: new Date()
  }

	return (
		<>
			<Container className="d-flex flex-column text-center align-items-center">
				<h3 className="pt-4">CONTACT US</h3>
				<p>
					For all Private Function Enquiries please contact the<br />
					Russian House	Associates team on
				</p>
				<p>+61 (0)3 2826 1547<br />
					eventmaker@russianhouse.com.au
				</p>
				<p>or fill in the form below:</p>
			</Container>
			<Container style={{maxWidth: "26rem"}}>
				<Form>
					<Form.Group controlId="input1">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text"></Form.Control>
					</Form.Group>
					<Form.Group controlId="input2">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email"></Form.Control>
					</Form.Group>
					<Form.Group controlId="input3">
						<Form.Label>Phone</Form.Label>
						<Form.Control type="text"></Form.Control>
					</Form.Group>
					<Form.Group controlId="input4">
						<Form.Label>Number of guests</Form.Label>
						<Form.Control type="number"></Form.Control>
					</Form.Group>
					<Form.Group controlId="input5">
						<Form.Label>Type of event</Form.Label>
						<Form.Control type="text"></Form.Control>
					</Form.Group>
					<Form.Group controlId="input6">
						<Form.Label>Preffered date</Form.Label>
						<DayPickerInput />
					</Form.Group>
				</Form>
			</Container>
			<Container className="d-flex justify-content-center pb-3">
				<DayPicker fromMonth={new Date()} disabledDays={past} />
			</Container>
		</>
	)

}

export default Hire