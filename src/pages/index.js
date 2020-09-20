import React, { useState } from 'react'
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import cards from "../locales/en/cards.json"
import photo1 from '../images/backyard.jpg'
import photo2 from '../images/backyard2.jpg'

const IndexPage = () => (
  <>
		<Carousel />
		<Cards />
  </>
)

export default IndexPage

function Cards() {	
	const {t} = useTranslation('cards');

	// number of cards to show
	const [number, setNumber] = useState(6);

  return (
    <Container>
      <Row xs={1} sm={2} lg={3}>
        {cards.map((crd, index) => {
          if (index < number) {
            return (
              <div className="col px-2" key={crd.id}>
                <div className="card p-3 mb-3" style={{borderRadius: "0"}}>
                  <img src={require("../images/"+t(crd.id + '.img'))} className="card-img-top" alt="IMG" />
                  <div className="card-body">
                    <h5 className="card-title">{t(crd.id + '.title')}</h5>
                    <p className="card-text">{t(crd.id + '.text')}</p>
                    <a href="#" className="btn btn-primary stretched-link">{t(crd.id + '.btn-text')}</a>
                  </div>
                </div>
              </div>
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

function Carousel() {		
	return (
		<div className="container" style={{padding: '2rem'}}>
			<div id="photoCarousel" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active" data-interval="10000">
						<img src={photo1} className="d-block w-100" alt="Figure 1" />
						<div className="carousel-caption d-none d-md-block">
							<p></p>
							<p></p>
						</div>
					</div>
					<div className="carousel-item" data-interval="10000">
						<img src={photo2} className="d-block w-100" alt="Figure 1" />
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
		</div>
	)
}