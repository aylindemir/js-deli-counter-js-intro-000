
function takeANumber(lineOfPeople,newPersonName){
  var lineNumber = lineOfPeople.length+1
  lineOfPeople.push(newPersonName)
  return `Welcome, ${newPersonName}. You are number ${lineNumber} in line.`

}

function nowServing(lineOfPeople){
  while(lineOfPeople.length>=0){
   lineOfPeople.shift()
  }
  return "There is nobody waiting to be served!"
}
