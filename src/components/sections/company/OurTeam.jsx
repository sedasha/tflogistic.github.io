import React from 'react'
import { Link } from 'react-router-dom'
// import rebecca from '../../../../public/assets/images/team/rebecca'
// import trent from '../../../../public/assets/images/team/trent'
// import natalia from '../../../../public/assets/images/team/natalia'
// import Courtney from '../../../../public/assets/images/team/Courtney'

function OurTeam() {
	const team = [
		{
			name: "Trent Fugate",
			image: "trent",
			position: "Founder & CEO",
			link: "/company/ourteam/trentfugate/"
		},

		{
			name: "Natalia Fugate",
			image: "natalia",
			position: "Freight Development",
			link: "/company/ourteam/nataliafugate/"
		},
		{
			name: "Courtney Fuller",
			image: "courtney",
			position: "Logistics Specialist",
			link: "/company/ourteam/courtneyfuller/"
		},
		{
			name: "Robbie Fletcher",
			image: "robbie",
			position: "Logistics Specialist",
			link: "/company/ourteam/robbiefletcher/"

		},
		{
			name: "Rebecca Watson",
			image: "rebecca",
			position: "Administrator",
			link: "/company/ourteam/rebeccaWatson/"
		}
	]


	return (
		<>
			<section className="page-title style1">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="breadcrumbs">
								<h1 className="page-title-heading">About Us</h1>
								<ul className="trail-items">
									<li>You are here:</li>
									<li className="trail-item">
										<Link to="/"><span>Home</span>
										</Link>
										<span>></span>
									</li>
									<li className="trail-end">
										Our Team
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="flat-row flat-team">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="flat-row-title center" style={{ paddingTop: 100 }}>
								{/* //// padding top tal ete carouselic heto chdzvi */}
								<h2>Company profile - Our team</h2>
								<div className="desc-title">
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="owl-carousel-2" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
								{team.map((el, ind) => (

									<div className="team-item" key={ind}>
										<div className="team-image">
											<Link to={`${el.link}`} >
												<img src={`/assets/images/team/${el.image}.jpg`} alt="" />
											</Link>
										</div>
										<div className="team-info">
											<div className="option">
												{el.position}
											</div>
											<h4 className="name">{el.name}</h4>
										</div>
									</div>
								)
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="flat-row flat-introduce parallax parallax4">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="introduce center">
								<div className="height35"></div>
								<h1> We are offering solutions that are both
									<span> reliable and efficient.</span></h1>
							</div>
						</div>
					</div>
				</div>
				<div className="overlay"></div>
			</section>
		</>
	)
}

export default OurTeam