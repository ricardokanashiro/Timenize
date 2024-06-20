import moment from "moment"

export let tasks = [
   {
      id: "1",
      title: "Executar tarefa teste 1",
      checked: false,
      level: "importante"
   },

   {
      id: "2",
      title: "Te amo amorzinho <3",
      checked: true,
      level: "importante"
   },

   {
      id: "3",
      title: "Executar tarefa teste 3",
      checked: false,
      level: "importante"
   },

   {
      id: "4",
      title: "Executar tarefa teste 4",
      checked: false,
      level: "essencial"
   },

   {
      id: "5",
      title: "Executar tarefa teste 5",
      checked: false,
      level: "trivial"
   },

   {
      id: "6",
      title: "Executar tarefa teste 6",
      checked: false,
      level: "trivial"
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