export const colorTypes = {
  grass: "#9BCC50",
  poison: "#B97FC9",
  fire: "#fd7d24",
  water: "#4592c4",
  bug: "#729f3f",
  normal: "#a4acaf",
  electric: "#eed535",
  fairy: "#fdb9e9",
  fighting: "#d56723",
  psychic: "#f366b9",
  rock: "#a38c21",
  ice: "#51c4e7",
  steel: "#9eb7b8",
  ghost: "#7b62a3",
  dark: "#707070",
  // TO CHECK
  dragon: "gold",
  ground: "brown",
  flying: "silver",
}

export const getBackgroundByTypes = (colors) => {
  const [firstColor, secondColor] = colors
  if (secondColor)
    return `linear-gradient(to right, ${firstColor} 50%, ${secondColor} 50%)`
  return firstColor
}
