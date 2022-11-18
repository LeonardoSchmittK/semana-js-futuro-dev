const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam'],
    {name: "Antony"},
    {fullname: { firstName: "Brad", secondName: "Pitt"}}
  ];
  
  // Escreva o seu código aqui
  const [student1,[student2,student3]] = moreStudents;
  const [,,[student4,student5]] = moreStudents;
  const [,,,{name:student6},] = moreStudents;
  const [,,,,{fullname:{firstName:student7}}] = moreStudents;
//   const [{student6}] = moreStudents;
  
  console.log(student1, student2, student3, student4, student5, student6, student7);
  
  //O valor a ser consolado deve ser o seguinte Chris Ahmad Antigoni Toby Sam Antony Brad