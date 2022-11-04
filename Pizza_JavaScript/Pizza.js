function getReceipt() {
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    //This variable creates the running total which will be displayed
    //once the order is placed
    var runningTotal = 0;
    //This sets up a count of the size ordered
    var sizeTotal = 0;
    //This creates an array and function to add to the string, including
    //the length of the array and gathering the size information to
    //display at the end
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    //So far, the running total includes only the size count
    runningTotal = sizeTotal;
    //The string is created in the console
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //These variables will get passed on to each function
    getTopping(runningTotal, text1);
};

//This function continues using runningTotal and the string
function getTopping(runningTotal, text1) {
    //This counts the number of toppings
    var toppingTotal = 0;
    //Collects the topping name to display at the end
    var selectedTopping = [];
    //Creates an array using the selected toppings
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            //Adds selected toppings to the array
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            //Adding new info to the string
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    //Counts the number of toppings
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        //Because of the "discount" shown at the end, the
        //toppingTotal is equal to the number of toppings
        //chosen minus 1 IF more than 1 topping is selected
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    //Updates runningTotal to include the toppingTotal
    runningTotal = (runningTotal + toppingTotal);
    //Creates a longer string to include in the calculations
    console.log("total selected toppings: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    //Displays the updated string
    document.getElementById("showText").innerHTML = text1;
    //Displays a total price after doing calculations
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}