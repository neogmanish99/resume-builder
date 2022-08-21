import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
// import Typography from '@mui/material/Typography';
import { Typography, Stack } from "@mui/material";
import Forms from "./Forms";
import { useDispatch } from "react-redux";
// import { inputData } from "../action/resumeAction";
import { resumeActions } from "../store/resume-slice";

function getSteps() {
  return [
    "Profile Section",
    "Education Section",
    "Skills Section",
    "Mini Project Section",
    "Social Mention(optional)",
  ];
}

const HorizontalLinearStepper = () => {
  const [profileSection, setProfileSection] = useState({});
  const [step, setStep] = useState(0);
  const steps = getSteps();

  const dispatch = useDispatch();

  const handleNext = () => {
    setStep(step + 1);
    console.log(step);
  };

  const handleBack = () => {
    setStep(step - 1);
    console.log(step);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={step}>
          {steps.map((step, index) => {
            return (
              <Step>
                <StepLabel>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {step === 5 ? (
          <Typography sx={{ mt: 6, mb: 1 }} align="center">
            All steps completed - you&apos;re finished
          </Typography>
        ) : (
          <>
            <Forms setProfileSection={setProfileSection} step={step} />
            <React.Fragment>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 10 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Stack spacing={4} direction="row">
                  <Button
                    variant="contained"
                    onClick={handleBack}
                    disabled={step === 0}
                  >
                    Prev
                  </Button>
                  <Button variant="contained" onClick={handleNext}>
                    {step === 4 ? "Skip" : "Next"}
                  </Button>
                  {step === 4 ? (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleNext();
                        console.log(profileSection);
                        dispatch(resumeActions.submitData(profileSection));
                      }}
                    >
                      Finish
                    </Button>
                  ) : (
                    <Button variant="contained" sx={{ display: "none" }}>
                      Unfinished
                    </Button>
                  )}
                </Stack>
              </Box>
            </React.Fragment>
          </>
        )}
      </Box>
    </>
  );
};

export default HorizontalLinearStepper;
