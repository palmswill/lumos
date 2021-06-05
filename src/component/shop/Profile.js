import React from "react";
import { useSelector } from "react-redux";
import { Grid, Image, Segment } from "semantic-ui-react";

const Profile = () => {
  const currentHouse = useSelector((state) => state.house.house);
  const { name, image, descrp } = useSelector(
    (state) => state.house.info
  ).filter((house) => house.name === currentHouse)[0];

  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Image src={image} />
        </Grid.Row>
        <Grid.Row></Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Profile;
