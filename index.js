
function takeANumber(lineOfPeople,newPersonName){
  var lineNumber = lineOfPeople.length+1
  lineOfPeople=lineNumber
  katzDeliLine.push(newPersonName)
  return `Welcome, ${newPersonName}. You are number ${lineNumber} in line.`

}
