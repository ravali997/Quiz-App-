class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");

    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
   
  }
// for letting the player enter his/her name
  start(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    
    this.input1.position(400,200)
    this.button.position(290, 300);
    
    this.button.mousePressed(()=>{
          this.title.hide();

          contestantname = this.input1.value();
          console.log(contestantname)

          this.input1.hide();
        // this.display1();
          i=0
          console.log(arr[i])

          if(arr[i]===1){
            this.display1()
          }
          else if(arr[i]== 2){
            this.display2()
          }
          else if(arr[i]== 3){
            this.display3()
          }
          else if(arr[i]== 4){
            this.display4()
          }
          else if(arr[i]== 5){
            this.display5()
          }
          else if(arr[i]===6){
            this.display6()
          }
          else if(arr[i]== 7){
            this.display7()
          }
          else if(arr[i]== 8){
            this.display8()
          }
          else if(arr[i]== 9){
            this.display9()
          }
          else if(arr[i]== 10){
            this.display10()
          }
    
      

    })
  }
// for displaying questions one after the other

    display1 = function(){
    this.input2 = createInput("Enter option");
    this.input2.position(350, 230);
    
    quesNumber++
    this.question.html( quesNumber+" Question :- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(140, 80);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 140);
    this.option4.html("4: Example" );
    this.option4.position(150, 160);

    this.button.mousePressed(()=>{
      // ca1 is correct answer one getting pushed into crtAns array
      var  ca1 = "2";
      crtAns.push(ca1)
     // op1 is option one entered by player getting pushed into options array
     var op1 = this.input2.value();
     options.push(op1)
     console.log(op1)

     this.input2.hide()
     
     QA++
     if(QA<10){
        i++
        if(arr[i]===2){
          this.display2()
        }
        else if(arr[i]===3){
          this.display3()
        }
        else if(arr[i]== 4){
          this.display4()
        }
        else if(arr[i]== 5){
          this.display5()
        }
        else if(arr[i]===6){
          this.display6()
        }
        else if(arr[i]== 7){
          this.display7()
        }
        else if(arr[i]== 8){
          this.display8()
        }
        else if(arr[i]== 9){
          this.display9()
        }
        else if(arr[i]== 10){
          this.display10()
        }
      }
      else if(QA === 10){
        this.hidee();
        gameState= 1
      }
    });
  }

  display2 =function(){
 
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.input3 = createInput("Enter option")
    this.input3.position(350,230)

    quesNumber++
    this.question.html(quesNumber+" Question :- The Plaka is the oldest quarter of which city?" );
    this.question.position(140, 80);
    this.option1.html("1: Vienna " );
    this.option1.position(150, 100);
    this.option2.html("2: Prague" );
    this.option2.position(150, 120);
    this.option3.html("3: Rome " );
    this.option3.position(150, 140);
    this.option4.html("4: Athens" );
    this.option4.position(150, 160);

    this.button.mousePressed(()=>{
      var  ca2 = "4";
      crtAns.push(ca2)
      var op2= this.input3.value()
      options.push(op2)
      console.log(op2);

      
      this.input3.hide()
     // this.display3()
      QA++
      if(QA < 10){
      i++
      if(arr[i]===1){
        this.display1()
      }
      else if(arr[i]===3){
        this.display3()
      }
      else if(arr[i]== 4){
        this.display4()
      }
      else if(arr[i]== 5){
        this.display5()
      }
      else if(arr[i]===6){
        this.display6()
      }
      else if(arr[i]== 7){
        this.display7()
      }
      else if(arr[i]== 8){
        this.display8()
      }
      else if(arr[i]== 9){
        this.display9()
      }
      else if(arr[i]== 10){
        this.display10()
      }
    }
    else if(QA === 10){
      this.hidee();
      gameState= 1
    }
    });
  }

  display3=function(){

    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.input4 = createInput("Enter option")
    this.input4.position(350,230)
  
    quesNumber++
    this.question.html(quesNumber+" Question :- What is kudzu? " );
    this.question.position(140, 80);
    this.option1.html("1: Jewish settlement " );
    this.option1.position(150, 100);
    this.option2.html("2: Bird" );
    this.option2.position(150, 120);
    this.option3.html("3: Antelope " );
    this.option3.position(150, 140);
    this.option4.html("4: Climbing plant" );
    this.option4.position(150, 160);

    this.button.mousePressed(()=>{
      var  ca3 = "3";
     crtAns.push(ca3)
      var op3= this.input4.value()
      options.push(op3)
      console.log(op3);
      this.input4.hide()
    
      QA++
      if(QA < 10){
        i++
        
        if(arr[i]===1){
          this.display1()
        }
        else if(arr[i]===2){
          this.display2()
        }
        else if(arr[i]== 4){
          this.display4()
        }
        else if(arr[i]== 5){
          this.display5()
        }
        else if(arr[i]===6){
          this.display6()
        }
        else if(arr[i]== 7){
          this.display7()
        }
        else if(arr[i]== 8){
          this.display8()
        }
        else if(arr[i]== 9){
          this.display9()
        }
        else if(arr[i]== 10){
          this.display10()
        }
     }
        else if(QA === 10){
          this.hidee();
          gameState= 1
        }
    });
  }
  display4=function(){

    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.input5 = createInput("Enter option")
    this.input5.position(350,230)

    quesNumber++
    this.question.html(quesNumber+" Question :- Which US city is located on the Maumee River at Lake Erie? " );
    this.question.position(140, 80);
    this.option1.html("1: Detroit " );
    this.option1.position(150, 100);
    this.option2.html("2: Toledo" );
    this.option2.position(150, 120);
    this.option3.html("3: Cleveland " );
    this.option3.position(150, 140);
    this.option4.html("4: Buffalo" );
    this.option4.position(150, 160);

    this.button.mousePressed(()=>{

      var  ca4 = "2";
      crtAns.push(ca4)

      this.input5.hide()
      var op4= this.input5.value()
      options.push(op4)

      
      QA++
      i++
      if(QA < 10){
          if(arr[i]===1){
            this.display1()
          }
          else if(arr[i]===2){
            this.display2()
          }
          else if(arr[i]== 3){
            this.display3()
          }
          else if(arr[i]== 5){
            this.display5()
          }
          else if(arr[i]===6){
            this.display6()
          }
          else if(arr[i]== 7){
            this.display7()
          }
          else if(arr[i]== 8){
            this.display8()
          }
          else if(arr[i]== 9){
            this.display9()
          }
          else if(arr[i]== 10){
            this.display10()
          }
      }
      else if(QA === 10){
          this.hidee();
          gameState = 1
      }
      
    });
  }
  display5=function(){

    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.input6 = createInput("Enter option")
    this.input6.position(350,230)
    
    quesNumber++
    this.question.html(quesNumber+" Question :-Lisbon stands at the mouth of which river? " );
    this.question.position(140, 80);
    this.option1.html("1: Seine " );
    this.option1.position(150, 100);
    this.option2.html("2: Duoro" );
    this.option2.position(150, 120);
    this.option3.html("3: Rio Grande " );
    this.option3.position(150, 140);
    this.option4.html("4: Tagus" );
    this.option4.position(150, 160);

    this.button.mousePressed(()=>{

      var  ca5 = "4";
      crtAns.push(ca5)

      this.input6.hide()
      var op5= this.input6.value()
      options.push(op5)
      
      QA++
      i++
      if(QA < 10){
          if(arr[i]===1){
            this.display1()
          }
          else if(arr[i]===2){
            this.display2()
          }
          else if(arr[i]== 3){
            this.display3()
          }
          else if(arr[i]== 4){
            this.display4()
          }
          else if(arr[i]===6){
            this.display6()
          }
          else if(arr[i]== 7){
            this.display7()
          }
          else if(arr[i]== 8){
            this.display8()
          }
          else if(arr[i]== 9){
            this.display9()
          }
          else if(arr[i]== 10){
            this.display10()
          }
      }
      else if(QA === 10){
          this.hidee();
          gameState = 1
      }
    });
  }
  display6=function(){

    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.input7 = createInput("Enter option")
    this.input7.position(350,230)

    quesNumber++
    this.question.html(quesNumber+ " Question :- What is the longest river in France?" );
    this.question.position(140, 80);
    this.option1.html("1: Loire " );
    this.option1.position(150, 100);
    this.option2.html("2: Seine" );
    this.option2.position(150, 120);
    this.option3.html("3: Rhone " );
    this.option3.position(150, 140);
    this.option4.html("4: Gironde" );
    this.option4.position(150, 160);

    this.button.mousePressed(()=>{

      var  ca6 = "1";
      crtAns.push(ca6)

      this.input7.hide()
      var op6= this.input7.value()
      options.push(op6)

      QA++
      i++
      if(QA < 10){
          if(arr[i]===1){
            this.display1()
          }
          else if(arr[i]===2){
            this.display2()
          }
          else if(arr[i]== 3){
            this.display3()
          }
          else if(arr[i]== 4){
            this.display4()
          }
          else if(arr[i]===5){
            this.display5()
          }
          else if(arr[i]== 7){
            this.display7()
          }
          else if(arr[i]== 8){
            this.display8()
          }
          else if(arr[i]== 9){
            this.display9()
          }
          else if(arr[i]== 10){
            this.display10()
          }
      }
      else if(QA === 10){
          this.hidee();
          gameState = 1
      }
    });
  }

  display7=function(){

    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.input8 = createInput("Enter option")
    this.input8.position(350,230)
  
    quesNumber++
    this.question.html(quesNumber+" Question :- Galena is an ore of which metal? " );
    this.question.position(140, 80);
    this.option1.html("1: Copper " );
    this.option1.position(150, 100);
    this.option2.html("2: Lead" );
    this.option2.position(150, 120);
    this.option3.html("3: Zinc " );
    this.option3.position(150, 140);
    this.option4.html("4: Iron" );
    this.option4.position(150, 160);

    this.button.mousePressed(()=>{

      var  ca7 = "2";
      crtAns.push(ca7)

      this.input8.hide()
      var op7= this.input8.value()
      options.push(op7)
      
      QA++
      i++
      if(QA < 10){
          if(arr[i]===1){
            this.display1()
          }
          else if(arr[i]===2){
            this.display2()
          }
          else if(arr[i]== 3){
            this.display3()
          }
          else if(arr[i]== 4){
            this.display4()
          }
          else if(arr[i]===5){
            this.display5()
          }
          else if(arr[i]== 6){
            this.display6()
          }
          else if(arr[i]== 8){
            this.display8()
          }
          else if(arr[i]== 9){
            this.display9()
          }
          else if(arr[i]== 10){
            this.display10()
          }
      }
      else if(QA === 10){
          this.hidee();
          gameState = 1
      }
    });
  }

  display8=function(){

    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.input9 = createInput("Enter option")
    this.input9.position(350,230)
  
    quesNumber++
    this.question.html(quesNumber+" Question :- Which sign of the zodiac comes between Leo and Libra? " );
    this.question.position(140, 80);
    this.option1.html("1: Virgo " );
    this.option1.position(150, 100);
    this.option2.html("2: Taurus" );
    this.option2.position(150, 120);
    this.option3.html("3: Aries " );
    this.option3.position(150, 140);
    this.option4.html("4: Capricorn" );
    this.option4.position(150, 160);

    this.button.mousePressed(()=>{

      var  ca8 = "1";
      crtAns.push(ca8)

      this.input9.hide()
      var op8= this.input9.value()
      options.push(op8)
      
      QA++
      i++
      if(QA < 10){
          if(arr[i]===1){
            this.display1()
          }
          else if(arr[i]===2){
            this.display2()
          }
          else if(arr[i]== 3){
            this.display3()
          }
          else if(arr[i]== 4){
            this.display4()
          }
          else if(arr[i]===5){
            this.display5()
          }
          else if(arr[i]== 6){
            this.display6()
          }
          else if(arr[i]== 7){
            this.display7()
          }
          else if(arr[i]== 9){
            this.display9()
          }
          else if(arr[i]== 10){
            this.display10()
          }
      }
      else if(QA === 10){
          this.hidee();
          gameState = 1
      }
    });
  }

  display9=function(){

    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.input10 = createInput("Enter option")
    this.input10.position(350,230)
  
    quesNumber++
    this.question.html(quesNumber+" Question :- Which planet is said to influence the way we communicate? " );
    this.question.position(140, 80);
    this.option1.html("1: Venus " );
    this.option1.position(150, 100);
    this.option2.html("2: Mercury" );
    this.option2.position(150, 120);
    this.option3.html("3: Mars " );
    this.option3.position(150, 140);
    this.option4.html("4: Saturn" );
    this.option4.position(150, 160);

    this.button.mousePressed(()=>{

      var  ca9 = "2";
      crtAns.push(ca9)

      this.input10.hide()
      var op9= this.input10.value()
      options.push(op9)
      
      QA++
      i++
      if(QA < 10){
          if(arr[i]===1){
            this.display1()
          }
          else if(arr[i]===2){
            this.display2()
          }
          else if(arr[i]== 3){
            this.display3()
          }
          else if(arr[i]== 4){
            this.display4()
          }
          else if(arr[i]===5){
            this.display5()
          }
          else if(arr[i]== 6){
            this.display6()
          }
          else if(arr[i]== 7){
            this.display7()
          }
          else if(arr[i]== 8){
            this.display8()
          }
          else if(arr[i]== 10){
            this.display10()
          }
      }
      else if(QA === 10){
          this.hidee();
          gameState = 1
      }
    });
  }

  display10=function(){

    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.input11 = createInput("Enter option")
    this.input11.position(350,230)
  
    quesNumber++
    this.question.html(quesNumber+" Question :- What type of cheese is Stilton? " );
    this.question.position(140, 80);
    this.option1.html("1: Blue " );
    this.option1.position(150, 100);
    this.option2.html("2: Green" );
    this.option2.position(150, 120);
    this.option3.html("3: Hard " );
    this.option3.position(150, 140);
    this.option4.html("4: Mouldy" );
    this.option4.position(150, 160);

    this.button.mousePressed(()=>{

      var  ca10 = "1";
      crtAns.push(ca10)

      this.input11.hide()
      var op10= this.input11.value()
      options.push(op10)
      
      QA++
      i++
      if(QA < 10){
          if(arr[i]===1){
            this.display1()
          }
          else if(arr[i]===2){
            this.display2()
          }
          else if(arr[i]== 3){
            this.display3()
          }
          else if(arr[i]== 4){
            this.display4()
          }
          else if(arr[i]===5){
            this.display5()
          }
          else if(arr[i]== 6){
            this.display6()
          }
          else if(arr[i]== 7){
            this.display7()
          }
          else if(arr[i]== 8){
            this.display8()
          }
          else if(arr[i]== 9){
            this.display9()
          }
      }
      else if(QA === 10){
          this.hidee();
          gameState = 1
      }
    });
  }


// for hiding all the elements and buttons if all the questions are answered

  hidee(){
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.button.hide()
    this.input1.hide();
    this.input2.hide();
    this.input3.hide();
    this.input4.hide();
    this.input5.hide();
    this.input6.hide();
    this.input7.hide();
    this.input8.hide();
    this.input9.hide();
    this.input10.hide();
    this.input11.hide();
  }
  
}




