# Counter-Dashboard

This mini-app correctly tracks the count from each child component and displays the total sum of all counts.

## Components

- Dashboard  
It involeves Counter components as child components.
The Dashboard manages the states for all the counters and their timestamps, and it passes a function down as a prop.


- Counter  
When the user clicks the button in the Counter, the component lifts its state up to the parent.
The Counter component then displays the values that are passed back down from the parent.


