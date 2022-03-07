/**
 * @author Samuel Wanjare
 * @license MIT
 * @description The app may be used, modified and recopied freely without the author's 
 * authorizarition just be human and credit the author
 */

const previousOperandTextElement = document.querySelector(".display-operations");
const currentOperandTextElement = document.querySelector(".display-operations1");

//  Close the app
let container = document.querySelector(".container");

let close = document.querySelector("#exit-application");
close.addEventListener("click", function close(){
   let close = confirm("Are you sure you want to exit this App?");
   if (close){
       window.close();
       location.replace("./blank.html");
   }
   
});


/**
 * @function All
 * @description All the Mathematical functions are found here
 */

//Maths class with all maths functions
class Maths{
    firstValue; 
    secValue;
    
    constructor(firstValue,secValue){
        this.firstValue = firstValue;
        this.secValue = secValue;
        this.clear()
    }

    appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

    clear(){
        this.firstValue = '';
        this.secValue = '';
        //this.operand = undefined;
    }

    addition(){
        const results = this.firstValue + this.secValue;
        $(".display-answer").text(results);
    }
    subtraction(){
        const results = this.firstValue - this.secValue;
        $(".display-answer").text(results);
    }
    mult(){
        const results = this.firstValue * this.secValue;
        $(".display-answer").text(results); 
    }
    division(){
        const results = this.firstValue / this.secValue;
        $(".display-answer").text(results);  
    }

    //with one argument
    root(){
        const results = Math.sqrt(this.firstValue);
        $(".display-answer").text(results); 
    }
    sqr(){
        const results = this.firstValue**2;
        $(".display-answer").text(results);
    }
}


// Clicking buttons
/* for upper row */
$(function(){
    
    $("#absolute").click(()=>{
        result = Math.abs($(".display-operations").text());
        $(".display-answer").text(result);
        $(".display-operations").text("abs("+$(".display-operations").text()+")");

    });
    $("#sqr-root").click(()=>{
        result = Math.sqrt($(".display-operations").text());
        $(".display-answer").text(result);
        $(".display-operations").html("&radic;"+$(".display-operations").text());
    });
    $("#cube-root").click(()=>{
        result = Math.cbrt($(".display-operations").text());
        $(".display-answer").text(result);
        $(".display-operations").html("&#8731;"+$(".display-operations").text());
    });
    $("#log").click(()=>{
        result = Math.log10($(".display-operations").text());
        $(".display-answer").text(result);
        $(".display-operations").html("Log<sub>10</sub>"+$(".display-operations").text());

    })
    $("#ln").click(()=>{
        result = Math.log($(".display-operations").text());
        $(".display-answer").text(result);
        $(".display-operations").html("Ln<sub>10</sub>"+$(".display-operations").text());
    });
    $("#square").click(()=>{
        const sqr = $(".display-operations").text()**2;
        $(".display-answer").text(sqr);
        $(".display-operations").html($(".display-operations").text()+"<sup>2</sup>");
    });
    $("#cube").click(()=>{
    const cube = $(".display-operations").text()**3;
    $(".display-answer").text(cube);
    $(".display-operations").html($(".display-operations").text()+"<sup>3</sup>");
});
    $("#sin").click(()=>{
        const results = Math.sin($(".display-operations").text());
        $(".display-answer").text(results);
        $(".display-operations").html("Sin "+$(".display-operations").text());
    });
    $("#tan").click(()=>{
        const results = Math.tan($(".display-operations").text());
        $(".display-answer").text(results);
        $(".display-operations").html("Tan "+$(".display-operations").text());
    });
    // $("#cos").click();
    // $("#deg").click();
    // $("#rad").click();
    // $("#sine-inverse").click();
    // $("#tan-inverse").click();
    // $("#cos-inverse").click()
    // $("#factorial").click()
    // $("exponent").click()
    // $("#power").click()
    // $("#combination").click()
    // $("#permutation").click()
    // $("#convert-to-fraction").click()
    // $("#absolute").click()
    // $("#absolute").click()
    // $("#absolute").click()
    // $("#absolute").click()
});

/* for lower row */
//buttons
$(function(){
    let numKeys = document.querySelectorAll("#numkey");
    numKeys.forEach(function(key, index, arr){
        $($(key)).click(()=>{
            $(".display-operations").html()+$(".display-operations").append($(arr[index]).text());
            
            
            console.log($(".display-operations").text($(key).text()));
        })
    })

});




$(function(){
   $("#clear").click(()=>{
   $(".display-operations").text("0");
   $(".display-answer").text("0");

   });
});


/**
 * @description All app operations are found below
 */

// $(function(){
//     let buttons=$(".lower-right-buttons").children();
//     buttons.forEach((button,index,arr)=>{
//         console.log($(button)[0].val())
//     });
// });