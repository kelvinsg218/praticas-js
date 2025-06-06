
function toCheck(names){
  const defaultnames=["kelvin","lorenzo","ana","jonas"];
  console.log("lista padrão", defaultnames)

  const age=[19,21,29,10];
  console.log("idades padrão", age);

  if(names[0]=== "kelvin"){
    console.log("kelvin é o primeiro nome do array");
  }else{
    console.log("kelvin não é o primeiro nome do array");
  }

  defaultnames.push("karen");
  console.log("nomes atualizados ", defaultnames);

  age.push(18);
  console.log("idade ataualizada ",age);

}
toCheck(["kelvin"]);
