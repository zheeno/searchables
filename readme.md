<!--  -->

# Searchables  

```
npm install searchables
```

This module allows to search into an array of objects using for a keyword matching any entry with an indexed property.

## Usage

### Step 1 - Import the package into your project: 

``` js
const Searchables = require("Searchables");
```


### Step 2 - Create an instance of Searchable and pass the array to be searched as the only parameter: 

``` js
const data = [{...}];
const search = new Searchables(data);
```

### Step 3 - Configure Searchable indexes: 
Indexes can be configured by calling the `addIndex()` method. It takes in a single parameter which can be of type `String` or `Array[String]` 
``` js
search.addIndex(["index_1", "index_2", ..., "index_n"]);
```

### Step 4 - Invoke the `find()` method : 
The find method takes in an argument of type `String` and returns a promise which resolves an array of matching results
``` js
search
  .find("some value") // accepts 
  .then((res) => {
    console.log("Found =>", res);
  })
  .catch((error) => console.log("Error =>", error.message));
```

### Example: 

``` js
const { Searchables } = require(".");

const data = [
  {
    name: "Efezino",
    age: 28,
  },
  {
    name: "Adeyemi",
    age: 30,
  },
  {
    name: "Jeffery",
    age: 22,
  },
  {
    name: "Charles",
    age: 18,
  },
  {
    name: "Solomon",
    age: 30,
  }
];
const search = new Searchables(data);
search.addIndex(["name", "age"]);

search
  .find("jack 30") // accepts 
  .then((res) => {
    console.log("Found =>", res);
  })
  .catch((error) => console.log("Error =>", error.message));

``` 

Feel free to make contributions to this project.
