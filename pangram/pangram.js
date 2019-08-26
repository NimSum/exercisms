//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (string) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const cleanString = new Set(string.toLowerCase());
  return alphabet.split('').every(letter => cleanString.has(letter));
};
