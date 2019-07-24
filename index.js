function bruteForceTwoSum(array, sum){
  let solution = []
  //let array = [2, 3, 4, 3, 6, 7]
  //console.log(array);
  for( var i = 0; i < array.length; i++){
    //console.log(array[i], "i");
    for( var j = i + 1; j < array.length; j++){
      //console.log(array[j], "j")
      if(array[i] + array[j] === sum){
        solution.push(array[i])
        solution.push(array[j])
        //console.log(solution, "10");
      }
      //console.log(solution, "11");
      //return solution
    }
  }
  //console.log(solution, "18");
  return solution
}