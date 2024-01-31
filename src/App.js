import {Grid,TextField,Typography,FormControlLabel,Checkbox,Button, Box,Alert,InputLabel,MenuItem,Select,
FormControl,FormLabel,RadioGroup,Radio,FormGroup,Stack,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Avatar } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'


function App() {
  const [st,setST]=useState('')
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [gender,setGender]=useState()
  const [location,setLocation]=useState([])
  const [pimg,setPimage]=useState()
  const [upldFile,setUpldFile]=useState()
  const [dob,setDob]=useState(null)
  const [error,setError]=useState({
    status:false,msg:"",type: ""}
  )
  const plocation=(e)=>{
    let data=location
    data.push(e.target.value)
    setLocation(data)
  }

  const resetForm=()=>{
    setST('')
    setName('')
    setEmail('')
    setGender('')
    setLocation([])
    setDob(null)
    setPimage('')
    setUpldFile('')
  }
  const Input=styled('input')({
    display:'none'
  })

  const handlesubmit=(e)=>{
    e.preventDefault();
    const data=new FormData()
    data.append('name',name)
    data.append('email',email)
    data.append('gender',gender)
    data.append('location',location)
    data.append('dob',dob)
    data.append('state',st)
    data.append('pimg',pimg)
    data.append('doc',upldFile)
    console.log(data)
    if(name && email){
       console.log(data.get('gender'))
       console.log(data.get('location'))
       setError({
         status: true,
         msg: "Resume Uploaded Successfully",
         type: "success",
       });
       resetForm()
       document.getElementById('resume-form').reset()
    }
    else{
      setError({status:true,msg: "All fields are required", type: "error"})
    }
  }
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ backgroundColor: "error.light", padding: 2 }}
      >
        <Typography
          variant="h2"
          component="div"
          sx={{ fontWeight: "bold", color: "white" }}
        >
          Resume Uploader
        </Typography>
      </Box>

      <Grid container sx={12} sm={12}>
        <Grid item sx={12} sm={4.8} marginRight={2}>
          <Box
            component="form"
            noValidate
            id="resume-form"
            onSubmit={handlesubmit}
          >
            <TextField
              id="name"
              name="name"
              required
              fullWidth
              margin="normal"
              label="name"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="email"
              name="email"
              required
              fullWidth
              margin="normal"
              label="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormControl fullWidth margin="normal">
              <InputLabel id="state-select-label">State</InputLabel>
              <Select
                labelId="state-select-label"
                id="state-select"
                value={st}
                label="st"
                onChange={(e) => {
                  setST(e.target.value);
                }}
              >
                <MenuItem value="Punjab">Punjab</MenuItem>
                <MenuItem value="Balochistan">Balochistan</MenuItem>
                <MenuItem value="KP">KP</MenuItem>
                <MenuItem value="Sindh">Sindh</MenuItem>
              </Select>
            </FormControl>

            <Box>
              <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
                <DatePicker
                  label="Date of Birth"
                  value={dob}
                  onChange={(newvalue) => {
                    setDob(newvalue);
                  }}
                  TextField={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>

            <FormControl fullWidth margin="normal">
              <FormLabel id="gender-radio">Gender</FormLabel>
              <RadioGroup row>
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  onChange={(e) => setGender(e.target.value)}
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                  onChange={(e) => setGender(e.target.value)}
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                  onChange={(e) => setGender(e.target.value)}
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">Preferred Job Location: </FormLabel>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Jhang"
                  value="Jhang"
                  onChange={(e) => plocation(e)}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Faisalabad"
                  value="Faisalabad"
                  onChange={(e) => plocation(e)}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Lahore"
                  value="Lahore"
                  onChange={(e) => plocation(e)}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Islamabad"
                  value="Islamabad"
                  onChange={(e) => plocation(e)}
                />
              </FormGroup>
            </FormControl>

            <Stack direction="row" alignItems="center" spacing={4}>
              <label htmlFor="profile-photo">
                <Input
                  accept="image/*"
                  id="profile-photo"
                  type="file"
                  onChange={(e) => {
                    setPimage(e.target.files[0]);
                  }}
                />
                <Button variant="contained" component="span">
                  Upload Photo
                </Button>
              </label>

              <label htmlFor="resume">
                <Input
                  accept="doc/*"
                  id="resume"
                  type="file"
                  onChange={(e) => {
                    setUpldFile(e.target.files[0]);
                  }}
                />
                <Button variant="contained" component="span">
                  Upload File
                </Button>
              </label>
            </Stack>

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, px: 5 }}
              color="error"
            >
              Submit
            </Button>
            {error.status ?<Alert severity={error.type}>{error.msg}</Alert>:''}
          </Box>
        </Grid>

        <Grid item sx={12} sm={7} mt={2} >
          <Box
            justifyContent="center"
            display="flex"
            sx={{ backgroundColor: "info.light", padding: 1 }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              List of Candidates
            </Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">DOB</TableCell>
                  <TableCell align="center">State</TableCell>
                  <TableCell align="center">Gender</TableCell>
                  <TableCell align="center">Location</TableCell>
                  <TableCell align="center">Avatar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
                >
                  <TableCell align="center"> Ali Sher</TableCell>
                  <TableCell align="center"> alisher@gmail.com</TableCell>
                  <TableCell align="center">28/10/2000</TableCell>
                  <TableCell align="center">Jhang</TableCell>
                  <TableCell align="center">Male</TableCell>
                  <TableCell align="center">Punjab</TableCell>
                  <TableCell align="center">
                    <Avatar src="#" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};


export default App;




