import { Link } from 'react-router-dom'
const paddingBottom = {
	paddingBottom: "15px"
}
function Rebecca() {

	return (
		<>
			<section className="page-title style1">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="breadcrumbs">
								<h1 className="page-title-heading">About Us</h1>
								<ul className="trail-items">
									<li>You are here: </li>
									<li className="trail-item">
										<Link to="/"> Home</Link>
										<span>></span>
									</li>
									<li className="trail-item">
										<Link to="/company/ourteam/">
											<span>Our Team</span>
											<span>></span>
										</Link>
									</li>
									<li className="trail-end">
										Rebecca Watson
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="content-area">
							<div className="post-wrap">
								<article className="about-post">
									<div className="entry-content">
										<div className="content-text">
											<div className="box-item"  >

											</div>
											<div className="height18"></div>
											<div className="box-item float">
												<div className="img-box">

													<img src="/assets/images/team/rebecca_big.png" alt="" />
												</div>
												<div className="text-box left">
													<div className="text-box" >
														<h2 style={{ color: "#2691e4" }}> Rebecca Watson</h2>
														<p>
															Administrator
														</p>
													</div>
													<h2 style={{ fontSize: "1.1rem" }}></h2>
													<p style={paddingBottom}>Rebecca Watson holds a business degree in Human Resources from Ohio University. For many years, she spent her time managing childcare programs. Eventually, she quit her job and focused solely on being a mother to her three children, Matt, Jack and Ella. She devoted much of her time to taking care of Matt, who has special needs by taking him to therapies and activities.  Now that he’s older and much more independent, she was able to return to work.

													</p>
													<p style={paddingBottom}>
														Rebecca has been employed by TF Logistics LLC since November 2020. Being her first involvement in the freight industry, Rebecca had no idea what to expect. In her current role with TF Logistics LLC, Rebecca communicates with carriers and drivers to make sure all necessary paperwork is accurate and returned to her in a timely manner. She ensures that all of the paperwork is entered into our system so that both customers and carriers get paid quickly and efficiently.

													</p>
													<p style={paddingBottom}>Since working in Freight, Rebecca has felt a very rewarding and fun experienced. She enjoys learning the ins and outs of a new career and meeting and interacting with people from all over the country.

													</p>
													<p style={paddingBottom}>Her favorite thing about working for TF Logistics LLC is the convenience of being able to work from home and having a flexible schedule. Being a mother and a wife is most important to Rebecca. This job has allowed her to spend more time at home with her husband, Jason, and her kids. This job enables her to prioritize her family while also contributing financially.

													</p>
													<p style={paddingBottom}>In her free time, Rebecca enjoys volunteering at New Day equine therapy farm where she spends her time taking care of animals and working with children in various programs. She also enjoys water aerobics classes with her friends at the YMCA.  She is currently learning how to ride horses and golf. On the weekends, you can find Rebecca working on DIY projects with her husband.

													</p>
													<p style={paddingBottom}>Rebecca has truly enjoyed working for TF Logistics LLC and is looking forward to
														the challenges, experiences, and new opportunities of a growing business.
													</p>
													<ul style={{ paddingLeft: "20px" }}>

													</ul>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Rebecca