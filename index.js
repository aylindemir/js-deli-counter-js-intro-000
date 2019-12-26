
function takeANumber(lineOfPeople,newPersonName){
  var lineNumber = lineOfPeople.length+1
  lineOfPeople.push(newPersonName)
  return `Welcome, ${newPersonName}. You are number ${lineNumber} in line.`

}

function nowServing(lineOfPeople){
  if(lineOfPeople.length>0){
    lineOfPeople=lineOfPeople.remove(lineOfPeople.indexOf(0))
  }else{
    console.log("There is nobody waiting to be served!")
  }
  return lineOfPeople
}
