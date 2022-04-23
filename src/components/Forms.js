    import React from "react";
    import { useState } from "react";
    import { useForm } from "react-hook-form";
    import TextField from "@mui/material/TextField";
    import Input from "@mui/material/Input";
    import Button from "@mui/material/Button";
    import TextareaAutosize from '@mui/material/TextareaAutosize';
    import {Stack,Typography} from '@mui/material';
    import {inputData} from '../action/Action'
    import { useDispatch } from "react-redux";

    

    const Forms = ({step})=> {

    const[profileData,setProfileData] = useState({
        firstName:"",lastName:"",phoneNumber:"",address:"",course:"",completionYear:"",
        schoolName:"",percentage:"",skills:"",
        projectName:"",techStacks:"",descriptions:"",sLinks:""
    })

    const dispatch = useDispatch();

    let name,value;

    const handleInput=(e)=>{
        console.log(e);
        name = e.target.name;
        value= e.target.value;


        //[name] = e.target.value
        setProfileData({...profileData,[name]:value});
    }
    
    const inputDataa = {
        profileData,
        };

    const handleProfileSection=(e)=>{
        e.preventDefault();

        dispatch(inputData(inputDataa.profileData));
    }

    function getSteps(step) {
        switch(step) {
            case 0:
                return(
                    <>

                        <TextField
                            id="first-name"
                            label="First Name"
                            variant="outlined"
                            placeholder="Enter Your First Name"
                            fullWidth
                            margin="normal"
                            name="firstName"
                            value={profileData.firstName}
                            onChange={handleInput}
                        />
                        <TextField
                            id="last-name"
                            label="Last Name"
                            variant="outlined"
                            placeholder="Enter Your Last Name"
                            fullWidth
                            margin="normal"
                            name="lastName"
                            value={profileData.lastName}
                            onChange={handleInput}
                        />
                        <TextField
                            id="phone-number"
                            label="Phone Number"
                            variant="outlined"
                            placeholder="Enter Your Phone Number"
                            fullWidth
                            margin="normal"
                            type="number"
                            name="phoneNumber"
                            value={profileData.phoneNumber}
                            onChange={handleInput}
                        />

                        <Stack spacing={4} direction="row"  sx={{ pt:3,pb:3 }}>
                        <Typography variant="h6" component="div" >
                            Choose Profile Number
                        </Typography>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" variant="outlined" />
                            
                            <Button variant="contained" component="span" sx={{ ml:5 }} >
                            Upload
                            </Button>
                        </label>
                        </Stack>

                        <TextField
                        id="address"
                        label="address"
                        variant="outlined"
                        placeholder="Enter Your Address"
                        fullWidth
                        margin="normal"
                        name="address"
                        value={profileData.address}
                        onChange={handleInput}
                        />
                        <Button onClick={handleProfileSection} variant="contained" component="span" >
                            Add
                        </Button>
                    </>
                    
                )

            case 1: 
            return(
                <>
                        <form>
                        <TextField
                        id="course"
                        label="Name of course"
                        variant="outlined"
                        placeholder="Name of Course"
                        fullWidth
                        margin="normal"
                        name="course"
                        value={profileData.course}
                        onChange={handleInput}
                        />

                        <Button variant="contained" component="span" >
                            Add
                        </Button>
                        </form>
                        

                        <TextField
                        id="completion-year"
                        label="Year of Completion"
                        variant="outlined"
                        placeholder="Year of Completion"
                        fullWidth
                        margin="normal"
                        name="completionYear"
                        type="number"
                        value={profileData.completionYear}
                        onChange={handleInput}
                        />
                        <Button variant="contained" component="span" >
                            Add
                        </Button>

                        <TextField
                        id="school-name"
                        label="School/College Name"
                        variant="outlined"
                        placeholder="School/College Name"
                        fullWidth
                        margin="normal"
                        name="schoolName"
                        value={profileData.schoolName}
                        onChange={handleInput}
                        />
                        <Button variant="contained" component="span" >
                            Add
                        </Button>

                        <TextField
                        id="percentage"
                        label="Percentage"
                        variant="outlined"
                        placeholder="Percentage"
                        fullWidth
                        margin="normal"
                        name="percentage"
                        value={profileData.percentage}
                        onChange={handleInput}
                        />
                        <Button variant="contained" component="span" >
                            Add
                        </Button>
                </>
            )
            case 2: 
            return(
                <>

                        <TextField
                        id="skills"
                        label="Enter your skills"
                        variant="outlined"
                        placeholder="Enter your skills"
                        fullWidth
                        margin="normal"
                        name="skills"
                        value={profileData.skills}
                        onChange={handleInput}
                        />
                        <Button variant="contained" component="span" >
                            Add
                        </Button>
                </>
            )
            case 3: 
            return(
                <>
                        <TextField
                        id="project-name"
                        label="Project Name"
                        variant="outlined"
                        placeholder="Project Name"
                        fullWidth
                        margin="normal"
                        name="projectName"
                        value={profileData.projectName}
                        onChange={handleInput}
                        />
                        <Button variant="contained" component="span" >
                            Add
                        </Button>

                                <TextField
                                id="tech-stacks"
                                label="Tech Stacks Used "
                                variant="outlined"
                                placeholder="Tech Stacks Used"
                                fullWidth
                                margin="normal"
                                name="techStacks"
                                value={profileData.techStacks}
                                onChange={handleInput}
                                />
                                <Button variant="contained" component="span" >
                                Add
                                </Button>

                                <Stack spacing={4} direction="row"  sx={{ pt:3,pb:3 }}>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={7}
                                    minCols={9}
                                    placeholder="Give Your Project Descriptions"
                                    name="descriptions"
                                    value={profileData.descriptions}
                                    onChange={handleInput}
                                    style={{ width: 200 }}/>
                                </Stack>
                                
                </>
            )
            case 4:
                return(
                    <>
                                <TextField
                                id="s-links"
                                label="Any Social Media Links "
                                variant="outlined"
                                placeholder="Any Social Media Links "
                                fullWidth
                                margin="normal"
                                name="sLinks"
                                value={profileData.sLinks}
                                onChange={handleInput}
                                />
                    </>
                )
                    default: return (
                    <Typography sx={{ mt: 6, mb: 1}}  align= 'center'>
                    Something went wrong
                    </Typography>)
                
        }
    }

    return (
        <>
            <form >
            {getSteps(step)}
            </form>
        </>
    );
    }

    export default Forms;
    