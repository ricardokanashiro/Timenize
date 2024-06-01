"use client"

import { useContext, useEffect, useState } from "react"
import Image from "next/image"

import { TaskItem, PlanItem } from "../components"
import { DataContext } from "@/components/DataContext"

import "@/css/components/dashboard.css"

import { DashboardIllustration, ClipboardIconWhite, IconPlus, IconBookMark, IconCrosshair } from "@/assets"

const Dashboard = () => {

   const { sharedTasks, sharedPlans } = useContext(DataContext)

   return (
      <section className="dashboard">

         <section className="dashboard__tasks-area">

            <div className="tasks-area__warnings-area">

               <div className="warnings-area__content">
                  <h4>Today - <span>Medium</span></h4>
                  <h3>
                     {
                        sharedTasks.length > 0 ?
                           `${sharedTasks.filter(task => task.checked).length}/${sharedTasks.length} tasks`
                           : 'Adicione Tasks'
                     }
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
                     sharedTasks.map((task) => (
                        <TaskItem
                           key={task.id}
                           task={task}
                           id={task.id}
                        />
                     ))
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
                        sharedPlans.map((plan) => (
                           plan.category === "pinned" && (
                              <PlanItem
                                 plan={plan}
                                 id={plan.id}
                                 key={plan.id}
                              />
                           )))
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
                        sharedPlans.map((plan) => (
                           plan.category === "deadline" && (
                              <PlanItem
                                 plan={plan}
                                 id={plan.id}
                                 key={plan.id}
                              />
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