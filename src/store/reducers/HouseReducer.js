import { createSlice } from "@reduxjs/toolkit";

export const houseSlice = createSlice({
  name: "house",
  initialState: {
    house: "",
    info: [
      {
        name: "Griffendor",
        image:
          "https://1.bp.blogspot.com/-WV_sb7UjMIo/V_ENTue9HCI/AAAAAAABCrA/XocZ5xwp9mo7DSoaB-qXU_AxLKC7e2DbgCEw/s320/gryffindor.jpg",
        descrp: "This is the Griffendor House"
      },
      {
        name: "Ravenclaw",
        image:
          "https://4.bp.blogspot.com/-FfxqfrKt9UA/V_ENUpNkHuI/AAAAAAABCrE/a16s6N7zEBIsWl8-QAw5oQk9AMMcYFr2gCEw/s320/ravenclaw.jpg",
        descrp: "This is the Ravenclaw House"
      },
      {
        name: "Hufflepuff",
        image:
          "https://2.bp.blogspot.com/-UcA_FGXVBHQ/V_EN4vkmPFI/AAAAAAABCrM/LjhvcqfOo841_NmuelBqFW40dz7zxG9QQCLcB/s320/hufflepuff.jpg",
        descrp: "This is the Hufflepuff House"
      },
      {
        name: "Slytherin",
        image:
          "https://1.bp.blogspot.com/-nQCYFpQIJQQ/V_ENVM7G_ZI/AAAAAAABCrI/5FfjP0hh6skEKKbGP5yhd17gqrkeYymUQCEw/s320/slytherin.jpg",
        descrp: "This is the Slytherin House"
      }
    ],
    itemList: [],
    tempList: [
      {
        name: "Harry Potter",
        species: "human",
        gender: "male",
        house: "Gryffindor",
        dateOfBirth: "31-07-1980",
        yearOfBirth: 1980,
        ancestry: "half-blood",
        eyeColour: "green",
        hairColour: "black",
        wand: { wood: "holly", core: "phoenix feather", length: 11 },
        patronus: "stag",
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: "Daniel Radcliffe",
        alive: true,
        image: "http://hp-api.herokuapp.com/images/harry.jpg"
      },
      {
        name: "Hermione Granger",
        species: "human",
        gender: "female",
        house: "Gryffindor",
        dateOfBirth: "19-09-1979",
        yearOfBirth: 1979,
        ancestry: "muggleborn",
        eyeColour: "brown",
        hairColour: "brown",
        wand: { wood: "vine", core: "dragon heartstring", length: "" },
        patronus: "otter",
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: "Emma Watson",
        alive: true,
        image: "http://hp-api.herokuapp.com/images/hermione.jpeg"
      },
      {
        name: "Ron Weasley",
        species: "human",
        gender: "male",
        house: "Gryffindor",
        dateOfBirth: "01-03-1980",
        yearOfBirth: 1980,
        ancestry: "pure-blood",
        eyeColour: "blue",
        hairColour: "red",
        wand: { wood: "willow", core: "unicorn tail-hair", length: 14 },
        patronus: "Jack Russell terrier",
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: "Rupert Grint",
        alive: true,
        image: "http://hp-api.herokuapp.com/images/ron.jpg"
      },
      {
        name: "Minerva McGonagall",
        species: "human",
        gender: "female",
        house: "Gryffindor",
        dateOfBirth: "04-10-1925",
        yearOfBirth: 1925,
        ancestry: "",
        eyeColour: "",
        hairColour: "black",
        wand: { wood: "", core: "", length: "" },
        patronus: "tabby cat",
        hogwartsStudent: false,
        hogwartsStaff: true,
        actor: "Dame Maggie Smith",
        alive: true,
        image: "http://hp-api.herokuapp.com/images/mcgonagall.jpg"
      },
      {
        name: "Rubeus Hagrid",
        species: "half-giant",
        gender: "male",
        house: "Gryffindor",
        dateOfBirth: "06-12-1928",
        yearOfBirth: 1928,
        ancestry: "half-blood",
        eyeColour: "black",
        hairColour: "black",
        wand: { wood: "oak", core: "", length: 16 },
        patronus: "",
        hogwartsStudent: false,
        hogwartsStaff: true,
        actor: "Robbie Coltrane",
        alive: true,
        image: "http://hp-api.herokuapp.com/images/hagrid.png"
      },
      {
        name: "Neville Longbottom",
        species: "human",
        gender: "male",
        house: "Gryffindor",
        dateOfBirth: "30-07-1980",
        yearOfBirth: 1980,
        ancestry: "pure-blood",
        eyeColour: "",
        hairColour: "blonde",
        wand: { wood: "cherry", core: "unicorn tail-hair", length: 13 },
        patronus: "",
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: "Matthew Lewis",
        alive: true,
        image: "http://hp-api.herokuapp.com/images/neville.jpg"
      },
      {
        name: "Ginny Weasley",
        species: "human",
        gender: "female",
        house: "Gryffindor",
        dateOfBirth: "11-08-1981",
        yearOfBirth: 1981,
        ancestry: "pure-blood",
        eyeColour: "brown",
        hairColour: "red",
        wand: { wood: "yew", core: "", length: "" },
        patronus: "horse",
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: "Bonnie Wright",
        alive: true,
        image: "http://hp-api.herokuapp.com/images/ginny.jpg"
      },
      {
        name: "Sirius Black",
        species: "human",
        gender: "male",
        house: "Gryffindor",
        dateOfBirth: "03-11-1959",
        yearOfBirth: 1959,
        ancestry: "pure-blood",
        eyeColour: "grey",
        hairColour: "black",
        wand: { wood: "", core: "", length: "" },
        patronus: "hare",
        hogwartsStudent: false,
        hogwartsStaff: false,
        actor: "Gary Oldman",
        alive: false,
        image: "http://hp-api.herokuapp.com/images/sirius.JPG"
      },
      {
        name: "Remus Lupin",
        species: "werewolf",
        gender: "male",
        house: "Gryffindor",
        dateOfBirth: "10-03-1960",
        yearOfBirth: 1960,
        ancestry: "half-blood",
        eyeColour: "green",
        hairColour: "brown",
        wand: { wood: "cypress", core: "unicorn tail-hair", length: 10.25 },
        patronus: "wolf",
        hogwartsStudent: false,
        hogwartsStaff: true,
        actor: "David Thewlis",
        alive: false,
        image: "http://hp-api.herokuapp.com/images/lupin.jpg"
      },
      {
        name: "Arthur Weasley",
        species: "human",
        gender: "male",
        house: "Gryffindor",
        dateOfBirth: "06-02-1950",
        yearOfBirth: 1950,
        ancestry: "pure-blood",
        eyeColour: "blue",
        hairColour: "red",
        wand: { wood: "", core: "", length: "" },
        patronus: "weasel",
        hogwartsStudent: false,
        hogwartsStaff: false,
        actor: "Mark Williams",
        alive: true,
        image: "http://hp-api.herokuapp.com/images/arthur.jpg"
      }
    ]
  },

  reducers: {
    setHouse: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.house = action.payload;
      state.itemList = state.tempList;
    },
    removeHouse: (state) => {
      state.house = "";
    }
  }
});

// Action creators are generated for each case reducer function
export const { setHouse, removeHouse } = houseSlice.actions;

export default houseSlice.reducer;
