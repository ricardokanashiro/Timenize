"use client"

import Image from "next/image"
import { useContext, useEffect, useState } from "react"

import moment from "moment";
import 'moment/locale/pt-br'


import { ThemeContext } from "@/contexts";

import { Goal } from "./"
import { IconArrowDownBlue, IconArrowDownDark } from "@/assets"

import "@/css/screens/dashboard/components/plan-item.css"

const PlanItem = ({ plan, id }) => {

   const { darkThemeActive } = useContext(ThemeContext)

   const [actived, setActived] = useState(false)
   const [counter, setCounter] = useState(0)

   useEffect(() => {
      plan.goals.forEach((goal) => {
         goal.checked && setCounter((prev) => prev + 1)
      })
   }, [])

   return (
      <div className={actived ? "plan-item plan-item--actived" : "plan-item"}>

         <div className="plan-item__information-area" onClick={() => setActived((prev) => !prev)}>

            <div className="plan-item__content-area">

               <p className="content-area__title">{plan.title}</p>

               <div className="content-area__warnings-area">

                  <div className="warnings-area__goals-amount">{counter}/{plan.goals.length}</div>

                  <div className="warnings-area__date-area">

                     <p>Acaba em {moment(plan.deadline).locale('pt-br').format('L')}</p>

                     <div className="date-area__date-color"></div>

                  </div>

               </div>

            </div>

            <Image 
               src={darkThemeActive ? IconArrowDownDark : IconArrowDownBlue} 
               alt="arrow down icon" 
               className={
                  actived ? "information-area__arrow-down-icon information-area__arrow-down-icon--actived"
                  : "information-area__arrow-down-icon"
               } 
            />

         </div>

         <div className={actived ? "plan-item__goals-area" : "plan-item__goals-area plan-item__goals-area--inactived"}>

            {
               plan.goals.map((goal, key) => (
                  <Goal 
                     goal={goal} 
                     onDashboard={true}
                     setCounter={setCounter} 
                     id={goal.id} 
                     planId={id}
                     key={key}
                  />
               ))
            }

         </div>

      </div>
   )
}

export default PlanItem