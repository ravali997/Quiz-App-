class Quiz{
    constructor(){

     this.image = loadImage("thankyou.png")
        
    }

    result(){
       // for incrementing the y position of every option
        var dp= 120  
        // for incrementing the y position of correct anwers
        var y=430

        // for the displaying the result in red if wrong ,and green if right
        for(var i=1; i< 11 ; i++){

            if(crtAns[i-1]=== options[i-1]){
                fill("green")
            }
            else{
                y=y+30
                textSize(17) 
                fill("green")
                text(i + " correct answers :    " +crtAns[i-1] ,130,y)
                fill("red")
               }

            textSize(17)
            text(i + " answer :  " + options[i-1], 130,dp)
            dp = dp+30
          
          }
          stroke("black")
          fill("orange");
          textSize(18) 
          text(contestantname + " * here is your result *" , 200, 40 );

          fill("teal")
          text("note:  !! correct answers are displayed in *green* color else in *red* !!",100,70)
          text("---------------------------------------------------------------------------------------------",100,85)
          stroke("red")
          fill("black")
          text("!* correct answers are here for wrong once *!",100,430)
          text("--------------------------------------------------------------",100,445)

          image(this.image,600,600,150,100)
    
    }
}