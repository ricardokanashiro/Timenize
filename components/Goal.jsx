"use client"

import { useContext, useState } from "react"
import Image from "next/image"

import "@/css/components/goal.css"

import { SquareUncheckedIcon, SquareCheckedIcon, IconTrash, IconEdit, IconX, IconCheck } from "@/assets"

import { DataContext } from "./DataContext";

const Goal = ({ goal, onDashboard, setCounter, id, planId }) => {

   const {sharedPlans, setSharedPlans} = useContext(DataContext)
   const [editActive, setEditActive] = useState(false)
   const [editValue, setEditValue] = useState(goal.title)

   function handleCheckGoal() {

      goal.checked ? setCounter((prev) => prev - 1) : setCounter((prev) => prev + 1)

      let newDashboardPlans = Object.assign([], sharedPlans)

      newDashboardPlans.filter(plan => plan.id === planId)[0].goals.filter(goal => goal.id === id)[0].checked =
         !newDashboardPlans.filter(plan => plan.id === planId)[0].goals.filter(goal => goal.id === id)[0].checked

      setSharedPlans(newDashboardPlans)
   }

   function handleDeleteGoal() {
      const newDashboardPlans = Object.assign([], sharedPlans)

      newDashboardPlans.filter(plan => plan.id === planId)[0].goals =
         newDashboardPlans.filter(plan => plan.id === planId)[0].goals.filter(goal => goal.id !== id)

      setSharedPlans(newDashboardPlans)
      
      goal.checked && setCounter((prev) => prev - 1)
   }

   function handleSetEditActive() {
      if(!editActive) {
         setEditValue(goal.title)
      }

      setEditActive((prev) => !prev)
   }

   function handleEditingGoal(value) {
      setEditValue(value)
   }

   function handleSetEditValue() {
      let newDashboardPlans = Object.assign([], sharedPlans)

      newDashboardPlans.filter(plan => plan.id === planId)[0].goals.find(goal => goal.id === id).title = editValue

      setSharedPlans(newDashboardPlans)
   }

   function handleEditWithEnter(e) {
      if (e.key === 'Enter') {
         handleSetEditValue()
         handleSetEditActive()
      }
   }

   return (
      <div className={onDashboard ? "goal goal--dashboard" : "goal"}>

         <div className="goal__content-area">

            <button onClick={handleCheckGoal}>
               {
                  goal.checked ? (
                     <Image src={SquareCheckedIcon} alt="checked icon" />
                  ) : (
                     <Image src={SquareUncheckedIcon} alt="unchecked icon" />
                  )
               }
            </button>

            {
               editActive ?

                  <input type="text" value={editValue} onChange={((e) => handleEditingGoal(e.target.value))} autoFocus onKeyDown={(e) => handleEditWithEnter(e)} className="content-area__edit-input" />

                  :

                  <>
                     {
                        goal.checked ? (
                           <p><s>{goal.title}</s></p>
                        ) : (
                           <p>{goal.title}</p>
                        )
                     }
                  </>
            }

         </div>

         <div className="goal__actions-area">

            {
               editActive ?

                  <>
                     <button>
                        <Image src={IconX} alt="X icon" className="actions-area__icon" onClick={() => {
                           setEditActive(false)
                        }} />
                     </button>

                     <button>
                        <Image src={IconCheck} alt="Check icon" className="actions-area__icon" onClick={() => {
                           handleSetEditValue()
                           handleSetEditActive()
                        }} />
                     </button>
                  </>

                  :

                  <>
                     {
                        !goal.checked && (
                           <button>
                              <Image src={IconEdit} alt="edit icon" className="actions-area__icon" onClick={handleSetEditActive} />
                           </button>
                        )
                     }

                     <button>
                        <Image src={IconTrash} alt="trash icon" className="actions-area__icon" onClick={handleDeleteGoal} />
                     </button>
                  </>
            }

         </div>

      </div>
   )
}

export default Goal