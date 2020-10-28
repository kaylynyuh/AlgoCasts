function freqQuery(queries) {
  let output = "";
  for (let i = 0; i < queries.length; i++) {
      console.log('0th', queries[i][0])
      console.log('1st', queries[i][1])
      if (queries[i][0] === 1) {
          output += queries[i][1];
      } else if (queries[i][0] === 2) {
          let stringified = queries[i][1].toString();
          if (output.indexOf(stringified !== -1)) {
              let idx = output.indexOf(output[output.indexOf(stringified)]);
              console.log('output', output)
              console.log('idx', ouput[idx])
              output.replace(output[idx], "");
          } 
      } else {
          if (output.includes(queries[i][1])) {
              output += 1;
          } else {
              output += 0;
          }
      }
  }
  console.log('output', output);
}
