# Project-Etch-a-Sketch
Javascript Etch-a-Sketch in browser. Creating from scratch with no tutorial or guide for practice using css grids and variables without the use of jquery.
Can be tried here: https://cjm1994.github.io/Project-Etch-a-Sketch/

Features to add:
- Grid size selector
- Single Color Brush
- Eraser Brush
- Rainbow Brush
- Grayscale Brush
- Reset Button

First Goal: is to add a resizable grid that maintains a constant height and width but can have adjustable #s of rows and columns
Will use a #grid css style in a container div to hold divs generated by a js script which will === a chosen x*x selection, the script will change the grid-template-column/row parameters in container to make the divs entered fit evenly into the 500px*500px container
COMPLETE

Second Goal: set up a hover effect that changes the color of the divs when the cursor hovers over them and leaves a trail

Third Goal: Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid. Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent. 

Fourth Goal: Add a selector that lets you choose between a mode that paints black and rainbow, and add a scaler for the grid
