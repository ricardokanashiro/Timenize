import moment from "moment"

export let tasks = [
   {
      id: "1",
      title: "Executar tarefa teste 1",
      checked: false,
      level: "básico"
   },

   {
      id: "2",
      title: "Te amo amorzinho <3",
      checked: true,
      level: "médio"
   },

   {
      id: "3",
      title: "Executar tarefa teste 3",
      checked: false,
      level: "médio"
   },

   {
      id: "4",
      title: "Executar tarefa teste 4",
      checked: false,
      level: "completo"
   },
]

export let plans = [
   {
      title: "Titulo do Plano 1",
      deadline: moment("2034-12-30"),
      category: "pinned",
      goals: [
         {
            title: "Meta de exemplo 1",
            checked: false
         },

         {
            title: "Meta de exemplo 2",
            checked: false
         },

         {
            title: "Meta de exemplo 3",
            checked: false
         }
      ]
   },

   {
      title: "Titulo do Plano 2",
      deadline: moment("2034-12-30"),
      category: "deadline",
      goals: [
         {
            title: "Meta de exemplo 1",
            checked: false
         },

         {
            title: "Meta de exemplo 2",
            checked: false
         },

         {
            title: "Meta de exemplo 3",
            checked: false
         }
      ]
   }
]