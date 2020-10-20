/**
 * footer.js
 * Created by Egor Sadanov (@sadanov)
 *
 * This function returns the footer of the website.
 *
 * 1. It allows to subscribe to the newsletters.
 * 2. It provides information about the location of the House.
 * 3. It provides navigation to other site's pages.
 */
import React, { useRef, useState } from 'react'
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import SubscribeIcon from "../images/svg/send.svg"


function Footer() {
	const {t} = useTranslation("common")
	// const [ mailBox, setMailBox ] = useState("")
	const [ submitted, setSubmit ] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		setSubmit(true)
		console.log(e.target[0].value)
	}

	return (
		<Container fluid as="footer" className="bg-lightgrey px-0">
			<Container className="d-flex flex-column pt-4">
				<label htmlFor="subscribe" className="text-secondary text-uppercase text-center">
					{t('footer.subscribe')}
				</label>
				{ submitted 
				? <p className="text-secondary text-center mx-auto">Thank you. We have added your email to the subscription list.</p> 
				:	<Form onSubmit={(e) => handleSubmit(e)}>
						<InputGroup className="d-flex justify-content-center mb-4">
							<Form.Control 
								// onChange={(e) => setMailBox(e.target.value)}
								type="email"
								placeholder={t('footer.placeholder')}
								aria-label="subscribe-list"
								aria-describedby="subscribe"
								style={{maxWidth: "20rem", boxShadow: "none"}}
								required
							/>
							<InputGroup.Append>
								<Button variant="outline-secondary" type="submit" className="subscribe-btn">
									<SubscribeIcon />
								</Button>
							</InputGroup.Append>
						</InputGroup>
					</Form>
				}
				<hr className="m-0" />
			</Container>
			<Container className="mt-4">
				<Row xs={2} lg={5}>
					<Col className="mb-2">
						<ListGroup>
							<strong>{t('menu.events')}</strong>
							<ListGroup.Item>
								<Link to="/" className="custom-link">What's on</Link>
							</ListGroup.Item>
							<ListGroup.Item>
								<Link to="/" className="custom-link">Past Events</Link>
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col className="mb-2">
						<ListGroup>
							<strong>{t('menu.about')}</strong>
							<ListGroup.Item>
								<Link to="/" className="custom-link">History</Link>
							</ListGroup.Item>
							<ListGroup.Item>
								<Link to="/" className="custom-link">Mission</Link>
							</ListGroup.Item>
							{/* <ListGroup.Item>
								<Link to="/" className="custom-link">Buffet</Link>
							</ListGroup.Item> */}
						</ListGroup>
					</Col>
					<Col className="mb-2">
						<ListGroup>
							<strong>{t('menu.support-us')}</strong>
							<ListGroup.Item>
								<Link to="/" className="custom-link">Donations</Link>
							</ListGroup.Item>
							<ListGroup.Item>
								<Link to="/" className="custom-link">Volunteering</Link>
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col>
						<ListGroup>
							<strong>{t('menu.library')}</strong>
						</ListGroup>
					</Col>
					<Col>
						<strong className="py-2">{t('footer.address-title')}</strong>
						<a href="https://www.google.com/maps/place/Russian+House+Melbourne+Inc./@-37.8003492,144.9826023,15z/data=!4m5!3m4!1s0x0:0xe246adf64228441c!8m2!3d-37.8003492!4d144.9826023" className="custom-link text-decoration-none" target="_blank" rel="noopener noreferrer">
							<p className="mb-0" style={{fontSize: "14px"}}>118 Greeves St,<br />
								3065 Fitzroy</p>
						</a>   
					</Col>
				</Row>
				<hr />
			</Container>
			<Container className="d-flex flex-row justify-content-between text-muted">
				<p className="small cursor-pointer">{t('footer.trademark')}</p>
				<p className="small cursor-pointer">
					Made by <a href="https://github.com/egor-sadanov" className="custom-link" target="_blank" rel="noopener noreferrer">@sadanov</a>
				</p>
			</Container>
		</Container>
	)
}

export default Footer
