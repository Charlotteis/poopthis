'use strict'

var emoji = require('node-emoji')

/**
 * Returns a string surrounded by the poop emoji (poomoji)
 * @param string
 */

module.exports = function (string) {
  var string = string.trim()
  var poop = emoji.get('hankey')
  return poop + ' ' + string + ' ' + poop
}

module.exports.times = function pooptimes (string, times) {
  var string = string.trim()
  var poop = emoji.get('hankey')
  if (times === 0)
    return string
  return pooptimes(poop + ' ' + string + ' ' + poop, times - 1)
}
