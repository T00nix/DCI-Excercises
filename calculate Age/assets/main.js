function calculateAge (animal, animalAge){
  
    if (animal == 'dog'){
     let n = (animalAge * 7);
      console.log('Your '+ animal +' is ' + n + ' years old in human years');
      document.getElementById('calcAge').innerHTML='Your '+ animal +' is ' + n + ' years old in human years';
    } else if (animal == 'cow'){
     let n = animalAge * 14;
      console.log('Your cow is ' + n + ' years old in human years');
      document.getElementById('calcAge').innerHTML='Your '+ animal +' is ' + n + ' years old in human years';
    } else if (animal == 'chinchilla'){
     let n = animalAge * 25;
      console.log('Your chinchilla is ' + n + ' years old in human years');
      document.getElementById('calcAge').innerHTML='Your '+ animal +' is ' + n + ' years old in human years';
    } else {
      console.log('I dont know that animal, Sorry!')
      document.getElementById('calcAge').innerHTML='Sorry, I dont  know that animal yet. Please try another'
    }
  }
  
  calculateAge('cow', 10)