const pessoas = [
    {
      nome: "Lucas",
      idade: 22,
    }, {
      nome: "Otávio",
      idade: 22
    }
  ]
  localStorage.setItem('people', JSON.stringify(pessoas))
  const storage = localStorage.getItem('people')
 console.log(storage)
 console.log(JSON.parse(storage))
