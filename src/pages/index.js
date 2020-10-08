/**
 * index.js
 * Created by Egor Sadanov (@sadanov)
 * This component represents home page.
 */
import React from 'react'

import Cards from "../components/index-cards"
import Carousel from "../components/index-carousel"


const IndexPage = () => {
	return (
		<>
			<Carousel />
			<Cards />
		</>
	)
}

export default IndexPage