<!--  -->

# Searchables  

```
npm i @zheeno/searchables
```

This module allows to you to perform  deep search on an array of objects using for a keyword matching any entry with an indexed property.

## Usage

### Step 1 - Import the package into your project: 

``` js
const { Searchables } = require("@zheeno/searchables");
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

### Example 1: 
This is a basic example showing a search performed on the indexes on nodes with the lowest depth in the object tree.

``` js
const { Searchables } = require("@zheeno/searchables");

const data = [
  {
    name: "Efezino",
    age: 28
  },
  {
    name: "Adeyemi",
    age: 30
  },
  {
    name: "Jeffery",
    age: 22
  },
  {
    name: "Charles",
    age: 18
  },
  {
    name: "Solomon",
    age: 30
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


### Example 2: 
This example shows how to search indexes of an object tree whose node is located at depth `N`.
``` js
const { Searchables } = require("@zheeno/searchables");

const data = [
  {
    name: "Efezino",
    age: 28,
    class: {
      name: "Emerald"
      level: {
        id: "wDex87sm0"
        category:{
          name: "Secondary"
        }
      }
    }
  },
  {
    name: "Adeyemi",
    age: 30,
    class: {
      name: "Pearl"
      level: {
        id: "mM2F0jHah"
        category:{
          name: "Primary"
        }
      }
    }
  },
  {
    name: "Jeffery",
    age: 22,
    class: {
      name: "Silver"
      level: {
        id: "I50SeEDem"
        category:{
          name: "Secondary"
        }
      }
    }
  },
  {
    name: "Charles",
    age: 18,
    class: {
      name: "Gold"
      level: {
        id: "cS34mMab5"
        category:{
          name: "Primary"
        }
      }
    }
  },
  {
    name: "Solomon",
    age: 30,
    class: {
      name: "Gold"
      level: {
        id: "xBjdE332m"
        category:{
          name: "Primary"
        }
      }
    }
  }
];
const search = new Searchables(data);
search.addIndex(["class.name", "class.level.id", "class.level.category.name"]);

search
  .find("jack") // accepts 
  .then((res) => {
    console.log("Found =>", res);
  })
  .catch((error) => console.log("Error =>", error.message));

``` 

Feel free to make contributions to this project.
