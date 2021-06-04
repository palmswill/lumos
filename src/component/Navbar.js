import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import AccountTop from "./AccounTop";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (e, { name }) => {
    console.log(activeItem);
    setActiveItem({ activeItem: name });
  };

  return (
    <div>
      <AccountTop />
      <Menu borderless fluid className="navbar">
        <Menu.Item
          name="houses"
          position="right"
          active={activeItem === "houses"}
          onClick={handleItemClick}
          content="School Houses"
          className="fadein delay-15s"
        />
        <Menu.Item
          name="collections"
          position="left"
          ml="100px"
          active={activeItem === "collections"}
          onClick={handleItemClick}
          content="Collections"
          className="fadein delay-15s"
        />
        <div className="center aligned column logo fadein delay-1s">Lumos</div>

        <Menu.Item
          name="aboutus"
          position="right"
          active={activeItem === "aboutUs"}
          onClick={handleItemClick}
          content="About Us"
          className="fadein delay-15s"
        />
        <Menu.Item
          name="Locations"
          position="left"
          active={activeItem === "locations"}
          onClick={handleItemClick}
          className="fadein delay-15s"
        />
      </Menu>
    </div>
  );
};

export default Navbar;
