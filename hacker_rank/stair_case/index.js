// Write a function that outputs a right aligned staircase 
// where each stair is notated with '#'

function staircase(n) {
  for (let i = 1; i < n; i++) {
    console.log('#'.repeat(i).padStart(n))
  }
}