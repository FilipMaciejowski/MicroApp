const numbers = [7, 10, 2, 6, 11, 3];

const getHighestProduct = (arr) => {

    const reducer = ((acc, curr) => acc * curr)

    const sortedArray = arr.sort((a, b) =>  {
        return a - b;
    })
    
  return sortedArray.slice(sortedArray.length - 3, sortedArray.length).reduce(reducer)
  
}

console.log(getHighestProduct(numbers));




