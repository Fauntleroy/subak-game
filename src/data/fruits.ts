export const fruitNames: string[] = [
  'blueberry',
  'grape',
  'lemon',
  'orange',
  'apple',
  'dragonfruit',
  'pear',
  'peach',
  'pineapple',
  'honeydew',
  'watermelon'
];

type FruitNameType = (typeof fruitNames)[number];

export interface FruitType {
  name: FruitNameType;
  radius: number;
}

function generateFruits() {
  const fruits: FruitType[] = [];

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
