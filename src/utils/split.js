export default function split(arr) {
    var size = 10; var arrayOfArrays = [];
    for (var i=0; i<arr.length; i+=size) {
         arrayOfArrays.push(arr.slice(i,i+size));
    }
    return arrayOfArrays;
    // const numParts = Math.ceil(arr.length / 10);
  
    // return Array
    //   .from({ length: numParts}, (n, i) => i * 10)
    //   .map((n, i, a) => arr.slice(n, a[i + 1]));
};