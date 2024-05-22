// 'use client'

import { useEffect, useState } from "react"
import Image from "next/image"

import "@/css/components/dashboard.css"

import { DashboardIllustration, ClipboardIconWhite, IconPlus, IconBookMark, IconCrosshair } from "@/assets"

import { TaskItem, PlanItem } from "../components"

import { tasks, plans } from "@/data"

const Dashboard = () => {

   let currentLevel = "médio"

   const [taskCounter, setTaskCounter] = useState(0)
   const [dashboardTasks, setDashboardTasks] = useState([])
   const [dashboardPlans, setDashboardPlans] = useState([])

   useEffect(() => {
      tasks.map((task) => task.checked && setTaskCounter((prev) => prev + 1))
      setDashboardTasks(tasks.filter(task => task.level === currentLevel))
      setDashboardPlans(plans)
   }, [])

   function handleChangeTaskCounter(checked) {
      checked ? setTaskCounter((prev) => prev - 1) : setTaskCounter((prev) => prev + 1)
   }

   return (
      <section className="dashboard">

         <section className="dashboard__tasks-area">

            <div className="tasks-area__warnings-area">

               <div className="warnings-area__content">
                  <h4>Today - <span>Medium</span> </h4>
                  <h3>
                     {dashboardTasks.length > 0 ? `${taskCounter}/${dashboardTasks.length} tasks` : 'Adicione Tasks'}
                  </h3>
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
                     dashboardTasks.map((task, key) => {
                        console.log(task)
                        return <TaskItem key={key} task={task} id={task.id} handleChangeTaskCounter={handleChangeTaskCounter} setDashboardTasks={setDashboardTasks} dashboardTasks={dashboardTasks} />
                     })
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
                        dashboardPlans.map((plan, key) => (
                           plan.category === "pinned" && <PlanItem plan={plan} key={key} />
                        ))
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
                        plans.map((plan, key) => (
                           plan.category === "deadline" && (<PlanItem plan={plan} index={key} key={key} />
                        )))
                     }

                  </div>

               </section>

            </section>

         </section>

      </section>
   )
}

export default Dashboard