var sum = function(arr) {
  var result = 0;
  var i;
  for (i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
      result += arr[i]
    }
  }
  return result;
}


