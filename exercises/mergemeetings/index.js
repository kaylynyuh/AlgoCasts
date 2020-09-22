// Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

// To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

function mergeRanges (meetings) {
  // Create a deep copy of the meetings array
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  // Sort by start time
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    // array elements will be sorted according to this return value of the compare function
    // this defines the sort order
    return a.startTime - b.startTime;
  });
  // Initialize merged meetings with the earliest meeting
  let mergedMeetings = sortedMeetings[0];
  for (let i = 1; i < sortedMeetings.length; i++) {
    let currentMeeting = sortedMeetings[i];
    let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
    // If the current meeting overlaps with the last merged meeting, use the
    // later end time of the two.
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {
      // Add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting);
    }
  }
  return mergedMeetings;
}

export default mergeRanges;