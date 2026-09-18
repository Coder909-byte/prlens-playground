export function parseAge(input) {
  const age = Number(input);
  if (Number.isNaN(age)) throw new Error("Invalid age");
  return age;
}
