
# Neversitup Test

This package has the functions
- permutations
- findTheOddInt
- countSmileys




## Installation

Install candidate-test-neversitup with npm

```bash
  npm i candidate-test-neversitup
```
or
```bash
  yarn add candidate-test-neversitup
```

## How to use

```javascript
const {permutations, findTheOddInt, countSmileys} = require('candidate-test-neversitup');

// for function permutations
const input = "abc"
const result = permutations(input)
// result is ['abc','acb','bac','bca','cab','cba']

// for function findTheOddInt
const input = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]
const result = findTheOddInt(input)
// result is 4

// for function countSmileys
const input = [':)', ';(', ';}', ':-D']
const result = countSmileys(input)
// result is 2
```
## Running Tests


Install dependency package first with command
```bash
yarn install
```
To run tests, run the following command
```bash
npm run test
```
or
```bash
yarn test
```
any test script  in 
```bash
src/*.test.js
```

## Run with docker
```bash
docker-compose up -d --build
```
