function getElementValueNumber(id){
    const get = document.getElementById(id)
    const value = get.value
    const number = parseFloat(value)
    get.value = ''
    return number
}
function clickMe(target){
   const valueB = getElementValueNumber('b-input')
   const  valueH = getElementValueNumber('h-input')

   const total = 0.5*valueB*valueH
   
   
}