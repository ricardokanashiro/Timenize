import Image from "next/image"

import "@/css/components/plan-item.css"

import { Goal } from "."

import { IconArrowDownBlue } from "@/assets"

import { useState } from "react"

const PlanItem = () => {
   const [actived, setActived] = useState(false)

   return (
      <div className={actived ? "plan-item plan-item--actived" : "plan-item"}>

         <div className="plan-item__information-area" onClick={() => setActived((prev) => !prev)}>

            <div className="plan-item__content-area">

               <p className="content-area__title">Estudar e passar na prova da TOEFL</p>

               <div className="content-area__warnings-area">

                  <div className="warnings-area__goals-amount">5/10</div>

                  <div className="warnings-area__date-area">

                     <p>Acaba em 10/12/2024</p>

                     <div className="date-area__date-color"></div>

                  </div>

               </div>

            </div>

            {
               actived ? (
                  <Image src={IconArrowDownBlue} alt="arrow down icon" className="information-area__arrow-down-icon information-area__arrow-down-icon--actived" />
               ) : (
                  <Image src={IconArrowDownBlue} alt="arrow down icon" className="information-area__arrow-down-icon" />
               )
            }

         </div>

         <div className={actived ? "plan-item__goals-area" : "plan-item__goals-area plan-item__goals-area--inactived"}>
            <Goal text="Meta de exemplo" onDashboard={true} />
            <Goal text="Meta de exemplo" onDashboard={true} />
            <Goal text="Meta de exemplo" onDashboard={true} />
         </div>

      </div>
   )
}

export default PlanItem