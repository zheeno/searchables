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
  },
];
const search = new Searchables(data);
search.addIndex(["name", "age"]);

search
  .find("jack 30")
  .then((res) => {
    console.log("Found =>", res);
  })
  .catch((error) => console.log("Error =>", error.message));
