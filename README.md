# Rice University Shopping List in React

AC: 

*Components*
* A text input, 
* a “create button”, 
* a list of pending items 
* a list of crossed-off items. 

*Functionality*
* Clicking a pending item moves it to the crossed off section. 
* Clicking a crossed off item moves it to pending.
* Display a subtotal (sum of all prices) in the pending list.
* Quantity and price should be displayed in the list with the items
* Clicking the create button adds a pending list item with the text from the input and clears the input
* Typing in the text input filters the lists of items below based on substring match
* In each list items are sorted alphabetically.
* Pending items should be grouped by category, while crossed off items remain in one list
* Create an interface for editing additional metadata for each item, add metadata: category, quantity, and price. All three are optional inputs.

*Improvements/Bonus*
* check against null value before creating new item
* delete/remove item functionality
* show which column is sorted with chevrons
* allow non default columns to sort
* styling overhaul
* State mamnagement would likely need to be lifted out of the app.js to a dedicated service (e.g. redux) if the state vars continue to grow

*Areas of Concern*
* duplicated/redundant functions (eg. handleInputChange in App.js)
* mobile friendliness is lacking
* state is in memory, refreshes or navigation clean away user input
** saving lists to localStorage for persistent state
* list.js ballooned in complexity
** would likely benefit from having row specific functionality pulled out into its own component

*Question/Confusion*
* I wasn't really sure how the UX is envisioned with the following 2 AC points: 
```Clicking the create button adds a pending list item with the text from the input and clears the input```
and 
```Typing in the text input filters the lists of items below based on substring match```

Seeing as a user would be filtering the table to find an item not to create
Due to my confusion I ended up adding two input fields which is a solution but likely not ideal. 