import React from 'react';
import {
  Typography,
  Grid,
  Rating,
  Button,
  Stack,
IconButton,
Card,
Divider
} from "@mui/material";
import img1 from '../../assets/2 (2).png'
import DeleteIcon from '@mui/icons-material/Delete';

const CarWishList=(car)=>{

return<>
<Card sx={{p:1 ,borderRadius:8}}>
<Grid container >
<Grid item xs={6} sm={4}>
         <Stack p={1} borderRadius={8} backgroundColor="#3563E9"><img src={img1} alt={car.name} style={{
            width: 'auto',
            height: 'auto',
          }} />
          </Stack> 
        </Grid>

        <Grid item xs={6}ml={1} sm={4}>

<Typography variant="h5" component="h2" gutterBottom sx={{color:"#1A202C",
            fontSize:"32px",
            fontWeight:700,
            font:"Plus Jakarta Sans",
            fontStyle:"bold",
            lineHeight:"48px"
            }}>
            Nissan GT - R
          </Typography>
          <Rating name="read-only" value={car.reviewer} readOnly />
          <Typography variant="body1" color="textSecondary">
            {`440+ reviewer(s)`}
          </Typography>
          <Typography sx={{color:"#596780",font:"Plus Jakarta Sans",fontSize:"20px",lineHeight:"40px"}}>
NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</Typography>
</Grid>

<Grid item  xs={6} sm={3} display={"flex"} justifyContent={"center"} alignItems={'flex-start'}>
<IconButton size="large"  onClick={''} aria-label="delete">
  <DeleteIcon sx={{fontSize:"32px"}} />
</IconButton>
</Grid>
<Grid container sx={{m:2}} spacing={2}>
<Grid item sm={12}><Divider></Divider></Grid>
<Grid item sm={3}>
   
<Typography variant="body2" color="#90A3BF" sx={{fontWeight:400,font:"Plus Jakarta Sans",fontSize:"20px"}}>
              Type Car
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#596780" sx={{fontWeight:600,font:"Plus Jakarta Sans",fontSize:"20px"}}>
             Manual
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#90A3BF" sx={{fontWeight:400,font:"Plus Jakarta Sans",fontSize:"20px"}}>
              Capacity
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#596780" sx={{fontWeight:600,font:"Plus Jakarta Sans",fontSize:"20px"}}>
            2 Person
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#90A3BF" sx={{fontWeight:400,font:"Plus Jakarta Sans",fontSize:"20px"}}>
Gasoline
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#596780" sx={{fontWeight:600,font:"Plus Jakarta Sans",fontSize:"20px"}}>
            70L
              </Typography>
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#90A3BF" sx={{fontWeight:400,font:"Plus Jakarta Sans",fontSize:"20px"}}>
Streening
              </Typography>
             
</Grid>
<Grid item sm={3}>
<Typography variant="body2" color="#596780" sx={{fontWeight:600,font:"Plus Jakarta Sans",fontSize:"20px"}}>
             55
              </Typography>
            
</Grid>

</Grid>
<Grid item sm={12}><Divider></Divider></Grid>
<Grid item mt={2} sm={7} display={'flex'} justifyContent={'end'}>
<Typography variant="h5" noWrap component="div"   sx={{color:"#1A202C",
            fontSize:"28px",
            fontWeight:700,
            font:"Plus Jakarta Sans",
            fontStyle:"bold",
          lineHeight:"35.5px"
            }} >
Price Now! 55<span style={{color:"#90A3BF",font:"Plus Jakarta Sans",fontSize:"16px"}}>/days</span>`
     <h5 style={{fontWeight:600,font:"Plus Jakarta Sans",color:"#90A3BF",fontSize:"20px", textDecoration: 'line-through' }}> Price before:88</h5>
      </Typography>
</Grid>
<Grid item sm={5} mt={2} display={'flex'} justifyContent={'center'}>
  <Button size='medium' variant="contained" sx={{
    bgcolor:"#3563E9",
    fontSize:"16px",
    lineHeight:"24px",
    fontWeight:700,
    width:'120px',
    height:"56px",
    font:"Plus Jakarta Sans",
    textTransform:"unset"
    }} >Rent Now</Button>
</Grid>
</Grid>
</Card>

</>

}
export default CarWishList;