import React from 'react'
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import crystal from '../images/crystal.jpg'


const HelpOnEvents = () => {
	const {t} = useTranslation('support')

	return (
		<Container>
			<p className="mt-4 mb-0 text-uppercase"><small>{t('head.support')}</small></p>
			<h3 className="mb-0">{t('event-organization.header')}</h3>
			<Row>
				<Col lg={8}>
					<img src={crystal} className="d-block w-100 my-4" alt="Figure 1" />
					<p>Общество русского дома старается всеми силами сохранить старые, и также пробует 
						вносить новые традиции и культурные ценности нашей страны.<br />
						Проводя активную деятельность посредством создания выставок и совместных встреч мы создаем более достойное восприятие России.</p>
					<p>Стараясь разрушить повседневные скучные стереотипы мы ознакомляем интересующихся о богатом 
						наследии нашего народа, рассказывая о знаменитых людях чей вклад колоссально повлиял на 
						историю нашей и мировой культуры. Создавая поводы для познавания всеобщего культурного развития, 
						группа молодых людей из / активно привлекает всех желающих жителей Мельбурна к посещению нашего дома.</p>
					<p>С каждой человеческой помощью либо частных финансовых вложений, русская община в Мельбурне 
						имеет возможность создавать ценные моменты ностальгии, напоминающие нам о духе родины. Культура нашего народа обильна непонаслышке.<br />
						Вместе с нашими партнерами в течение года мы участвуем в главных традиционных праздниках как Новый год, фестиваль Масленица и 9 мая. 
						На сценах которых местный танцевальные и музыкальные коллективы выступают создавая незабываемую атмосферу русского праздника.</p>
				</Col>
			</Row>
		</Container>
	)
} 

export default HelpOnEvents