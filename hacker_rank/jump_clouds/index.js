// Emma is playing a new mobile game that starts with consecutively 
// numbered clouds. Some of the clouds are thunderheads and others are 
// cumulus. She can jump on any cumulus cloud having a number that is 
// equal to the number of the current cloud plus 1 or 2. She must avoid 
// the thunderheads. Determine the minimum number of jumps it will take 
// Emma to jump from her starting postion to the last cloud. It is always
// possible to win the game.
//
// For each game, Emma will get an array of clouds numbered 0 if they 
// are safe or 1 if they must be avoided. For example, c = [0, 1, 0, 0, 0, 1, 0] indexed from 0..6. 
// The number on each cloud is its index in the list so she must avoid 
// the clouds at indexes 1 and 5. She could follow the following two paths:  
// 0 -> 2 -> 4 -> 6 or 0 -> 2 -> 3 -> 4 -> 6. The first path takes 3 jumps while the second takes 4.
//
// Function Description:
// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.
// jumpingOnClouds has the following parameter(s):
// c: an array of binary integers

function jumpingOnClouds(clouds) {
  let currentCloud = 0;
  let jumpCount = 0;
  // There are only two ways to jump. Either jump two clouds away or one 
  // cloud away from the current position

  // Check if next 2 clouds are "cumulus" which values are 0s
  // If they are cumulus then jump to 2 clouds away from the current cloud
  // else jump 1 position away from the current cloud
  // Since you jump on both cases, you just have to increment the number 
  // of jumps by 1.
  while (currentCloud < clounds.length - 1) {
    if (clouds[currentCloud + 2] === 0) {
      currentCloud += 2;
    } else {
      currentCloud++;
    }
    jumpCount++;
  }
  return jumpCount;
}