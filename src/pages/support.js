import React from 'react'
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


const Support = () => {
	const {t} = useTranslation('support')

	const cards = [
		{
			title: "volunteering",
			img: "kitchen.jpg",
			path: "/volunteer-club"
		},
		{
			title: "member",
			img: "dining.jpg",
			path: "/become-member"
		},
		{
			title: "event-organization",
			img: "crystal.jpg",
			path: "/help-on-events"
		}
	]

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
				{cards.map((card, index) =>
					<Col key={index}>
						<Card className="card-hover mb-4 h-100">
							<Card.Img src={require("../images/"+card.img)} variant="top" alt="IMG" />
							<Card.Body className="pl-0">
								<Card.Title>{t('titles.' + card.title)}</Card.Title>
								<Link to={card.path} className="card-link stretched-link">
									<p className="d-none d-md-block">{t('read-more')}</p>
								</Link>
							</Card.Body>
						</Card>
					</Col>
        )}
			</Row>
		</Container>
	)
} 

export default Support