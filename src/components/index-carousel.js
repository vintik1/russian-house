import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby' 

import Container from 'react-bootstrap/Container'

const Carousel = () => {
	const data = useStaticQuery(query)

	return (
		<Container style={{padding: '2rem'}}>
			<div id="photoCarousel" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active" data-interval="10000">
						<Img fluid={data.back_1.childImageSharp.fluid} className="d-block w-100" alt="Figure 1" />
						<div className="carousel-caption d-none d-md-block">
							<p></p>
							<p></p>
						</div>
					</div>
					<div className="carousel-item" data-interval="10000">
						<Img fluid={data.back_2.childImageSharp.fluid} className="d-block w-100" alt="Figure 1" />
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

export default Carousel

const query = graphql`
	query Q2{
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