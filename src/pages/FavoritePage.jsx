import React, { useEffect } from "react";
import { MainContext } from "../context/MainProvider";
import { Container, Grid } from "@mui/material";
import Like from "../components/Like";
import EmptyBox from '../img/pngegg.png'

const FavoritePage = () => {
  const { getLike, like } = React.useContext(MainContext);

  useEffect(() => {
    getLike();
  },[]);

  // console.log(like);

  if (!like) {
    return <h2>Loading...</h2>;
  }

  if (like.products.length === 0) {
    return <div className="emty">
    <img width={400} src={EmptyBox} alt="" />
    <h2>Your favorite is empty.</h2>
    </div>;
  }

  return (
    <div>
      <Container className="cont">
      <h2>Favorite</h2>
      <Grid container spacing={4}>
              <Grid key={like.id} item xs={12} sm={6} md={3}>
                <div >
                <Like like={like} />
                </div>
              </Grid>
      </Grid> 
      </Container>
    </div>
  );
};

export default FavoritePage;
