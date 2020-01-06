"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: MIke NOrrito
   Date:   1/6/2020
   
   Filename: hg_report.js

   (all the variables names from the other file so it will auto complete for me);
	var itemTitle = "Dance Off VII";
var itemManufacturer = "Anasta Games";
var itemID = "10551";
var itemPrice = "$29.95";
var itemPlatform = "Nintendo, Playstation, Sony, Xbox";
var itemESRB = "Everyone";
var itemCondition = "New";
var itemRelease = "Sept. 28, 2018";
var itemSummary = ar ratings = [5,2,1,5,3,5,5,4,5,3,4,2,5,4,5,4,4,5,5];
var ratingTitles = var ratingAuthors = [ "WillHa85 (Galway, New York)","GoldFry26 (Sea Island, Georgia)", var ratingDates var ratingSummaries = HINGA DINGA DERGEN 
               
        
*/
var gameReport;
 //information about the game that will be displayed (a summary)
gameReport = "<h1>" + itemTitle + "</h1>";
gameReport += "<h2>By:" + " " + itemManufacturer + "</h2>";
gameReport += "<img src='hg_" + itemID + ".png' alt='" + itemID + "' id='gameImg'/>";
gameReport += "<table>";
gameReport += "<tr><th>Product ID</th><td>" + itemID + "</td></tr>" ;
gameReport += "<tr><th>List Price</th><td>" + itemPrice + "</td></tr>";
gameReport += "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>";
gameReport += "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>";
gameReport += "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>";
gameReport += "<tr><th>Release</th><td>" + itemRelease + "</td></tr>";
gameReport += "</table>";
gameReport += itemSummary;

// display the value of gameReport in the inner HTML of the FIRST article element 

document.getElementsByTagName("article")[0].innerHTML = gameReport;

//information about customer ratings by calculating the averge customer rating of the game ratingsSum, ratingsCount
var ratingsSum = 0;
var ratingsCount = ratings.length;
for (var i = 0; i < ratingsCount; i++) 
{
	ratingsSum += ratings[i];
}
//declare a ratings average by dividing the sum and the count 
var ratingsAvg = ratingsSum / ratingsCount;

//new variable with the following text string as its initial value 

var ratingsReport 
ratingsReport = "<h1>Customer Reviews</h1>"
ratingsReport += "<h2>" + ratingsAvg + " " + "out of 5 stars (" + ratingsCount + "reviews) </h2>";

//loop through the first 3 customer reviews 

for (var i = 0; i < 3; i++) 
{
	ratingsReport += "<div class= 'review'>";
	ratingsReport += "<h1>" + ratingTitles[i] + "</h1>";
	ratingsReport += "<table>";
	ratingsReport += "<tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>";
	ratingsReport += "<tr><th>Review Date" + "</th><td>" + ratingDates[i] + "</td></tr>";
	ratingsReport += "<tr><th>Rating</th><td>";

	//still in the same for loop display a star for the ratings 

	for (var star = 1; star <= ratings[i]; star++) 
	{
		ratingsReport += '<img src ="star.png" />'
	}
	ratingsReport += "</td></tr></table>";
	ratingsReport += ratingSummaries[i];
	ratingsReport += "</div>";
}
//Make this one run even faster but probably the same speed because yk 
document.getElementsByTagName("aside")[0].innerHTML = ratingsReport;