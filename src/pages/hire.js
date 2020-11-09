/**
 * hire.js
 * Created by Egor Sadanov (@sadanov)
 * This component represents hire page.
 */
import React, { useState } from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby' 
import { useTranslation } from "gatsby-plugin-react-i18next"

import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DayPicker from 'react-day-picker'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import ChevronDownIcon from "../images/svg/chevron-down.svg"
import CalendarIcon from "../images/svg/calendar.svg"


const Hire = () => {
	const {t} = useTranslation('hire')
	const data = useStaticQuery(query)
	const past = { before: new Date(2020, 11, 1) }

	const [submitted, setSubmit] = useState(false)
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		numOfGuests: "",
		eventType: "",
		selectedDay: undefined
	})
	
	const changeHandler = e => {
		setFormData({...formData, [e.target.name]: e.target.value})
	}

	const handleDayChange = (selectedDay) => {
		setFormData({...formData, selectedDay})
  }
	
	function handleSubmit(e) {
		e.preventDefault()
		setSubmit(true)
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encodeURIComponent(JSON.stringify({ "form-name": "hirecontact", ...formData }))
		})
			.catch(error => console.log(error))

		console.log(formData)
	}

	return (
		<Container className="my-5">
			<h1 className="my-5">{t('header')}</h1>
			<div className="mb-4">
				<Row>
					<Col lg={8}>
						<p>Данное здание построено в бум ренессансного стиля, оно входит в список наследия архитектурной 
							достопримечательности, его местонахождение находиться в самом творческом районе Фицрой, 
							между Smith and Johnson street, вблизи от нескольких остановок общественного транспорта.</p>
						<p>Помимо двух залов, при договоренности можно организовать сервис услуги кейтеринга для мероприятий различных масштабов.
							А также арендовать дополнительное музыкального оборудование.</p>
						<p>Оформление заявки можно сделать внизу.</p>
					</Col>
				</Row>
			</div>
			<Accordion>
				<Container fluid className="border" style={{marginBottom: "4rem"}}>
					<Row xs={1} lg={2}>
						<Col as={Carousel} indicators={false} className="p-0">
							<Carousel.Item>
								<Img fluid={data.file.childImageSharp.fluid} className="h-100" alt="Figure 1"/>
							</Carousel.Item>
							<Carousel.Item>
								<Img fluid={data.file.childImageSharp.fluid} className="h-100" alt="Figure 1"/>
							</Carousel.Item>
						</Col>
						<Col className="d-flex flex-column text-center justify-content-center p-5">
							<h4 className="text-uppercase">{t('crystal.head')}</h4>
							<p>Главное помещение русского дома - “Хрустальный зал” находится на первом этаже, 
								оно вмещает в себя до максимум 100 человек и имеет свой отдельный вход с улицы.</p>
							<Accordion.Toggle as={Button} variant="link" className="chevron-down" eventKey="0">
								<ChevronDownIcon />
							</Accordion.Toggle>
						</Col>
					</Row>
					<Accordion.Collapse eventKey="0">
						<Row xs={1} lg={2}>
							<Col className="d-flex flex-column text-center justify-content-center py-4 order-2">
								<p className="mb-0">{t('calendar')}</p>
								<DayPicker fromMonth={new Date()} disabledDays={past} />
							</Col>
							<Col className="d-flex flex-column justify-content-center order-1">
								<ul>
									<li>Семинары (Workshop)</li>
									<li>Совместные групповые занятия (Group sessions)</li>
									<li>Музыкальная апаратура. Amplifier, Speakers, Microfon </li>
									<li>Кухня (Kitchen) ($) extra fees apply</li>
									<li>Балетный станок (Ballet barre)</li>
									<li>Рояль (Royal piano) ($) extra fees apply</li>
								</ul>
							</Col>
						</Row>
					</Accordion.Collapse>
				</Container>
				<Container fluid className="border" style={{marginBottom: "4rem"}}>
					<Row xs={1} lg={2}>
						<Col as={Carousel} indicators={false} className="p-0 order-lg-2">
							<Carousel.Item>
								<Img fluid={data.file.childImageSharp.fluid} className="h-100" alt="Figure 1"/>
							</Carousel.Item>
							<Carousel.Item>
								<Img fluid={data.file.childImageSharp.fluid} className="h-100" alt="Figure 1"/>
							</Carousel.Item>
						</Col>
						<Col className="d-flex flex-column text-center justify-content-center order-lg-1 p-5">
							<h4 className="text-uppercase">{t('amber.head')}</h4>
							<p>На втором этаже расположена - “Янтарная комната” помещение сдается под 
								проведение менее крупных мероприятий, его вместительность максимум 80 человек</p>
							<Accordion.Toggle as={Button} variant="link" className="chevron-down" eventKey="1">
								<ChevronDownIcon />
							</Accordion.Toggle>
						</Col>
					</Row>
					<Accordion.Collapse eventKey="1">
						<Row xs={1} lg={2}>
							<Col className="d-flex flex-column text-center justify-content-center py-2 order-2 order-lg-1">
								<p className="mb-0">{t('calendar')}</p>
								<DayPicker fromMonth={new Date()} disabledDays={past} />
							</Col>
							<Col className="d-flex flex-column justify-content-center order-1 order-lg-2">
								<ul>
									<li>Семинары (Workshop)</li>
									<li>Совместные групповые занятия (Group sessions)</li>
									<li>Зона отдыха (Chill zone)</li>
									<li>Мини буфет (Mini buffet)</li>
									<li>Бильярд (Pool)</li>
								</ul>
							</Col>
						</Row>
					</Accordion.Collapse>
				</Container>
			</Accordion>
			<Container style={{maxWidth: "26rem"}}>
				<Container className="d-flex flex-column text-center">
					<h3>{t('form.contact-us')}</h3>
					<p>{t('form.p1')}
						{/* For all Private Function Enquiries please contact the<br />
						Russian House	Associates team on */}
					</p>
					<p>+61 (0)3 2826 1547<br />
						eventmaker@russianhouse.com.au
					</p>
					<p>{t('form.p2')}</p>
				</Container>
				<Form onSubmit={(e) => handleSubmit(e)} netlify-honeypot="bot-field">
					<input type="hidden" name="form-name" value="hirecontact" />
					<Form.Group controlId="inputName">
						<Form.Label>{t('form.name')}</Form.Label>
						<Form.Control type="text" name="name" value={formData.name} onChange={changeHandler} required></Form.Control>
					</Form.Group>
					<Form.Group controlId="inputMail">
						<Form.Label>{t('form.email')}</Form.Label>
						<Form.Control type="email" name="email" value={formData.email} onChange={changeHandler} required></Form.Control>
					</Form.Group>
					<Form.Group controlId="inputPhone">
						<Form.Label>{t('form.phone')}</Form.Label>
						<Form.Control type="text" name="phone" value={formData.phone} onChange={changeHandler} required></Form.Control>
					</Form.Group>
					{/* <Form.Group controlId="input4">
						<Form.Label>{t('form.guests')}</Form.Label>
						<Form.Control type="number" name="numOfGuests" value={formData.numOfGuests} onChange={changeHandler}></Form.Control>
					</Form.Group> */}
					<Form.Group controlId="inputGuests">
						<Form.Label>{t('form.guests')}</Form.Label>
						<Form.Control as="select" name="numOfGuests" value={formData.numOfGuests} onChange={changeHandler}>
							<option>1–10</option>
							<option>10–25</option>
							<option>25–50</option>
							<option>50–100</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId="inputEventType">
						<Form.Label>{t('form.type')}</Form.Label>
						<Form.Control type="text" name="eventType" value={formData.eventType} onChange={changeHandler}></Form.Control>
					</Form.Group>
					<DayPickerInput 
						inputProps={{required: true, id: "day"}}
						value={formData.selectedDay} 
						onDayChange={handleDayChange} 
						placeholder={t('form.selectDay')}
						component={ props => 
							<>
								<label htmlFor="day" className="m-0" style={{position: "relative", top: "-2px"}}><CalendarIcon /></label>
								<input {...props} className="day-selector" name="day" id="day" />
							</>
						} 
					/>
					{ submitted 
					? <p className="text-center mt-3 mb-0">Thank you. We have saved your information and promice to get back as soon as possible.</p> 
					:	<div className="text-center mt-3">
							<Button variant="outline-dark" type="submit" className="w-50">
								{t('form.submit')}
							</Button>
						</div>
					}
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