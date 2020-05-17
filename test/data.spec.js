import {
  filterData,
  sortData,
  sortDataNested,
  removeDuplicates,
  filterDataOptions,
  searchName,
  makeStatistics,
} from "../src/data.js";

const data = [
  {
    name: "Beth",
    status: "Alive",
    gender: "Female",
    species: "Human",
    origin: {
      name: "Earth (C-137)",
    },
    location: {
      name: "Earth (Replacement Dimension)",
    },
  },

  {
    name: "Joe",
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
    name: "Rick",
    status: "Alive",
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
    name: "Summer",
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

describe("fiterData", () => {
  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });
  it("filter for key and value", () => {
    const result = filterData(data, "gender", "Female");
    expect(result.length).toBe(2);
  });
  it("don't return item, when filter be invalid", () => {
    const result = filterData(data, "species", "alien");
    expect(result.length).toBe(0);
  });
});

describe("sortData", () => {
  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });
  it("must ordered for name ascedent", () => {
    const result = sortData(data, "name", "A-Z");
    expect(result[0].name).toBe("Beth");
    expect(result[1].name).toBe("Joe");
    expect(result[2].name).toBe("Rick");
    expect(result[3].name).toBe("Summer");
  });
  it("must ordered for name descedent", () => {
    const dataDesc = [
      {
        name: "summer",
        gender: "Female",
        species: "Human",
      },
      {
        name: "rick",
        gender: "Male",
        species: "human",
      },
      {
        name: "joe",
        gender: "Male",
        species: "human",
      },
      {
        name: "beth",
        gender: "Female",
        species: "Alien",
      },
    ];
    const result = sortData(dataDesc, "name", "desc");
    expect(result[0].name).toBe("summer");
    expect(result[1].name).toBe("rick");
    expect(result[2].name).toBe("joe");
    expect(result[3].name).toBe("beth");
  });
});

describe("sortDataNested", () => {
  it("is a function", () => {
    expect(typeof sortDataNested).toBe("function");
  });
  it("must ordered for name ascedent", () => {
    const result = sortDataNested(data, "origin", "name");
    expect(result[0].name).toBe("Summer");
    expect(result[1].name).toBe("Rick");
    expect(result[2].name).toBe("Beth");
    expect(result[3].name).toBe("Joe");
  });
  it("must ordered for name descedent", () => {
    const dataDesc = [
      {
        name: "summer",
        gender: "Female",
        species: "Human",
      },
      {
        name: "rick",
        gender: "Male",
        species: "human",
      },
      {
        name: "joe",
        gender: "Male",
        species: "human",
      },
      {
        name: "beth",
        gender: "Female",
        species: "Alien",
      },
    ];
    const result = sortData(dataDesc, "name", "desc");
    expect(result[0].name).toBe("summer");
    expect(result[1].name).toBe("rick");
    expect(result[2].name).toBe("joe");
    expect(result[3].name).toBe("beth");
  });
});

describe("removeDuplicates", () => {
  it("is a function", () => {
    expect(typeof removeDuplicates).toBe("function");
  });
  it("must a unique element", () => {
    const data = [
      {
        name: "summer",
        gender: "Female",
        species: "Human",
      },
      {
        name: "summer",
        gender: "Female",
        species: "Human",
      },
    ];
    const result = removeDuplicates(data, "name");
    expect(result.length).toBe(1);
  });
});

describe("filterDataOptions", () => {
  it("is a function", () => {
    expect(typeof filterDataOptions).toBe("function");
  });
  it("must return a filter of options", () => {
    const result = filterDataOptions(data, "location", "nome", "Bepis 9");
    expect(result[0].location.nome).toBe("Bepis 9");
  });
});

describe("searchName", () => {
  it("is a function", () => {
    expect(typeof searchName).toBe("function");
  });
  it("must return a data names", () => {
    const result = searchName(data, "name", "Beth");
    expect(result[0].name).toBe("Beth");
  });
});

describe("makeStatistics", () => {
  it("is a function", () => {
    expect(typeof makeStatistics).toBe("function");
  });
  it("should throw error if null", () => {
    expect(() => {
      makeStatistics(null, null, null);
    }).toThrow(TypeError);
  });  
  it("must return a value", () => {
    const resultStatistic = makeStatistics(data, "status", "Alive");
    expect(resultStatistic).toBe("50.00");
  });
});
