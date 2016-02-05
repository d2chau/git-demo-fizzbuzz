export class MainController {
  constructor () {
    'ngInject';

    this.numberNWordMap = new Map();
    this.collections = [];
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

  initMappings() {
    this.numberNWordMap.set(3, "Fizz");
    this.numberNWordMap.set(5, "Buzz");
  }

  showFizzBuzz() {
    this.initMappings();
    for ( var i=0; i<100; i++ ) {
      var tempWord = "";

      for (var [key, value] of this.numberNWordMap ) {
        if ( i % key == 0 ) {
          tempWord = tempWord + value
        }
      }
      if( tempWord == "") {
        tempWord = i.toString();
      }
      console.log(tempWord);
      this.collections.push(tempWord);
    }
  }
}
