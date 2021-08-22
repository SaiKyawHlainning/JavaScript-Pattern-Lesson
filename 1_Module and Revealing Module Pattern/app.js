// // Standard Module Pattern
// const UserControl = (function () {
//   const newText = 'New Text';

//   const changeText = function () {
//     document.getElementById('p').textContent = newText;
//   };

//   return {
//     callChangeText: function () {
//       changeText();
//     },
//   };
// })();

// // console.log(UserControl.newText);
// // changeText();

// UserControl.callChangeText();

// Revealing Module Pattern
// const ItemControl = (function () {
//   let data = [];

//   function add(item) {
//     data.push(item);
//   }

//   function get(id) {
//     return data.find((item) => {
//       return item.id === id;
//     });
//   }

//   return {
//     add: add,
//     get: get,
//   };
// })();

// ItemControl.add({ id: 1, name: 'Car' });
// ItemControl.add({ id: 2, name: 'Computer' });
// ItemControl.add({ id: 3, name: 'Smart Phone' });

// console.log(ItemControl.get(3));
