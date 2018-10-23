/*############################################################################################################*/
/*#																											 #*/
/*# Author: 		Jorge Martin Joven 																		 #*/
/*# Contact: 		jmartinjoven@gmail.com 																	 #*/
/*# Website: 		www.jorgemartinjoven.dx.am 																 #*/
/*# Date: 			October 10th, 2018																		 #*/
/*# Description: 	This program allows the user to randomly select recipes according to input parameters    #*/
/*#				(number and kind of recipes) form a storing object. The user can also add his or her own     #*/
/*#				recipes that will be considered in the random selection of recipes. Since this is a   		 #*/
/*#				front-end project, the recipes as stored in the 'localStorage' of the browser.		    	 #*/
/*#				 																						     #*/
/*############################################################################################################*/

/* ######## SETUP FUNCTION: ################################################################################# 
   # This function sets up the browser so the program can run adequately.									# 
   # It loads the object 'recipes' to the localStorage as soon as the window loads.							# 		   
   ########################################################################################################## */

window.onload = function() {
	if (!localStorage.getItem(recipes)){
		localStorage.setItem('recipes', JSON.stringify(recipes));	
	}
}

/* ######## PROTOTYPES: ######################################################################################## 
   # These two prototypes ('inputRecipe' and 'displayRecipe') hold, respectively, the required values to 	   # 
   # the object that will hold new recipe to be stored in 'recipes' and to display a recipe from 'recipes'.	   # 		   
   ############################################################################################################ */

//INPUT OBJECT: Holds the properties that will be stored in 'recipes'.
const inputRecipe = {
	init: function(arr) {
			this.id= (Object.keys(JSON.parse(localStorage.recipes)).length) + 1,
			this.name= arr[0],
			this.kind= arr[1],
			this.time= arr[2],
			this.ingredients= arr[3],
			this.preparation= arr[4]
		},

	id: this.id,
	name: this.name,
	kind: this.kind,
	time: this.time,
	ingredients: this.ingredients,
	preparation: this.preparation
}

//OUTPUT OBJECT: Display a recipe in the browser taken from 'recipes'.
const displayRecipe = {
  	init: function(recipe) {
  		this.id = recipe.id,
  		this.name = recipe.name,
	  	this.kind = recipe.kind,
	  	this.time = recipe.time,
	  	this.ingredients = recipe.ingredients,
	  	this.preparation = recipe.preparation
	},

  	newRecipe: function() {
  		let containerRcp = document.createElement('div');
		containerRcp.className = 'containerRcp';
		containerRcp.setAttribute('id', 'rcp'+ this.id);
		containerRcp.innerHTML = '<button class= "rcpName" id="name'+ this.id +'" type="button" onclick= "showDescription(' + this.id +')">' + this.name + '</button>' 
		return document.getElementById('listRecipes').appendChild(containerRcp); 
  	},

  	rcpTime: function() {
  		let rcpTime = document.createElement('p');
		rcpTime.className = 'rcpTime';
		rcpTime.setAttribute('id', 'time'+ this.id);
		rcpTime.innerHTML =  this.time + " mins";
		return $('#rcp'+this.id).append(rcpTime);
  	},

  	rcpKind: function() {
  		let rcpKind = document.createElement('p');
		rcpKind.className = 'rcpKind';
		rcpKind.setAttribute('id', 'kind'+ this.id);
		rcpKind.innerHTML =  this.kind;
		return $('#rcp'+this.id).append(rcpKind);
  	},

  	rcpDescription: function() {
  		let rcpDescription = document.createElement('div');
		rcpDescription.className = 'rcpDescription';
		rcpDescription.setAttribute('id', 'descript' + this.id);
		return $('#rcp'+this.id).append(rcpDescription);
  	},

  	rcpIngredients: function() {
	  	let ingredientsList = document.createElement('ul');
		ingredientsList.className = 'ingredientsList';
		ingredientsList.setAttribute('id', `ul${this.id}`)
		let ingredientsArr = this.ingredients.split(', ');

		for (let i = 0; i < ingredientsArr.length; i++) {

			let li = document.createElement('li');
			let textNode = document.createTextNode(ingredientsArr[i]);
			li.appendChild(textNode);
			
			ingredientsList.appendChild(li);
		}	
		return $('#descript'+this.id).append(ingredientsList);	
	},

	rcpPreparation: function() {
		let rcpPreparation = document.createElement('p');
		rcpPreparation.className = 'rcpPreparation';
		rcpPreparation.innerHTML =  this.preparation;
		return $('#descript' + this.id).append(rcpPreparation);
	}
}

/* ######## OUTPUT FUNCTIONS: ############################################################################### 
   # These functions are used to display recipes from 'recipes' to the DOM.  								# 
   ########################################################################################################## */

//OUTPUT: In 'kind' recipes, it unchecks 'All' whenever any other option is checked. 
let uncheckAll = () => document.getElementsByName('kindRecipes')[0].checked=false;

//OUTPUT: In 'kind' recipes, it unchecks every kind whenever 'All' is checked.
function uncheckEveryKind(){
	let kindRecipes = document.getElementsByName('kindRecipes');

	for(i= 1; i < kindRecipes.length; i++){
		kindRecipes[i].checked = false;
	}
}

//OUTPUT: Takes the number of recipes, the kind of recipes, selects the recipes, and displays them in the browser.
function displayRcp(){	
  	let numRcpFinalOut = numRcpOut(); 
	let kndRcpFinalOut = kndRcpOut();

	if (isProperNumRcp(numRcpFinalOut, kndRcpFinalOut)) {						/* VALIDATION FUNCTION */
		let rcpFinalOut = rcpSelectorOut(numRcpFinalOut, kndRcpFinalOut); 
		return jsonParseRcp(rcpFinalOut);
	}
	else {
		alert("Select a smaller number of recipes, please.");
	}		
}

//OUTPUT: Takes in the number of recipes the user wants to be displayed.
function numRcpOut() {
	let numRcpOut;
	let a = document.getElementsByName('numRecipes');

	for(let i= 0; i < a.length; i++){
		if(a[i].checked == true){
			numRcpOut = a[i].value;
		}
	}
	return numRcpOut;
}

//OUTPUT: Takes in the kind/kinds of recipes the user wants to be displayed.
function kndRcpOut() {
	let everyKind = ["Soup", "Salad", "Meat", "Fish", "Legumes", "Rice", "Pasta", "Vegetables/Fruit", "Dessert", "Bread/Baked"];
	let kndRcpOut = [];
	let a = document.getElementsByName('kindRecipes');	
	
	if (a[0].checked == true) {
		kndRcpOut += everyKind;
	}
	else{
		for(let i= 1; i < a.length; i++){
			if(a[i].checked == true){
				kndRcpOut.push(a[i].value);
			}
		}
	}
	return kndRcpOut;
}

//OUTPUT: Holds the 'ID's' of the recipes (randomly selected) that will be displayed.
function rcpSelectorOut(num, arr) {
	RcpIdArrOut= [];
	
	while(RcpIdArrOut.length < num) {
		let totalNumRcp = (Object.keys(JSON.parse(localStorage.recipes)).length);
		let x = randomID(totalNumRcp);

		if ((RcpIdArrOut.includes(x) == false) && (isInputKind(x, arr) == true)) {  
			RcpIdArrOut.push(x);
		}	
	}
	return RcpIdArrOut;
}

//OUTPUT: Generates a random number. This number will be the ID of the recipe. 
let randomID = (int) => Math.floor((Math.random() * int) + 1);

//OUTPUT: Checks if the selected recipe is the kind the user wants.
function isInputKind(num, arr) {
	let recipes = JSON.parse(localStorage.getItem('recipes'));

	if (arr.includes(recipes[num].kind)) {
		return true;
	}
	else {
		return false;
	}
}

//OUTPUT: Parses the recipes from 'recipes' and initiates each of them.
function jsonParseRcp(array){
	
	if ($('#listRecipes').is(':empty') === false){				// Clears the HTML element '#listRecipes' before 
		$('#listRecipes').html('');								// displaying a new set of recipes on the DOM.
	}

	for(let i= 0; i < array.length; i++){
		let rcp = JSON.parse(localStorage.recipes)[array[i]];

		showRcp = Object.create(displayRecipe);
		showRcp.init(rcp);
			showRcp.newRecipe();
			showRcp.rcpTime();
			showRcp.rcpKind();
			showRcp.rcpDescription();
			showRcp.rcpIngredients();
			showRcp.rcpPreparation();
	}
}

/* ######## INPUT FUNCTIONS: ################################################################################ 
   # These functions are used to add a new recipe to 'recipes'.												# 
   ########################################################################################################## */

//INPUT: This function get the input values and store them in 'localStorage'.
function submitRcp(){
	let arrRcpIn = [];
	let elements = ['rcp-name', 'addSlctKind', 'cook-time', 'ingrdntIn', 'preparationIn'];
	
	let newRcpIn = Object.create(inputRecipe);
	let nextRecipeId = Object.keys(JSON.parse(localStorage.recipes)).length + 1;
	let recipeList = JSON.parse(localStorage.getItem('recipes'));
	
	for(var i= 0; i < elements.length; i++){
		arrRcpIn.push(document.getElementsByName(elements[i])[0].value);	
	}

	if (isItemEmpty(arrRcpIn) && isTimeAnInt(arrRcpIn) && isNewRecipe(arrRcpIn)) {	/*VALIDATION FUNCTIONS*/

		newRcpIn.init(arrRcpIn);
		recipeList[nextRecipeId]= newRcpIn;
		localStorage.setItem('recipes', JSON.stringify(recipeList));

		if (isItemAdded(newRcpIn)) {												/*VALIDATION FUNCTION*/
			alert("Your recipe was added successfully!");
		}
		else{
			alert("Your recipe couldn't be added.");
		}

		clearAddRecipeFields();
	}
}

//INPUT: This function reset the fields of the 'Add Recipe' form.
let clearAddRecipeFields = () => document.getElementById('addRecipeForm').reset();


/* ######## VALIDATION FUNCTIONS: ########################################################################### 
   # These functions are used to guarentee that the user introduces valid data.      						# 
   ########################################################################################################## */

//Checks if there is any empty field in 'Add Recipe' form before it is submitted and added to 'recipes'.
function isItemEmpty(arr) {

	for (let i= 0; i < arr.length; i++) {

		if (arr[i] === "") {
			alert("Please, complete all fields.");
			return false;
		}
	}
	return true;
}

// Checks if the value introduced by the user in 'Cooking Time' is a number.
function isTimeAnInt(arr) {

	if (isNaN(arr[2])) {
		alert("'Cooking time' must be a number representing minutes. e.g. '90'.");
		return false;
	} 
	else {
		return true;
	}
}

// Checks if the new recipe has the same name as any other recipe stored in 'recipes'.
function isNewRecipe(arr) {
	let recipesLength = Object.keys(JSON.parse(localStorage.recipes)).length;

	for (i= 1; i <= recipesLength; i ++) {
		let currentRcp = JSON.parse(localStorage.getItem('recipes'))[i];
		
		if (arr[0] == currentRcp.name) {
			alert("That recipe already exist. Please, introduce a new recipe.");
			return false;
		}
	}
	return true;
}

// Checks if the new recipe has been added to 'recipes'.
function isItemAdded(object) {
	let recipesLength = Object.keys(JSON.parse(localStorage.recipes)).length;
	let recipesLastItem = JSON.parse(localStorage.getItem('recipes'))[recipesLength];

	if (recipesLastItem.id == object.id){
		return true;
	}
	else {
		return false;
	}
}

// Checks if the number of recipes the user selects is bigger or smaller than the total amount of recipes of
// that kind/kinds stored in 'recipes'.
function isProperNumRcp(num, arr) {	
	let counter = 0;
	let recipes = JSON.parse(localStorage.getItem('recipes'));
	let recipesLength = Object.keys(JSON.parse(localStorage.getItem('recipes'))).length;

	for(let i= 1; i <= recipesLength; i++) {
		let currentItem = recipes[i];
		
		if(arr.includes(currentItem.kind)) {
			counter += 1;
		}	
	}
	
	if (num <= counter) {
		return true;
	}	
	else{
		return false;
	}
}