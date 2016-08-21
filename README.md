# Poopthis

An npm package for Node.js; input a string and a string is returned surrounded
by the poop emoji (poomoji).

`npm install poopthis`

```javascript
const poopthis = require('poopthis')

console.log(poopthis('What is the point of this node package?'))
```
Output: :hankey: What is the point of this node package? :hankey:

```javascript
const poopthis = require('poopthis')

console.log(poopthis.times('What is the point of this node package?', 3))
```
Output: :hankey: :hankey: :hankey: What is the point of this node package? :hankey: :hankey: :hankey:

:ok_hand:
