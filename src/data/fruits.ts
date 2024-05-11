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

export type FruitNameType = (typeof fruitNames)[number];

export interface FruitType {
  name: FruitNameType;
  radius: number;
  points: number;
}

function generateFruits() {
  const fruits: Map<
    FruitNameType,
    { name: FruitNameType; radius: number; index: number; points: number }
  > = new Map();

  // 7.5 gw
  let currentRadius = 3.75;

  for (let i = 0; i < fruitNames.length; i++) {
    const fruitName = fruitNames[i];
    fruits.set(fruitName, {
      name: fruitName,
      radius: currentRadius,
      index: i,
      points: (i + 1) * 2
    });

    currentRadius = currentRadius * 1.25;
  }

  return fruits;
}

export const fruits = generateFruits();
export const fruitsArray = [...fruits.values()];

export function getFruitByIndex(index: number): FruitType {
  return fruitsArray[index];
}

export function getFruitByName(name: FruitNameType): FruitType | null {
  const fruit = fruits.get(name);

  if (!fruit) {
    console.error(`No fruit matching name "${name}"`);
    return null;
  }

  return fruit;
}

export function getNextFruitByName(name: FruitNameType): FruitType | null {
  const fruitIndex = fruitNames.indexOf(name);
  const nextFruit = getFruitByIndex(fruitIndex + 1);

  if (!nextFruit) {
    return null;
  }

  return nextFruit;
}

export function getRandomFruit(): FruitType {
  const fruitIndex = Math.floor(Math.random() * 5);
  const fruit = getFruitByIndex(fruitIndex);

  return fruit;
}
