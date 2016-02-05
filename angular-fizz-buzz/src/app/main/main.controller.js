export class MainController {

  constructor ($log) {
    'ngInject';
  }

  basicFizzBuzz() {
    var tempWord;
    var basicResults = [];

    for ( var i=0; i<100; i++ ) {
      if( i % 3 != 0 && i % 5 != 0) {
        basicResults.push( i.toString() );
      } else {
        tempWord = "";
        if( i % 3 == 0) {
          tempWord = tempWord + "Fizz";
        }
        if( i % 5 == 0) {
          tempWord = tempWord + "Buzz";
        }
        basicResults.push(tempWord);
      }
    }

    basicResults.forEach( function (entry) {
      console.log(entry);
    });
  }


}
