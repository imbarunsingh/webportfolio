import React from 'react';

import './index.scss';
import Img1 from '../../assets/img/inmobi.png';
import Img2 from '../../assets/img/redbus.png';
import Img3 from '../../assets/img/TCS-Logo.png';

const Career = () => (
	<section className="career-sctn animated fadeIn">
		<div className="quote">
			<blockquote>"It’s not what you achieve, it’s what you overcome. That’s what defines your career."</blockquote>
			<p>Carlton Fisk</p>
		</div>
		<hr />
		<div className="container">
			<div className="row">
				{/* <div className="col-lg-12 text-center">
					<h2 className="section-heading text-uppercase">About</h2>
					<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
				</div> */}
			</div>
			<div className="row">
				<div className="col-lg-12">
					<ul className="timeline">
						<li>
							<div className="timeline-image">
								<img className="rounded-circle img-fluid" src={Img1} alt="inmobi" />
							</div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h4>April 2018</h4>
									<h4 className="subheading">Inmobi</h4>
								</div>
								<div className="timeline-body">
									<p className="text-muted">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam
										reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
										laudantium consectetur!
									</p>
								</div>
							</div>
						</li>
						<li className="timeline-inverted">
							<div className="timeline-image">
								<img className="rounded-circle img-fluid" src={Img2} alt="redbus" />
							</div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h4>Aug 2016 - April 2018</h4>
									<h4 className="subheading">Redbus</h4>
								</div>
								<div className="timeline-body">
									<p className="text-muted">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam
										reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
										laudantium consectetur!
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className="timeline-image">
								<img className="rounded-circle img-fluid" src={Img3} alt="tcs" />
							</div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h4>March, 2012 - August, 2016</h4>
									<h4 className="subheading">Tata Consultancy Services</h4>
								</div>
								<div className="timeline-body">
									<p className="text-muted">
										I joined TCS in early 2012 as an assistant system enginner. After the completion of 3 months of
										training, I was posted in Bangalore. My first tryst with software development took place in TCS. My
										work profile was UI developer, where I had opportunity to work in various projects. From developing
										hybrid mobile applications, to working with drupal cms and salesforce, I learnt a lot there.
									</p>
								</div>
							</div>
						</li>
						<li className="timeline-inverted">
							<div className="timeline-image">
								<i className="fas fa-user-graduate" />
							</div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h4>2011 Graduated</h4>
									<h4 className="subheading">My humble Journey begins</h4>
								</div>
								<div className="timeline-body">
									<p className="text-muted">
										Oh yes, I am an engineer. Year 2011 will always a milestone in my life. Although, my subject was
										Electronics and Communication, my inclination was towards software development. I got placed in TCS
										and then the journey started.
									</p>
								</div>
							</div>
						</li>
						<li className="timeline-inverted">
							<div className="timeline-image">
								<i className="fas fa-fighter-jet" />
								<h4>Starts</h4>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
);

export default Career;
