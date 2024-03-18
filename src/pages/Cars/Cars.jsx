import styles from "./Cars.module.css";
import { Box, Grid, Hidden } from "@mui/material";
import Navbar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Location from "../../components/Location/Location";
import CarCard from "../../components/CarCard/CarCard";
import Footer from "../../components/Footer/Footer";
import useCars from "../../useCars";

function Cars() {
  const {data , isLoading : LoadingCars} = useCars();
  return (
    <Box>
      <Grid container justifyContent="space-between" spacing={2}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Hidden xsDown>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9} className={styles.carspage}>
          <Grid container className={styles.locationContainer} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Location />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Location />
            </Grid>
            <Grid container rowGap={1} >
                {data?.data.map(car => 
                <Grid item xs={12} ms={6} md={4}>
                    <CarCard  car={car} LoadingCars={LoadingCars} key={car.id}/>
                </Grid>
                )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Box>
  );
}

export default Cars;
