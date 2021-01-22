
function RecipeBuilder(list_1, list_2 ) {  
    this.list_1 = list_1
    this.list_2 = list_2
  }


  RecipeBuilder.prototype.listMaker = function() {

        var recipeChecklist= document.getElementsByClassName('reciepe-list');
        var ulElement = document.createElement('ul')

        console.log()
        for(var i = 0; i <= this.ist_1.length; i++ ) {
            var liElement = document.createElement('li')
        
             liElement.textContent = this.ist_1[i];
            ulElement.appendChild(liElement)
    }
    recipeChecklist.appendChild(ulElement)
}

  list_1 = ["List 1","List 1","List 1","List 1"]
  list_2 = ["List 2", "List 2", "List 2"]

  var StoreConstructor = new RecipeBuilder(list_1, list_2)
  StoreConstructor.listMaker()
    
  


recipeChecklist.addEventListener('click', function () {
    console.log('list was clicked');

    // If the click is odd then off if the click is even on
    // get the ID and Scratch out on the HTML when clicked
    
    // storeBuilder.prototype.salesData = function() {

    
  });
