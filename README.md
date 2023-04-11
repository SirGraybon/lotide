# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @graydonritchie/lotide`

**Require it:**

`const _ = require('@graydonritchie/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Returns the first item in an Array
* `tail`: Returnes all items in an array after the first item
* `middle`: Returnes the middle one or two items of an array
* `assertArraysEqual`: returns a message based on whether two arrays are the same
* `assertEqual`: checks the output of another function agains an expected output
* `assertObjectEqual`: returns a message based on whether two objectss are the same
* `countLetters`: counts the instances of each letter ina an input
* `countOnly`: counts values in an object based on input
* `eqArray`: compares two arrays to see if they are equal
* `eqObjects`: compares two objects to see if they are equal
* `findKey`: returns key from object basked on its value - seach specified at function call
* `findKeyByValue`: returns key from object basked on its value - seach specified at function call
* `flatten`: takes an array with nested arrays and returns one singular array with all values
* `map`: description
* `letterPositions`: returns all indexes where a letter appears from an input
* `takeUntil`: returns items fomr an input array up to a specified point
* `without`: compares two arrays and returns items that are not present in both