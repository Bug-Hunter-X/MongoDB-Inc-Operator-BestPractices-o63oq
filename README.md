# Incorrect Usage of $inc Operator in MongoDB
This repository demonstrates a common error in using the `$inc` operator in MongoDB and provides a solution.
The `$inc` operator is used to increment or decrement a numeric field in a document.  Incorrect usage, such as providing a non-numeric value, will result in errors.

## Bug
The bug lies in the incorrect usage of the `$inc` operator. Instead of a numeric value, a string or other invalid datatype is provided, leading to a failure to update the document.

## Solution
The solution demonstrates the correct usage of the `$inc` operator. The value provided is a number, which correctly increments the numeric field in the document.