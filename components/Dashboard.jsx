import Image from "next/image"

import "@/css/components/dashboard.css"

import { TaskItem, PlanItem } from "./"

import { DashboardIllustration, ClipboardIconWhite, IconPlus } from "@/assets"

const Dashboard = () => {
   return (
      <section className="dashboard">

         <section className="dashboard__tasks-area">

            <div className="tasks-area__warnings-area">

               <div className="warnings-area__content">
                  <h4>Today - <span>Medium</span> </h4>
                  <h3>7/10 tasks</h3>
               </div>

               <Image src={DashboardIllustration} alt="warnings area illustration" className="warnings-area__illustration" />

            </div>

            <div className="tasks-area__task-list-card">

               <header className="task-list-card__header">
                  <h3>ToDo-List</h3>

                  <button>
                     <p>Manage List</p>
                     <Image src={ClipboardIconWhite} alt="clipboard icon" />
                  </button>
               </header>

               <section className="task-list-card__task-list">

                  <TaskItem text="Task de exemplo executada" />
                  <TaskItem text="Task de exemplo executada" />
                  <TaskItem text="Task de exemplo executada" />

                  <button className="task-list__add-task-alt-btn">
                     <Image src={IconPlus} alt="plus icon" className="add-task-alt-btn__plus-icon" />
                  </button>

               </section>

            </div>

         </section>

         <section className="dashboard__plans-card">

            <header className="task-list-card__header">
               <h3>Plans</h3>

               <a href="#">Veja Tudo</a>
            </header>

            <section className="task-list-card__plans-wrapper">
               <PlanItem />
            </section>


         </section>

      </section>
   )
}

export default Dashboard