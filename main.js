

  //Clean

  function longest(s1, s2) {
    s1 = s1.split("");
    s2 = s2.split("");

    let newS = s1.concat(s2);

    newS = newS.sort();

    let resultS = [];

    for (let i = 0; i < newS.length; i++) {
      if (resultS.indexOf(newS[i]) === -1) {
        resultS.push(newS[i]);
      }
    }

    resultS = resultS.join("");

    return resultS;
  }


//Noted Version

function longest(s1, s2) {
  //first split apart the string
  s1 = s1.split("");
  s2 = s2.split("");
  //a new variable will hold the value of both strings in one

  let newS = s1.concat(s2);
  //return the concatanated string, no particular order
  newS = newS.sort();

  let resultS = [];

  //iterate checking the length of the index b/c the new string can only be as long
  //as each string allows, without repeating letters
  for (let i = 0; i < newS.length; i++) {
    if (resultS.indexOf(newS[i]) === -1 {
        //if there is an element matching at the current index position for both strings
        //store the elements at that index
        resultS.push(newS[i]);
      }
    }
    //join the array into a string and return the string
    ansS = ansS.join("");
    //return the new sorted string w/ the max. legth possible, only using distinct letters from each string
    return ansS;
  }
