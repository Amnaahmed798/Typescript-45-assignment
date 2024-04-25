"use strict";
function sandwich(...items) {
    console.log(`\nYour sandwich will have ${items.length} items: \n`);
    items.forEach(singleItem => { console.log("-" + singleItem); });
    console.log('\nEnjoy your sandwich!\n');
}
//Call the function three times, using a different number of arguments each time.
sandwich('ham', 'cheese', 'lettuce');
sandwich('ham', 'cheese', 'lettuce', 'tomato', 'mayo');
sandwich('ham', 'cheese', 'lettuce', 'tomato ', 'mayo', 'mustard', 'ketchup', 'onions', 'pickles', 'avocado', 'bacon');
