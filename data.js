import moment from "moment"

export let tasks = [
   {
      id: "1",
      title: "Executar tarefa teste",
      checked: false,
      level: "importante"
   },
]

export let plans = [
   {
      title: "Titulo do Plano 1",
      deadline: moment("2034-12-30"),
      category: "pinned",
      id: 1,
      goals: [
         {
            title: "Meta de exemplo 1",
            checked: false,
            id: 1,
         },

         {
            title: "Meta de exemplo 2",
            checked: false,
            id: 2,
         },

         {
            title: "Meta de exemplo 3",
            checked: false,
            id: 3,
         }
      ]
   },

   {
      title: "Titulo do Plano 2",
      deadline: moment("2034-12-30"),
      category: "deadline",
      id: 2,
      goals: [
         {
            title: "Meta de exemplo 1",
            checked: false,
            id: 4,
         },

         {
            title: "Meta de exemplo 2",
            checked: false,
            id: 5,
         },

         {
            title: "Meta de exemplo 3",
            checked: false,
            id: 6,
         }
      ]
   }
]