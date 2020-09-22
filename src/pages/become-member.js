import React from 'react'
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import dining from '../images/dining.jpg'

const BecomeMember = () => {
	const {t} = useTranslation('support')

	return (
		<Container>
			<p className="mt-4 mb-0 text-uppercase"><small>{t('head.support')}</small></p>
			<h3 className="mb-0">{t('titles.member')}</h3>
			<Row>
				<Col lg={8}>
					<img src={dining} className="d-block w-100 my-4" alt="Figure 1" />
					<p>Более 50 лет Русский Дом Мельбурна является центром русского языка и культуры в штате Виктория.</p>
					<p>Каждый год на общем годовом собрании избирается комитет, который следит, чтобы здание Русского Дома 
						поддерживалось в достойном состоянии, а также определяет деятельность развитие языка, культуры и традиций 
						при помощи совместных волонтерских и благотворительных мероприятий проходящих в Русском Доме обозначающим как культурный центр.</p>
					<p>Русский Дом — это ценность, сокровище русской общины, которую нужно хранить и оберегать. Для одобрения о вступлении в члены 
						Русского Дома минимум двое действующих поручителей должны поддержать кандидата, далее комитет принимает решение о принятии или отказе заявления.</p>
					<p>Чтобы стать членом Русского Дома и принять участие в его жизни нужно заполнить анкету и отправить на адрес: <br />
						118 Greeves St, Fitzroy VIC 3065, Australia</p>
					<p>Заявление о вступлении в члены Русского Дома можно скачать <a href="/support">здесь</a></p>
					<p>Новый член Русского Дома оплачивает взносы за год, отсчет начиная со дня оплаты.</p>
					<p>Работающих на полную ставку: $30.00</p>
					<p>Для студентов: $15.00</p>
					<p className="mb-4">Оплату можно отправить чеком на адрес Русского Дома, банковским переводом или переводом на счет PayPal paypal@russianhousemelbourne.org.au</p>
				</Col>
			</Row>
		</Container>
	)
} 

export default BecomeMember