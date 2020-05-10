import {
  filterData,
  sortData,
  removeDuplicates,
  filterDataOptions,
  searchName,
} from "../src/data.js";

const data = [
  {
    name: "Guilherme",
    status: "Alive",
    gender: "Male",
    species: "Human",
    origin: {
      name: "Earth (C-137)",
    },
    location: {
      name: "Earth (Replacement Dimension)",
    },
  },

  {
    name: "Guilherme",
    status: "Dead",
    gender: "Male",
    species: "Humanoid",
    origin: {
      name: "Earth (Replacement Dimension)",
    },
    location: {
      nome: "Earth (Replacement Dimension)",
    },
  },

  {
    name: "Bianca",
    status: "unknown",
    gender: "unknown",
    species: "Alien",
    origin: {
      nome: "Earth (C-137)",
    },
    location: {
      nome: "Abadango",
    },
  },

  {
    name: "Rebeca",
    status: "unknown",
    gender: "Female",
    species: "Alien",
    origin: {
      nome: "Bepis 9",
    },
    location: {
      nome: "Bepis 9",
    },
  },
];

describe("filterData", () => {
  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });

  it("returns data, key, value", () => {
    expect(example()).toBe("data, key, value");
  });
});

describe("anotherExample", () => {
  it("is a function", () => {
    expect(typeof anotherExample).toBe("function");
  });

  it("returns `anotherExample`", () => {
    expect(anotherExample()).toBe("OMG");
  });
});
