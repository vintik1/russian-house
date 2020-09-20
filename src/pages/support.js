import React from 'react'
import { Link, useTranslation } from "gatsby-plugin-react-i18next"


import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import kitchen from '../images/kitchen.jpg'
import dining from '../images/dining.jpg'
import crystal from '../images/crystal.jpg'


const Support = () => {
	const {t} = useTranslation('support')

	return (
		<Container>
			<h1 className="my-5">
				{t('head.support')}<br />
				{t('head.house')}
			</h1>
			<Row className="align-items-center mb-5">
				<Col md={8}>
					<p>Русский дом самое любимое место встречи русскоязычных жителей Мельбурна, 
						культурно связывающие нас историей прошлых и будущих времен.</p>
					<p>Продолжая традиции, заложенные основателем Мокрым в 1963, 
						в соучастии с едиными организациями мы поддерживаем активную жизнь общины в различных ее направлениях.</p>
					<p>Любая помощь в участии или финансовой поддержку жизни дома и его проходящих мероприятиях была бы высоко признательна.
						Благодаря нашим общим друзьям и партнерами мы можем реализовать общие проекты и человеческую помощь нуждающимся.</p>
					<p>Спасибо вам!</p>
				</Col>
				<Col md={4} className="d-flex flex-column align-items-center text-center">
					<Button type="button" variant="outline-dark" className="mb-4" style={{width: "15rem", height: "3rem"}}>
						{t('head.donate-btn')}
					</Button>
					<p>Все перечисленные средства поступают на счет фонда Русского Дома,
						с результатами работы которого можно ознакомиться по 
						<Link to="/support" className="custom-link"> ссылке</Link>
					</p>
				</Col>
			</Row>
			<hr />
			<h3 className="roslyn-font">Как помочь Дому?</h3>
			<Row xs={1} md={2} lg={3} className="align-items-middle mt-4">
				<Col>
					<Card className="card-hover mb-4 h-100">
						<Card.Img src={kitchen} variant="top" alt="IMG" />
						<Card.Body className="pl-0">
							<Card.Title>{t('volunteering.header')}</Card.Title>
							<Link to="/volunteer-club" className="card-link stretched-link">
								<p className="d-none d-md-block">{t('read-more')}</p>
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="card-hover mb-4 h-100">
						<Card.Img src={dining} variant="top" alt="IMG" />
						<Card.Body className="pl-0">
							<Card.Title>{t('member.header')}</Card.Title>
							<Link to="/become-member" className="card-link stretched-link">
								<p className="d-none d-md-block">{t('read-more')}</p>
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="card-hover mb-4 h-100">
						<Card.Img src={crystal} variant="top" alt="IMG" />
						<Card.Body className="pl-0">
							<Card.Title>{t('event-organization.header')}</Card.Title>
							<Link to="/help-on-events" className="card-link stretched-link">
								<p className="d-none d-md-block">{t('read-more')}</p>
							</Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
} 

export default Support