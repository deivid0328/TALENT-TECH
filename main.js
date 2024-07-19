
const items = [
    {
        "Nombre":"Pedro alimaña",
        "edad":22,
        "havePhone":true
    },
      {
        "Nombre":"Pedro jaimito",
        "edad":18,
        "havePhone":false
    },
        {
        "Nombre":"Pedro Julimito",
        "edad":20,
        "havePhone":true
    }
    
 ]

function info(list){
    const lista = list.find(item => item.edad >= 30)
    if(lista){
        return true
    }else{
        return false
    }
}
 

const result = info(items)

console.log(result)