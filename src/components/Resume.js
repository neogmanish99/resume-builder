    import React from 'react'
    import './Resume.min.css';

    const Resume = () => {
            
    return (
        <>
            <div className="main-resume">
		<div className="left">
			<div className="intro section" id="about">
				<div className="container">
					<div className="units-row units-split wrap">
						<div className="unit-20">
							<img src="../img/648256.png" alt="Avatar"/>
						</div>
						<div className="unit-80">
							<h1>First Name</h1>
							<h1>Last Name</h1>
							<h3>Phone Number</h3>
							<h3>Address</h3>
						</div>
					</div>
				</div>
			</div>
		
			
			<div className="work section second" id="experiences">
				<div className="container">
					<h1>Education<br/>Section</h1>
					<ul className="work-list">
						<li>Name of course</li>
						<li>Course Completion Year</li>
						<li>College Name</li>
						<li>Scored Percentage</li>
					</ul>
				</div>
			</div>
		
			
		</div>
		<div className="right">
			<div className="award section second" id="achievements">
				<div className="container">
					<h1>Skills Section</h1>
					<ul className="award-list list-flat">
						<li>Skills You Have</li>
					</ul>
				</div>
			</div>
				
	<div className="skills section second" id="skills">
		<div className="container">
			<h1>Mini Project<br/></h1>
			<ul className="skill-list list-flat">
				<h3>Project Name</h3>
				<li>Tech Stacks Used</li>
				<textarea name="project-desc" placeholder="Project description" className="text-area" cols="50" rows="10"></textarea>
			</ul>
		</div>
	</div>
    <div className="container">
					<h1>Social Media Links</h1>
					<ul className="award-list list-flat">
						<li>github</li>
						<li>twitter</li>
					</ul>
				</div>
	</div>

	</div>

        </>
    )
    }

    export default Resume