import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterCuisine, setFilterCuisine] = useState('All');

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoods = [...foods, newFood];
    setFoods(newFoods);
  }

  function handleClick(id) {
    const newFoods = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      }
      return food;
    })
    setFoods(newFoods);
  }

  function handleChangeFilter(evt) {
    const cuisine = evt.target.value;
    setFilterCuisine(cuisine);
  }


  let filteredFoods = foods;
  if (filterCuisine !== 'All') {
    filteredFoods = foods.filter((food) => {
      return food.cuisine === filterCuisine;
    });
  }

  const foodList = filteredFoods.map((food) => (
    <li onClick={() => handleClick(food.id)} key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <label>Select Cuisine: </label>
      <select onChange={handleChangeFilter} name="filter">
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <br />
      <br />
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;

/*

const x = [1, 2, 3, ..., 10];
const y = x.map(el => {
  if (el === 2) {
    return 40;
  }
  return el;
})

SpicyFoodList();

index.html
<div>
  <h2 id="header"></h2>
</div>


main.js
fetch()
  .then(res => res.json())
  .then(data => {
    const header = document.getElementByID('header');
    header.innerHTML = data.title;
  })

  
  
  Content.js

  const [data, setData] = useState({ 
    title: "hi", 
    description: "adfasdfa" 
  });

  function handleClick(evt) {
    // won't work
    data.title = "New Title";

    const newData = {
      ...data,
      title: "New Title",
    };

    // will work
    setData(newData);
  }

  return (
    <div>
      <h2>{data.title}</h2>
    </div>
  );


  const obj = {
    title: 'hi',
    description: 'adfadfa',
    date: 'adfkajsdf'
  };

  const { title } = obj;
  // const title = obj.title;
  const { description } = obj;
  // const description = obj.description;

  const { title, description, date } = obj;







  const x = [1, 2, 3];
  let [a, b] = x;
  let a = x[0];
  let b = x[1];

*/