/**
 * event-organization.js
 * Created by Egor Sadanov (@sadanov)
 * This component represents event organization page.
 */
import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby' 
import { useTranslation } from "gatsby-plugin-react-i18next"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const EventOrganization = () => {
	const {t} = useTranslation('support')
	const data = useStaticQuery(query)

	return (
		<Container>
			<p className="mt-4 mb-0 text-uppercase"><small>{t('head.support')}</small></p>
			<h3 className="mb-0">{t('titles.event-organization')}</h3>
			<Row>
				<Col lg={8}>
					<Img fluid={data.file.childImageSharp.fluid} className="my-4" alt="Figure 1"/>
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

export default EventOrganization

const query = graphql`
  query eventOrganizationImg {
    file(relativePath: { eq: "event-organization-cp.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
			}
		}
  }
`