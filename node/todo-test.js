const axios= require('axios');
const getTodos=()=>{
//const url="http://jsonplaceholder.typicode.com/todos/185";
//const url="http://jsonplaceholder.typicode.com/users/5";
//const url="http://universities.hipolabs.com/search?country=United+Kingdom/"
//const url="http://jsonplaceholder.typicode.com/comments?postId=3"
const url="https://dog.ceo/api/breeds/image/random"
console.log('making API call');
return axios
.get(url)

.then((response) => {
  var newForm=[]
  for(i in response.data)
  newForm.push(i,response.data[i])
  console.log(newForm)

console.log(response.data);
})
.catch((error)=>{
    console.log('received API response');
    console.error(error);
});
};
console.log("---------------Before making API call------------");
getTodos();
console.log("-------------After receiving API-------------")

/*const products = [
    { name: 'apples', category: 'fruits' },
    { name: 'oranges', category: 'fruits' },
    { name: 'potatoes', category: 'vegetables' }
  ];
const groupByCategory = {
    'fruits': [
      { name: 'apples', category: 'fruits' }, 
      { name: 'oranges', category: 'fruits' },
    ],
    'vegetables': [
      { name: 'potatoes', category: 'vegetables' }
    ]
  };

  const groupByCategory1 = products.reduce((group, product) => {
    const { category } = product;
    group[category] = group[category] ?? [];
    group[category].push(product);
    return group;
  }, {});
  console.log(groupByCategory1);

  const groupByCategory2 = products.groupBy(product => {
    return product.category;
  });
  console.log(groupByCategory2); */


//var list = [1.1 ,1.4, 2.1, 2.3];
 
//var result = _.groupBy(list, Math.floor);
//console.log(result);

// result = _.groupBy(['one', 'two', 'three'], 'length');
// console.log(result);




