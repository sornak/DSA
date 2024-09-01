function longestSubstringWithDistinctCharactersBrute(str) {
  let longest = 0;
  for (let i = 0; i < str.length; i++) {
    let visited = new Array(256);
    let cnt = 0;
    for (let j = i; j < str.length; j++) {
      const charCode = str.charCodeAt(j);
      if (visited[charCode]) {
        break;
      }
      visited[charCode] = true;
      cnt++;
      longest = Math.max(longest, cnt);
    }
  }

  return longest;
}

function longestSubstringWithDistinctCharactersOptimal(str) {
  let longest = 0;
  let start = 0;
  let charSet = new Set();

  for (let end = 0; end < str.length; end++) {
    while (charSet.has(str[end])) {
      charSet.delete(str[start]);
      start++;
    }

    charSet.add(str[end]);

    longest = Math.max(longest, end - start + 1);
  }

  return longest;
}
