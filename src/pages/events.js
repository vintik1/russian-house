import React, { useState } from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next"

import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/Nav'

import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

import DropdownButton from 'react-bootstrap/DropdownButton'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

import Container from 'react-bootstrap/Container'
import ArrowDownIcon from "../svg/arrow-down.svg"
import CalendarIcon from "../svg/calendar.svg"


const Events = () => {
	const {t} = useTranslation('events')
	const [eventTitle, setEventTitle] = useState("All Events")
	const [auditory, setAuditory] = useState("Auditory")

	return (
		<Container>
			<h1 className="my-5">{t('events')}</h1>
			<Nav className="mb-3">
				<Dropdown as={NavItem} className="mr-4">
					<Dropdown.Toggle as={CustomToggle} id="events-type">
						{eventTitle}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1" onClick={() => setEventTitle("Past Events")}>Past Events</Dropdown.Item>
						<Dropdown.Item href="#/action-2" onClick={() => setEventTitle("Current Events")}>Current Events</Dropdown.Item>
						<Dropdown.Item href="#/action-3"onClick={() => setEventTitle("Upcoming")}>Upcoming</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown as={NavItem} className="mr-4">
					<Dropdown.Toggle as={CustomToggle} id="events-type">
						{auditory}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1" onClick={() => setAuditory("Any Auditory")}>Any Auditory</Dropdown.Item>
						<Dropdown.Item href="#/action-2" onClick={() => setAuditory("Kids")}>Kids</Dropdown.Item>
						<Dropdown.Item href="#/action-3" onClick={() => setAuditory("Youth")}>Youth</Dropdown.Item>
						<Dropdown.Item href="#/action-4" onClick={() => setAuditory("Elders")}>Elders</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Nav.Item>
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
						value="Pick Date" 
						style={{}} 
					/>
				</Nav.Item>
			</Nav>
			<hr />
			<div>

			</div>
		</Container>
	)
} 

export default Events

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
		href=""
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