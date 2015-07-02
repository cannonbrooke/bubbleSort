var a = [2, 9, 636736347374, 3, 5034784357475, 80];
function bubbleSort(a){
  var swapped;
  do {
    swapped = true;
    for (var i=0; i < a.length-1; i++){
      if (a[i] > a[i+1]){
        var temp = a[i];
          a[i] = a[i+1];
          a[i+1] = temp;
          swapped = false;
       }
    }
  } while(!swapped);
}
bubbleSort(a);
console.log(a);

