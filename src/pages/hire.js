import React, { useState } from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby' 
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import DayPicker from 'react-day-picker'
import DayPickerInput from 'react-day-picker/DayPickerInput'

import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import ChevronDownIcon from "../svg/chevron-down.svg"


import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Collapse from 'react-bootstrap/Collapse'
import Carousel from 'react-bootstrap/Carousel'

import 'react-day-picker/lib/style.css'
import imedg from "../images/kitchen.jpg"

const Hire = () => {
	const {t} = useTranslation('hire')
	const data = useStaticQuery(query)
	const [toggle, setToggle] = useState(false)

	const past = {
    before: new Date()
  }

	return (
		<Container className="my-5">
			<Accordion>
				<Container fluid className="border p-0" style={{marginBottom: "4rem"}}>
					<Row xs={1} lg={2}>
						<Col as={Carousel} indicators={false}>
							<Carousel.Item>
								<Img fluid={data.file.childImageSharp.fluid} className="h-100" alt="Figure 1"/>
							</Carousel.Item>
							<Carousel.Item>
								<Img fluid={data.file.childImageSharp.fluid} className="h-100" alt="Figure 1"/>
							</Carousel.Item>
						</Col>
						<Col className="d-flex flex-column text-center justify-content-center p-5">
							<h4 className="text-uppercase">Янтарная комната</h4>
							<p>На втором этаже расположена - “Янтарная комната” помещение сдается под 
								проведение менее крупных мероприятий, его вместительность максимум 80 человек</p>
							<Accordion.Toggle as={Button} variant="link" className="chevron-down" eventKey="0">
								<ChevronDownIcon />
							</Accordion.Toggle>
						</Col>
					</Row>
					<Accordion.Collapse eventKey="0">
						<Row xs={1} lg={2}>
							<Col className="d-flex flex-column text-center justify-content-center py-4 order-2">
								<p className="mb-0">Availability Calendar</p>
								<DayPicker fromMonth={new Date()} disabledDays={past} />
							</Col>
							<Col className="d-flex flex-column text-center justify-content-center py-2 order-1">
								<p className="mx-5">Much evil soon high in hope do view. Out may few northward believing attempted.<br />
									Yet timed being songs marry one defer men our. Although finished blessing do of. <br />
									Consider speaking me prospect whatever if. Ten nearer rather hunted six parish indeed number. <br />
									Allowance repulsive sex may contained can set suspected abilities cordially. Do part am he high rest that. <br />
									So fruit to ready it being views match. 
								</p>
							</Col>
						</Row>
					</Accordion.Collapse>
				</Container>
				<Container fluid className="border p-0" style={{marginBottom: "4rem"}}>
					<Row xs={1} lg={2}>
						<Col className="d-flex flex-column text-center justify-content-center p-5">
							<h4 className="text-uppercase">Хрустальный зал</h4>
							<p>Главное помещение русского дома - “Хрустальный зал” находится на первом этаже, 
								оно вмещает в себя до максимум 100 человек и имеет свой отдельный вход с улицы.</p>
							<Accordion.Toggle as={Button} variant="link" className="chevron-down" eventKey="1">
								<ChevronDownIcon />
							</Accordion.Toggle>
						</Col>
						<Col as={Carousel} indicators={false}>
							<Carousel.Item>
								<Img fluid={data.file.childImageSharp.fluid} className="h-100" alt="Figure 1"/>
							</Carousel.Item>
							<Carousel.Item>
								<Img fluid={data.file.childImageSharp.fluid} className="h-100" alt="Figure 1"/>
							</Carousel.Item>
						</Col>
					</Row>
					<Accordion.Collapse eventKey="1">
						<Row xs={1} lg={2}>
							<Col className="d-flex flex-column text-center justify-content-center py-2 order-1">
								<p className="mb-0">Availability Calendar</p>
								<DayPicker fromMonth={new Date()} disabledDays={past} />
							</Col>
							<Col className="d-flex flex-column text-center justify-content-center py-2 order-2">
								<p className="mx-5">Much evil soon high in hope do view. Out may few northward believing attempted.<br />
									Yet timed being songs marry one defer men our. Although finished blessing do of. <br />
									Consider speaking me prospect whatever if. Ten nearer rather hunted six parish indeed number. <br />
									Allowance repulsive sex may contained can set suspected abilities cordially. Do part am he high rest that. <br />
									So fruit to ready it being views match. 
								</p>
							</Col>
						</Row>
					</Accordion.Collapse>
				</Container>
			</Accordion>
			<Container className="d-flex flex-column text-center align-items-center">
				<h3>CONTACT US</h3>
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
					<Form.Group className="d-flex justify-content-between" controlId="input6">
						<Form.Label>Preffered date</Form.Label>
						<DayPickerInput />
					</Form.Group>
					<div className="text-center pt-3">
						<Button variant="dark" type="submit" className="w-50">
							Submit
						</Button>
					</div>
				</Form>
			</Container>
		</Container>
	)

}

export default Hire

const query = graphql`
  query crystal {
    file(relativePath: { eq: "crystal.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
			}
		}
  }
`