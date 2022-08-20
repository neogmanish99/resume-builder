import React, { useEffect, useState, useRef } from "react";
import "./Resume.min.css";
import { useSelector } from "react-redux";

const Resume = () => {
  const { fields } = useSelector((state) => state.inputReducers);

  //   component state

  const input = fields[0];
  return (
    <div className="main-resume">
      <div className="left">
        <div className="intro section" id="about">
          <div className="container">
            <div className="units-row units-split wrap">
              <div className="unit-20">
                <img src="../img/648256.png" alt="Avatar" />
              </div>
              <div className="unit-80">
                <h1>First Name: {input.firstName}</h1>
                <h1>Last Name: {input.lastName}</h1>
                <h3>Phone Number: {input.phoneNumber}</h3>
                <h3>Address: {input.address}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="work section second" id="experiences">
          <div className="container">
            <h1>
              Education
              <br />
              Section
            </h1>
            <ul className="work-list">
              <li>Name of course: {input.course}</li>
              <li>Course Completion Year: {input.completionYear}</li>
              <li>College Name: {input.schoolName}</li>
              <li>Scored Percentage: {input.percentage}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="award section second" id="achievements">
          <div className="container">
            <h1>Skills Section</h1>
            <ul className="award-list list-flat">
              <li>Skills You Have: {fields[0].skills}</li>
            </ul>
          </div>
        </div>

        <div className="skills section second" id="skills">
          <div className="container">
            <h1>
              Mini Project
              <br />
            </h1>
            <ul className="skill-list list-flat">
              <h3>Project Name: {input.projectName}</h3>
              <li>Tech Stacks Used: {input.techStacks}</li>
              <p>Description: {input.descriptions}</p>
            </ul>
          </div>
        </div>
        <div className="container">
          <h1>Social Media Links</h1>
          <ul className="award-list list-flat">
            <li>github: {input.sLinks}</li>
            <li>twitter: {input.sLinks}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
