import { useTranslation } from 'react-i18next';
import React from 'react'

function Footer() {
	const {t} = useTranslation("common");

	return (
		<footer className="container-fluid bg-lightgrey px-0">
			<div className="container" style={{padding: "2rem"}}>
			<form>
				<div className="form-group d-flex flex-column align-items-center mb-0">
					<label className="text-center text-secondary text-uppercase" htmlFor="subscribe">{t('footer.subscribe')}</label>
					<input type="email" className="form-control shadow-none" style={{width: "20rem"}} id="subscribe" placeholder={t('footer.placeholder')} />
				</div>
			</form>
			</div>

			<div className="container px-sm-0">
			<div className="container-lg border-bottom px-lg-0"></div>
			<div className="row row-cols-2 row-cols-md-3 row-cols-xlg-6 py-1">
				<div className="col">
					<ul className="list-group">
					<strong>{t('menu.events')}</strong>
					<li className="list-group-item">
						What's on
					</li>
					<li className="list-group-item">
						Past Events
					</li>
					</ul>
				</div>
				<div className="col">
					<ul className="list-group">
					<strong>{t('menu.about')}</strong>
					<li className="list-group-item">
						Mission
					</li>
					<li className="list-group-item">
						History
					</li>
					</ul>
				</div>
				<div className="col">
					<ul className="list-group">
					<strong>{t('menu.library')}</strong>
					</ul>
				</div>
				<div className="col">
					<ul className="list-group">
					<strong>{t('menu.hire')}</strong>
					</ul>
				</div>
				<div className="col">
					<ul className="list-group">
					<strong>{t('menu.support-us')}</strong>
					<li className="list-group-item">
						Donations
					</li>
					<li className="list-group-item">
						Volunteering
					</li>
					</ul>
				</div>
				{/* <div className="col">
					<ul className="list-group">
					<li className="list-group-item">
						<Link to="/events" className="custom-menu-link">{t('menu.events')}</Link>
					</li>
					<li className="list-group-item">
						<Link to="/library" className="custom-menu-link">{t('menu.library')}</Link>
					</li>
					<li className="list-group-item">
						<Link to="/hire" className="custom-menu-link">{t('menu.hire')}</Link>
					</li>
					<li className="list-group-item">
						<Link to="/support" className="custom-menu-link">{t('menu.support-us')}</Link>
					</li>
					</ul>
				</div> */}
				<div className="col">
					{/* <div>
					<a href="https://www.facebook.com/russianhousemelbourne/">
						<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
							<use href={facebooksvg} x="10" fill="white"/>
						</svg>
					</a>
					</div> */}
					<address className="mb-0">
					<strong className="py-2">{t('footer.address-title')}</strong>
					<a href="https://www.google.com/maps/place/Russian+House+Melbourne+Inc./@-37.8003492,144.9826023,15z/data=!4m5!3m4!1s0x0:0xe246adf64228441c!8m2!3d-37.8003492!4d144.9826023" className="custom-link text-decoration-none" target="_blank" rel="noopener noreferrer">
						<p className="mb-0" style={{fontSize: "14px"}}>118 Greeves St,<br />
							3065 Fitzroy</p>
					</a>   
					</address>
				</div>
			</div>
			<div className="container-lg border-bottom px-lg-0"></div>
			</div>

			<div className="container d-flex flex-row justify-content-between text-muted py-3 px-sm-0">
			<p className="small m-0 cursor-pointer">{t('footer.trademark')}</p>
			<p className="small m-0 cursor-pointer">
				Made by <a href="https://github.com/egor-sadanov" className="custom-link" target="_blank" rel="noopener noreferrer">Gosha Sadanov</a>
			</p>
			</div>
		</footer>
	)
}

export default Footer
