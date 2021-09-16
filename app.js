const input = document.querySelector('.input')

const display = (num)=>{
  return input.value += num
}
const calculate = ()=>{
try{
  input.value = eval(input.value)
}
catch(err){
   input.value = 'Erreur'
}
}
const Clear = ()=> {
  return input.value = ""
} 

const deleteLast = ()=>{
  const str = input.value 
  return input.value = str.substring(0, str.length - 1)
}