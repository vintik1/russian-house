import React, { useState } from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby' 
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import cards from "../locales/en/cards.json"

const Cards = () => {
	const data = useStaticQuery(graphql`
		query Q1{
			japcar: file(relativePath: { eq: "japcar.jpg" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	const {t} = useTranslation('cards');

	// number of cards to show
	const [number, setNumber] = useState(6);

	return (
    <Container>
      <Row xs={1} sm={2} lg={3}>
        {cards.map((crd, index) => {
          if (index < number) {
            return (
              <Col className="px-2" key={crd.id}>
                <Card className="p-3 mb-3" style={{borderRadius: "0"}}>
									<Img fluid={data.japcar.childImageSharp.fluid} className="card-img-top" />
                  <Card.Body>
                    <Card.Title><h5>{t(crd.id + '.title')}</h5></Card.Title>
                    <Card.Text>{t(crd.id + '.text')}</Card.Text>
										<Link to="/" className="btn btn-primary stretched-link">
											{t(crd.id + '.btn-text')}
										</Link>
                  </Card.Body>
                </Card>
              </Col>
            )
          }
        })}
      </Row>
      <Container fluid className="text-center">
        <button type="button" className="btn btn-outline-dark mb-4" onClick={() => setNumber(number + 6)}>Load more</button>
      </Container>
    </Container>
	)
}

export default Cards