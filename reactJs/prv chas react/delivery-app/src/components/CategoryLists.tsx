function CategoryLists() {
  const categories = ["Pizza", "Burger", "Pasta"];

  return (
  <div>
      <h2>Food:</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <div>xdd</div>
    </div>
    )
  ;
}

export default CategoryLists;
