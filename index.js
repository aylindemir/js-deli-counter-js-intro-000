var katzDeliLine = [];
function takeANumber(lineOfPeople,newPersonName){
  var lineNumber = lineOfPeople+1
  lineOfPeople=lineNumber
  katzDeliLine.push(newPersonName)
  return `Welcome, ${newPersonName}. You are number ${lineNumber} in line.`

}
