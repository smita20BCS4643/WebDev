// alert("Connected");

// example 1 
// grab the element - getting reference of btn

document
.getElementById("Chng-btn")
.addEventListener("click",  function (){
    // to effect on paragraph

  let para =  document.getElementById("myParagraph");
//   console.log(para);

//   console.log(para.textContent);
  
  para.textContent = "Hey Hi...";
  
    
});
 
// example 2

document
.getElementById("HighlightFirstCity")
.addEventListener("click", function()
{
//     let CityFirst = document.getElementById("Firsthighlight");
//     console.log(CityFirst);

//     // other way to get first element

    let citiesLit = document.getElementById("citiesList");
    console.log(citiesLit);

    // this point to whole unorder list but we want only first item / city

   console.log(citiesLit.firstElementChild);
   
 
   citiesLit.firstElementChild.classList.toggle("highlight")  
    
})


//example 3 
document.getElementById("ChangeOrder")
.addEventListener("click", function()
{
    let change = document.getElementById("coffeeType")

    change.textContent = "expresso";

    change.style.backgroundColor = "Blue";
    change.style.padding = "5px";

})

// example 5

document.getElementById("addNewItem")
.addEventListener("click", function()
{
    let newItem = document.createElement('li')
    newItem.textContent = "Eggs";

    let additem = document.getElementById("ShoppingList").appendChild(newItem);
    console.log(additem);

    additem.add
    
})

document
.getElementById("removeLastTask")
.addEventListener("click", function()
{


    let ListRm = document.getElementById("taskList");

    // ListRm.remove(); // remove everything

    ListRm.lastElementChild.remove();
})


// example 6


document
.getElementById("ClickMeButton")
.addEventListener("dbclick", function()
{
  alert("here is alert");
})

// example 7
document
.getElementById("teaList")
.addEventListener("click", function(event)
{
   if(event.target && event.target.matches('.teaitem'));
   
   alert("You selected:" + event.target.textContent);
})


//form handaling example 8

document.getElementById("feedbackForm")
.addEventListener('submit', function(event)
{
  event.preventDefault();
  let feedback = document.getElementById("feedbackInput").value;
  console.log(feedback);
  
  document.getElementById("feedbackDisplay").textContent = `Your feedback is: ${feedback}` ;

  
})

// example 9

document
.addEventListener("DOMContentLoaded", function()
{
  document.getElementById('domStatus').textContent = "Dom Fully Loaded!";
})

// example 10 css class manipulation

document.getElementById("toggleHighlight")
.addEventListener("click", function()
{
  let descriptionText = document.getElementById("descriptionText");
      descriptionText.classList.toggle("highlight")  


})
