function(key, values, rr){
  if (rr) {
    return sum(values);
  } else {
    return values.length;
  }
}