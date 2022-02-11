// Write a Python/JS code to sort the list/array below without using .sort() method of list/array.
// elements of list/array = [999, 333, 2, 8982, 12, 45, 77, 99, 11]
// Expected output:
// [2, 11, 12, 45, 77, 99, 333, 999, 8982]

let arry = [999, 333, 2, 8982, 12, 45, 77, 99, 11];
for (let i = 0; i < arry.length; i++) {
    for (let j = 0; j < arry.length; j++) {
        if(arry[j]>arry[i]){
            let x = arry[i];
            arry[i] = arry[j];
            arry[j] = x;
        }
    }

}
