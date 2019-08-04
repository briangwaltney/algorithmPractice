let x = 1;
let y = 2;
let z = 0;
let total = 2;
while (z <= 4000000) {
  z = x + y
  console.log(z)
  if (z % 2 === 0)
    total += z
  x = y
  y = z
}
console.log(total)