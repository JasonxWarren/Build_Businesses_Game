# Build_Businesses_Game
## Concept:
This game will allow users to make tough business decisions such as the timing of purchases, ads/sales and dealing with unforeseen circumstances. The goal is to have as many or more units than the user started with, if this is met by the 12th turn the user wins, if this isn't met, the user loses.

## Wireframes
The user will first start out making their first purchase, after they decide how much Inventory they would like to buy, the user can go to the next turn. Each turn a certain amount of Inventory is sold, and accredited to the users account, the amount made is displayed to the user, and the user can decide to buy more units or to continue on. Each turn the user is provided with what turn they are on as well. Additionally design-wise the color scheme will be responsive to the what the user score is, as a constant reminder as to how well they are doing.

## Technologies used
-HTML
-CSS
-Javascript
-Jquery

## Approach 
The approach is to generate the logic that will occur throughout the game. We will keep track of turns based on how many times the user has clicked the next turn button, this will run a great amount of the logic in the game. Before implementing the logic, its best to set up a number of variables that will be using throughout the game. Based upon the turn, this will dictate what the user is provided, and if we should be checking for win conditions yet. The logic to change inventory and Units for the user, is first utilized on purchases of inventory, this will allow for inventory to increase, and units to decrease. Next we will provide the sales logic, which will reduce the users Inventory, based upon a random profitability set each game, and a set percentage of total inventory that moves each turn. Next random occurences will be introduced, where if an occurence occurs, rather than selling any units, and updating the users stats, nothing occurs, and the user is prompted of the bad event. Later on, we will create an Array of bad events to randomly cycle through to make the game more playable. As the game progresses the user should get a feel for a strategy, depending on how quick they catch on, depends on if they will win or lose, adding in factors such as these bad events, makes the game tough to win, for all. Depending on the conditions of the game, various elements will be hide, or shown based upon the conditiions of the game, such as not letting the user, go to the next turn, if they never purchased any inventory. Also on the 12th turn, all elements allowing for more products to be bought and the user to progress to the next turn will be hidden, and a play again button will be provided. 

## Challenges 
Laying out the structure of the game, to be able to keep the various functions and logic organized, and to carry out as many pass through functions to make the code organized and easy to test and change.

## Additional Information
Future endeavors includes a welcome screen which would allow for the user to name their business, and pick a type of product, this will affect the profitability logic, as well as inventory logic. 
If achievable implementing toggle switches for Ads and Sales functionality that are able to change the earnings and percentage of inventory sold per Turn. 

## App Demo

