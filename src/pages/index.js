import React, { useState } from 'react'
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import Img from 'gatsby-image'
import { graphql } from 'gatsby' 

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import cards from "../locales/en/cards.json"
// import photo1 from '../images/backyard.jpg'
// import photo2 from '../images/backyard2.jpg'

const IndexPage = props => {
	const photos = {
		photo_1: props.data.back_1.childImageSharp.fluid,
		photo_2: props.data.back_2.childImageSharp.fluid
	}

	return (
		<>
			<Carousel photos={photos} />
			<Cards photo_1={props.data.japcar.childImageSharp.fluid} />
		</>
	)
}

export default IndexPage

export const pageQuery = graphql`
  query {
    japcar: file(relativePath: { eq: "japcar.jpg" }) {
      childImageSharp {
        fixed(width: 125) {
          ...GatsbyImageSharpFixed
        }
      }
		}
		back_1: file(relativePath: { eq: "backyard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
		}
		back_2: file(relativePath: { eq: "backyard2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

function Cards(photo_1) {	
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
                  <Img fixed={photo_1} className="card-img-top" alt="IMG" />
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
      <div className="container-fluid text-center">
        <button type="button" className="btn btn-outline-dark mb-4" onClick={() => setNumber(number + 6)}>Load more</button>
      </div>
    </Container>
  )
}

function Carousel(photos) {		
	return (
		<Container style={{padding: '2rem'}}>
			<div id="photoCarousel" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active" data-interval="10000">
						<Img fluid={photos.photo_1} className="d-block w-100" alt="Figure 1" />
						<div className="carousel-caption d-none d-md-block">
							<p></p>
							<p></p>
						</div>
					</div>
					<div className="carousel-item" data-interval="10000">
						<Img fluid={photos.photo_2} className="d-block w-100" alt="Figure 1" />
						<div className="carousel-caption d-none d-md-block">
							<p></p>
							<p></p>
						</div>
					</div>
				</div>
				<a className="carousel-control-prev" href="#photoCarousel" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Prevoius</span>
				</a>
				<a className="carousel-control-next" href="#photoCarousel" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</Container>
	)
}