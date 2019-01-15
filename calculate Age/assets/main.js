function calculateAge (animal, animalAge){
  
    if (animal == 'dog'){
     let n = (animalAge + 7);
      console.log('Your '+ animal +' is ' + n + ' years old in human years');
      document.getElementById('calcAge');
    } else if (animal == 'cow'){
     let n = animalAge + 14;
      console.log('Your cow is ' + n + 'years old in human years')
    } else if (animal == 'chinchilla'){
     let n = animalAge + 25;
      console.log('Your chinchilla is ' + n + ' years old in human years')
    } else {
      console.log('?')
    }
  }
  
  calculateAge('chinchilla', 32)