// There are 3 types of edits that can be perfromed on a string: 
// insert a char, remove a char, or replace a char. Given two strings,
// write a function to check if they are 1 or 0 edits away. This
// check will occur to see if the SECOND string is 1 or 0 edits away.

// This is one of those problems where it's helpful to think about
// to think about the meaning of each of these operations. What
// does it mean for 2 strings to be one insertion, removal, or 
// replacement away from each other?

// Replacement: Consider two strings, bale and pale, that are
// one replacement away. Yes, that does mean that you could
// replace a character in bale to make pale. But more precisely, 
// it means that they are different only in one place.
//
// Insertion: The strings apple and aple are on insteration away. 
// This means that if you compared the strings, they would be 
// identical-- except for a shift at some point in the strings.
//
// Removal: The strings apple and aple are also one removal away,
// since removal is just the inverse of inseration. 

function oneEditReplace(str1, str2) {
  let foundDifference = false;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (foundDifference) {
        return false
      }
      foundDifference = true
    }
  }
  return true
}

// Check if you can insert a character into str1 to make it str2
function oneEditInsert(str1, str2) {
  let idx1 = 0
  let idx2 = 0
  while (idx2 < str2.length && idx1 < str1.length) {
    if (str1[idx1] !== str2[idx2]) {
      if (idx1 !== idx2) {
        return false
      }
      idx2++
    } else {
      idx1++
      ind2++
    }
  }
  return true
}

function oneAway(str1, str2) {
  if (str1.length === str2.length) { // if strings are the same length, we know this is a replacement edit
    return oneEditReplace(str1, str2)
  } else if (str1.length + 1 === str2.length) { // if str1 is one char longer than str2, than we know this is an insert edit
    return oneEditInsert(str1, str2)
  } else if (str1.length - 1 === str2.length) { // if str1 is one char shorter than str2, than we know this is a removal edit
    return oneEditRemoval(str2, str1)
  }
}