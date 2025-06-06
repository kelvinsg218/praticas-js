const employee={
  name:"kelvin",
  age:19,
  functionality:"analyst",
  personalReport:{
    performance:"good",
    currentSalary:3200
  },
  todayStasks:{
    emailverification:"completed",
    meeting:"completed",
    dataCollection:"completed",
    meetingWithManager:"pending",
    developingSolutions:"pending",
  }
}
console.log("nome do funcionario: ",employee.name);
console.log("idade do funcionario: ",employee.age);
console.log("cargo: ",employee.functionality);
console.log("relatorio pessoal: ",employee.personalReport);
console.log("tarefas díarias : ",employee.todayStasks);

function evaluatePerformance(todaysStacks){
  const tasks= Object.keys(todaysStacks).length;
  const completed= Object.values(todaysStacks).filter(status => status === "completed").length;
  const performance= tasks/completed;
  return performance >= 0.8? "bom":"ruim";
}
console.log(evaluatePerformance(employee));
