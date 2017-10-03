
//Start game when radio button is clicked and the disable it.
//Make gameboard visible only when user selects the mark
//Based on each click the user makes.That character would be drawn on that tile.


$(document).ready(function(){
    var matrix = [['','',''],
                  ['','',''],
                  ['','','']];

                  // [0,1,2]
                  // [3,4,5]
                  // [6,7,8]

    var radioValue;
    //get value of radio button
    $("input:radio").change(function(){

        radioValue = $(this).val();
        $("[name = mark]").attr("disabled","true");

        // $(this).closest("ul").attr("visibility","hidden");  

        const userMark = radioValue;
        const computerMark = userMark == '0' ?  'X' : '0';

        $(".tile").click(function(){

            $(this).text(userMark);
            //When I click the variable should also be stored 
            var indexOfMarked = $(this).parent().index() + 1; //between 1-9(inclusive) 
            //Compute Position in matrix using index
            
            //  1 -> 0,0 ; 2 -> 0,1 ; 3 -> 0,2 
            //  4 -> 1,0 ; 5 -> 1,1 ; 6 -> 1,2
            //  7 -> 2,0 ; 8 -> 2,1 ; 9 -> 2,2 
            // indexOfMarked  = firstIndex * 3 + secondIndex + 1

            //computing second index
            var remainder = indexOfMarked % 3;
            var secondIndexOfMatrix = remainder == 0 ? 2 : remainder == 2 ? 1 : 0;
            var firstIndexOfMatrix = (indexOfMarked - secondIndexOfMatrix - 1)/3;
            matrix[firstIndexOfMatrix][secondIndexOfMatrix] = userMark;


            //Second chance is of computer
            //For the time being let the computer play Randomly
            //generating a random number between 1 and 9 and if it's not occupied play it

            var randomPosition = Math.ceil(Math.random()*9);
            






        })



        


      
    })
});


