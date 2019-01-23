const food = ['cow', 'potato', 'chicken', 'corn']
var cook = food => {
  switch(food) {
    case 'cow':
      return 'burger';
    break;
    case 'potato':
      return 'pommes';
    break;
    case 'chicken':
      return 'chicken nugget';
    break;
    case 'corn':
      return 'popcorn';
  }
}
console.log(food.map(cook))


const food2 = ['burger', 'pommes', 'chicken nugget', 'popcorn']
function isVeg(food2) {
    if (food2 === "pommes" || food2 === "popcorn") {
      return food2;
    }
  }

console.log(food2.filter(isVeg));

const hits = [2, 4, 7, 12, 15, 18, 199];

const sum = function(sum, acc){
    return sum + acc
}

console.log(hits.reduce(sum,0))

document.getElementById("cooking").innerHTML = `
<strong>Food:</strong>  ${food.map(cook)}
<br/>
<strong>Veggie Option:</strong> ${food2.filter(isVeg)}
<br/>
<strong>Sum:</strong> ${hits.reduce(sum,0)}
`;


// v START OF THE TABLE PROJECT v

const contacts = [
    [
      'Justus',
      'Jonas',
      [
        'justus@mail.com'
      ]
    ],
    [
      'Peter',
      'Shaw',
      [
         'peter.shaw@mail.com',
         'peter.shaw@mail.de',
      ]
    ],
    [
      'Bob',
      'Andrews',
      [
         'bob.andrews@mail.com',
         'bob.andrews@mail.de',
      ]
    ]
  ];
  



// v Print everything into the HTML tables v
  document.getElementById("table").innerHTML = `
  <table class="table table-striped table-bordered">
  <tr>
    <th>First name</th>
    <th>Last name</th> 
    <th>Email adresses</th>
  </tr>
  ${contacts.map(singleContact => `<tr>${singleContact.map(contactInfo => `<td>${contactInfo}</td>`)}</tr>`)}
  </table>
  `;
  