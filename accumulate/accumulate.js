//
// This is only a SKELETON file for the 'Accumulate' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const accumulate = (container, accumulator) => {
  let accumulated = [];
  for (let idx in container) {
    accumulated[idx] = accumulator(container[idx]);
  }
  return accumulated;
};
