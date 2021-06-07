import React from "react";
import { useSelector } from "react-redux";
import { Container, Card, Grid } from "semantic-ui-react";
import FlipCard from "./FlipCard";

const ShoppingList = () => {
  // const currentHouse = useSelector((state) => state.house.house);
  const itemList = useSelector((state) => state.house.itemList);

  return (
    <Container className="shopping-list">
      <Grid columns={4} verticalAlign={"top"} stretched>
        {itemList
          ? itemList.map((item, index) => {
              let { image, name, gender, eyeColour, hairColour, wand } = item;
              let { wood, core, length } = wand;
              let wandDescrip = wand ? `${wood} ${core} ${length}` : "";
              return (
                <Grid.Column key={index}>
                  <FlipCard isFlipped/>
                  
                {/* <Card
                  key={index}
                  image={image}
                  header={name}
                  meta={gender}
                  description={`${eyeColour} eyes and ${hairColour} hair`}
                  extra={<p>{wandDescrip}</p>}
                /> */}
                </Grid.Column>
              );
            })
          : ""}
      </Grid>
    </Container>
  );
};

export default ShoppingList;
