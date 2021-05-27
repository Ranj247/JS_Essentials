/*
With iteration you are not restricted to using only one loop at a time. As you learned in the comparative programming module, you can nest a code block inside of another code block, and this applies to loops just the same as any other code block. The nesting structure simply requires that you include a loop inside the block to be repeated by another loop. Consider the following code which generates a set of (x, y) coordinates, where each point is an array of two values:
*/

for (let x = 0; x < 3; x++) {
  for (let y = 0; y < 3; y++) {
    let point = [x, y];
    console.log(point);
  }
}

/*
The code above has two loops, one which iterates through x values from 0 to 2, and another that does the same for y values. The two values are consolidated into a point which is an array of the [x, y] coordinates. For each iteration of the outer loop, the inner loop iterates from 0 to 2, creating 9 points in total.

You can nest for loops inside of for loops, while loops inside of while loops, while loops inside of for loops or any other combination you can imagine. Knowing this flexibility will help you to solve problems where part of a repetitive task is another repetitive task.
*/