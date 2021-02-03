# Getting Started with Create React App

AC: 

*Components*
* A text input, 
* a “create button”, 
* a list of pending items 
* a list of crossed-off items. 

*Functionality*
* Create an interface for editing additional metadata for each item, add metadata: category, quantity, and price. All three are optional inputs.

*Complete*
* Clicking a pending item moves it to the crossed off section. 
* Clicking a crossed off item moves it to pending.
* Display a subtotal (sum of all prices) in the pending list.
* Quantity and price should be displayed in the list with the items
* Clicking the create button adds a pending list item with the text from the input and clears the input
* Typing in the text input filters the lists of items below based on substring match
* In each list items are sorted alphabetically.
* Pending items should be grouped by category, while crossed off items remain in one list

*Bonus*
* check against null value before creating new item
* show which column is sorted with chevron
* allow non default columns to sort
* delete row
* styling overhaul

*Areas of Concern*
* duplicated/redundant functions (eg. handleInputChange in App.js)
* mobile friendliness is lacking
