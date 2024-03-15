import {
    Typography,
    FormHelperText,
    FormControl,
    FormLabel,
    OutlinedInput,
    Grid,
    Stack
  } from "@mui/material";
  import {useForm} from 'react-hook-form'
  
  
  const UserProfileDetailsForm = () => {
  
      const form = useForm({
          mode:"all"
      })
      const {register,formState}=form
      const {errors}=formState
   return (
      <>
      <Stack sx={{m:2,p:2,borderRadius:"10px"}}>
        <Typography variant="h5" noWrap component="div"   sx={{color:"#1A202C",
              fontSize:"20px",
              fontWeight:700,
              font:"Plus Jakarta Sans",
              fontStyle:"bold",
              }} >
        Profile Details
        </Typography>
        <FormHelperText>You can update your info</FormHelperText>
        <form noValidate>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Email</FormLabel>
              <OutlinedInput
                id="input-email-user-info"
                placeholder="Email"
                type="email"
                {...register('email',{required:{value:true,
              message:"This Filed is required"},pattern:{value:/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,message:"Invalid email"
              }})}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                error={!!errors.message}
  
              />
              <FormHelperText sx={{color:"red"}}>{errors.email?.message}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>First Name</FormLabel>
              <OutlinedInput
                id="input-firstName-user-info"
                placeholder="First Name"
                type="text"
                {...register('firstName',{required:{value:true,
              message:"This Filed is required"},maxLength:{value:40,message:"name is too long, maxium 40 letters"
              
              
          },minLength:{value:3,message:"name is too short, minum 3 letters"}})}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                error={!!errors.message}
  
              />
              <FormHelperText sx={{color:"red"}}>{errors.firstName?.message}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Last Name</FormLabel>
              <OutlinedInput
                id="input-lastName-user-info"
                placeholder="Last Name"
                type="text"
                {...register('lastName',{required:{value:true,
              message:"This Filed is required"},maxLength:{value:40,message:"name is too long, maxium 40 letters"
              
              
          },minLength:{value:3,message:"name is too short, minum 3 letters"}})}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                error={!!errors.message}
  
              />
              <FormHelperText sx={{color:"red"}}>{errors.lastName?.message}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Address</FormLabel>
              <OutlinedInput
                id="input-address-user-info"
                placeholder="Your Address"
                type="text"
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                 {...register('address',{required:{value:true,
              message:"This Filed is required"},maxLength:{value:40,message:"Address is too long, maxium 40 letters"
              
              
          },minLength:{value:3,message:"Address is too short, minum 3 letters"}})}
                error={!!errors.message}
              />
              <FormHelperText sx={{color:"red"}}>{errors.address?.message}</FormHelperText>
  
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Drive Lisencese</FormLabel>
              <OutlinedInput
                id="input-drivel-user-info"
                placeholder="Your Driver License"
                type="text"
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                 {...register('driverLicense',{required:{value:true,
              message:"This Filed is required"},pattern:{value:/^\d{3}\s[ء-ي]\s[ء-ي]\s[ء-ي]$/,message:"do not match a driver's license number consisting of 6 characters where the first three are numbers and the last 3 are Arabic characters with a white space between each Arabic character EX:123ا و ي "}})}
                error={!!errors.message}
              />
              <FormHelperText sx={{color:"red"}}>{errors.driverLicense?.message}</FormHelperText>
  
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Town/City</FormLabel>
              <OutlinedInput
                id="input-city-user-info"
                placeholder="Your City"
                type="text"
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                {...register('city',{maxLength:{value:40,message:"name is too long, maxium 40 letters"
              
              
              },minLength:{value:3,message:"name is too short, minum 3 letters" }})}
                    error={!!errors.message}
              />
               <FormHelperText sx={{color:"red"}}>{errors.city?.message}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend"sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Phone</FormLabel>
              <OutlinedInput
                id="input-Phone-user-info"
                placeholder="Your Phone"
                type="text"
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                {...register('phone',{required:{value:true,
                  message:"This Filed is required"},pattern:{value:/^(011|012|010|015)\d{8}$/,message:"phone should be 12 numbers and start with 011 or 012 or 015 or 010"}})}
                  error={!!errors.message}
              />
          <FormHelperText sx={{color:"red"}}>{errors.phone?.message}</FormHelperText>
  
            </FormControl>
          </Grid>
        </Grid>
        </form>
       </Stack>
      </>
    );
  };
  
  export default UserProfileDetailsForm;