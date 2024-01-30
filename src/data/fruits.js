export const fruitNames = [
  'blueberries',
  'strawberry',
  'grapes',
  'tangerine',
  'mango',
  'apple',
  'pear',
  'peach',
  'pineapple',
  'melon',
  'watermelon'
];

function generateFruits() {
  const fruits = [];

  // 7.5 gw
  let currentRadius = 3.75;

  for (const fruitName of fruitNames) {
    fruits.push({
      name: fruitName,
      radius: currentRadius
    });

    currentRadius = currentRadius * 1.25;
  }

  return fruits;
}

export const fruits = generateFruits();
