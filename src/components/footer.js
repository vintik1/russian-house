import React from 'react'
import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'


function Footer() {
	const {t} = useTranslation("common");

	return (
		<Container fluid as="footer" className="bg-lightgrey px-0">
			<Container>
				<Form style={{padding: "2rem"}}>
					<Form.Group controlId="subscribeForm" className="d-flex flex-column align-items-center mb-0">
						<Form.Label className="text-secondary text-uppercase">{t('footer.subscribe')}</Form.Label>
						<Form.Control type="email" placeholder={t('footer.placeholder')} style={{width: "20rem", boxShadow: "none"}} />
					</Form.Group>
				</Form>
				<hr className="mt-0"/>
			</Container>
			<Container>
				<Row xs={2} md={5}>
					<Col>
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
					<Col>
						<ListGroup>
							<strong>{t('menu.about')}</strong>
							<ListGroup.Item>
								<Link to="/" className="custom-link">History</Link>
							</ListGroup.Item>
							<ListGroup.Item>
								<Link to="/" className="custom-link">Mission</Link>
							</ListGroup.Item>
							<ListGroup.Item>
								<Link to="/" className="custom-link">Buffet</Link>
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col>
						<ul className="list-group">
							<strong>{t('menu.library')}</strong>
						</ul>
					</Col>
					<Col>
						<ul className="list-group">
							<strong>{t('menu.hire')}</strong>
						</ul>
					</Col>
					<Col>
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
				</Row>
				<hr />
			</Container>
			{/* <Col>
				<strong className="py-2">{t('footer.address-title')}</strong>
				<a href="https://www.google.com/maps/place/Russian+House+Melbourne+Inc./@-37.8003492,144.9826023,15z/data=!4m5!3m4!1s0x0:0xe246adf64228441c!8m2!3d-37.8003492!4d144.9826023" className="custom-link text-decoration-none" target="_blank" rel="noopener noreferrer">
					<p className="mb-0" style={{fontSize: "14px"}}>118 Greeves St,<br />
						3065 Fitzroy</p>
				</a>   
			</Col> */}
			<Container className="d-flex flex-row justify-content-between text-muted">
				<p className="small cursor-pointer">{t('footer.trademark')}</p>
				<p className="small cursor-pointer">
					Made by <a href="https://github.com/egor-sadanov" className="custom-link" target="_blank" rel="noopener noreferrer">Gosha Sadanov</a>
				</p>
			</Container>
		</Container>
	)
}

export default Footer
