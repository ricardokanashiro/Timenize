import moment from "moment"

import Image from "next/image"

import "@/css/components/dashboard.css"

import { TaskItem, PlanItem } from "./"

import { DashboardIllustration, ClipboardIconWhite, IconPlus, IconBookMark, IconCrosshair } from "@/assets"
import { useEffect, useState } from "react"

export let tasks = [
   {
      title: "Executar tarefa teste 1",
      checked: true
   },

   {
      title: "Executar tarefa teste 2",
      checked: false
   },

   {
      title: "Executar tarefa teste 3",
      checked: false
   },

   {
      title: "Executar tarefa teste 4",
      checked: false
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

const Dashboard = () => {

   const [taskCounter, setTaskCounter] = useState(0)

   useEffect(() => {
      tasks.map((task) => task.checked && setTaskCounter((prev) => prev + 1))
   }, [])

   return (
      <section className="dashboard">

         <section className="dashboard__tasks-area">

            <div className="tasks-area__warnings-area">

               <div className="warnings-area__content">
                  <h4>Today - <span>Medium</span> </h4>
                  <h3>{taskCounter}/{tasks.length} tasks</h3>
               </div>

               <Image src={DashboardIllustration} alt="warnings area illustration" className="warnings-area__illustration" />

            </div>

            <div className="tasks-area__task-list-card">

               <header className="task-list-card__header">
                  <h3>ToDo-List</h3>

                  <button>
                     <p>Manage List</p>
                     <Image src={ClipboardIconWhite} alt="clipboard icon" className="header__clipboard-icon" />
                  </button>
               </header>

               <section className="task-list-card__task-list">

                  {
                     tasks.map(
                        (task, key) => (
                           <TaskItem key={key} task={task} index={key} setTaskCounter={setTaskCounter} />
                        )
                     )
                  }

                  <button className="task-list__add-task-alt-btn">
                     <Image src={IconPlus} alt="plus icon" className="add-task-alt-btn__plus-icon" />
                  </button>

               </section>

            </div>

         </section>

         <section className="dashboard__plans-card">

            <header className="plans-card__header">
               <h3>Plans</h3>

               <a href="#">Veja Tudo</a>
            </header>

            <section className="plans-card__plans-wrapper">

               <section className="plans-wrapper__pinned-area">

                  <div className="pinned-area__header">

                     <p>Pinned</p>

                     <Image src={IconBookMark} alt="icon bookmark" className="pinned-area__header__icon" />

                  </div>

                  <div className="pinned-area__plans-wrapper">

                     {
                        plans.map((plan, key) => {
                           if (plan.category === "pinned") {
                              return <PlanItem plan={plan} index={key} key={key} />
                           } else {
                              return
                           }
                        })
                     }

                  </div>

               </section>

               <section className="plans-wrapper__deadline-area">

                  <div className="deadline-area__header">

                     <p>Deadline</p>

                     <Image src={IconCrosshair} alt="icon crosshair" className="deadline-area__header__icon" />

                  </div>

                  <div className="deadline-area__plans-wrapper">

                     {
                        plans.map((plan, key) => {
                           if (plan.category === "deadline") {
                              return <PlanItem plan={plan} index={key} key={key} />
                           } else {
                              return
                           }
                        })
                     }

                  </div>

               </section>

            </section>

         </section>

      </section>
   )
}

export default Dashboard