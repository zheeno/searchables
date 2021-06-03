const { Searchables } = require(".");

const data = [
  {
    name: "Zino",
    age: 28,
  },
  {
    name: "Henry",
    age: 22,
  },
  {
    name: "Jack",
    age: 18,
  },
  {
    name: "Dan",
    age: 30,
    class: {
      name: "Golden",
      level: {
        value: "Black Level"
      }
    }
  },
];
const search = new Searchables(data);
search.addIndex(["name", "age", "class.name", "class.level.value"]);

search
  .find("jack")
  .then((res) => {
    console.log("Found =>", res);
  })
  .catch((error) => console.log("Error =>", error.message));
