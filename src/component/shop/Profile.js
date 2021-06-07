import React from "react";
import { useSelector } from "react-redux";
import { Grid, Image, Header, Segment } from "semantic-ui-react";

const Profile = () => {
  const currentHouse = useSelector((state) => state.house.house);
  const { name, image, descrp } = useSelector(
    (state) => state.house.info
  ).filter((house) => house.name === currentHouse)[0];

  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header color={"black"} textAlign={"center"}>School House</Header>
            <Image src={image} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row></Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Profile;
