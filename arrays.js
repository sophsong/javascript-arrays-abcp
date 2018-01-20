var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, element) { 
  array.slice(1) 
  return array 
}

function destructivelyRemoveElementFromEndOfArray (chocolateBars, element) {
  chocolateBars.pop(3) 
  return array }
  





