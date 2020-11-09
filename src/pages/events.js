/**
 * events.js
 * Created by Egor Sadanov (@sadanov)
 * This component represents events page.
 */
import React, { useState } from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next"

import Img from 'gatsby-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import DayPickerInput from 'react-day-picker/DayPickerInput'

import ArrowDownIcon from "../images/svg/arrow-down.svg"
import CalendarIcon from "../images/svg/calendar.svg"
import 'react-day-picker/lib/style.css'


const Events = () => {
	const {t} = useTranslation('events')
	const [eventTitle, setEventTitle] = useState(t('events.all'))
	const [auditory, setAuditory] = useState(t('auditory.any'))

	return (
		<Container>
			<h1 className="my-5">{t('header')}</h1>
			<Nav className="flex-column flex-md-row">
				<Dropdown as={NavItem} className="mr-4 mb-3">
					<Dropdown.Toggle as={CustomToggle} id="events-type">
						{eventTitle}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1" onClick={() => setEventTitle(t('events.past'))}>{t('events.past')}</Dropdown.Item>
						<Dropdown.Item href="#/action-2" onClick={() => setEventTitle(t('events.current'))}>{t('events.current')}</Dropdown.Item>
						<Dropdown.Item href="#/action-3"onClick={() => setEventTitle(t('events.upcoming'))}>{t('events.upcoming')}</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown as={NavItem} className="mr-4 mb-3">
					<Dropdown.Toggle as={CustomToggle} id="events-type">
						{auditory}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1" onClick={() => setAuditory(t('auditory.any'))}>{t('auditory.any')}</Dropdown.Item>
						<Dropdown.Item href="#/action-2" onClick={() => setAuditory(t('auditory.kids'))}>{t('auditory.kids')}</Dropdown.Item>
						<Dropdown.Item href="#/action-3" onClick={() => setAuditory(t('auditory.youth'))}>{t('auditory.youth')}</Dropdown.Item>
						<Dropdown.Item href="#/action-4" onClick={() => setAuditory(t('auditory.elders'))}>{t('auditory.elders')}</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Nav.Item className="mb-3">
					<DayPickerInput 
						component={ props => 
							<div>
								<label htmlFor="day-picker" className="m-0" style={{position: "relative", top: "-2px"}}><CalendarIcon /></label>
								<input {...props} 
									type="button" 
									id="day-picker" 
									style={{
										textAlign: "start",
										border: "none", 
										backgroundColor: "#fff", 
										width: "8rem"
									}}
								/>
							</div>
						} 
						value={t('date')} 
					/>
				</Nav.Item>
			</Nav>
			<hr className="my-0" />
			{/* <EventCard /> */}
			<Container fluid className="text-center" style={{marginTop: "5rem", marginBottom: "5rem"}}>
				<h2>{t('fail')}</h2>
			</Container>
		</Container>
	)
} 

export default Events

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
		href="/"
		className="custom-drop"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <ArrowDownIcon className="ml-2"/>
  </a>
))

const EventCard = () => {
	const {t} = useTranslation('eventCards')
	return (
		<Row xs={1} md={3}>
			<Col xs={10}>
				{t('title')}
			</Col>
			<Col xs={5}>
			</Col>
			<Col xs={7}>
			</Col>
		</Row>
	)
}

const queryGetEvents = graphql`
query getEvents {
  allEventCardsJson {
    edges {
      node {
        event_id
        img
        title
        auditory
        description
        date
      }
    }
  }
}
`