import Image from "next/image"
import { useContext } from "react"

import { TempListContext } from "../contexts"

import { IconCheck } from "@/assets"

const ChangeLevelMiniMenu = ({ refs, floatingStyles, middlewareData, getFloatingProps, level, id }) => {

   const { setTempList } = useContext(TempListContext)

   function changeLevel(level) {
      setTempList(prev => prev.map(
         task => task.id === id ? { ...task, level: level } : task
      ))
   }

   return (
      <div className="level-wrapper-mini-menu" ref={refs.setFloating} style={{ ...floatingStyles, visibility: middlewareData.hide?.referenceHidden ? 'hidden' : 'visible' }} {...getFloatingProps()}>

         <button
            className="level-wrapper-mini-menu__btn--green level-wrapper-mini-menu__btn" onClick={() => changeLevel("trivial")}
         >
            <p>Trivial</p>
            <Image
               src={IconCheck}
               alt="icon check"
               className={
                  level === "trivial" ? "level-wrapper-mini-menu__check-icon"
                     : "level-wrapper-mini-menu__check-icon level-wrapper-mini-menu__check-icon--disabled"
               }
            />
         </button>

         <button className="level-wrapper-mini-menu__btn--yellow level-wrapper-mini-menu__btn" onClick={() => changeLevel("importante")}>
            <p>Importante</p>
            <Image
               src={IconCheck}
               alt="icon check"
               className={
                  level === "importante" ? "level-wrapper-mini-menu__check-icon"
                     : "level-wrapper-mini-menu__check-icon level-wrapper-mini-menu__check-icon--disabled"
               }
            />
         </button>

         <button className="level-wrapper-mini-menu__btn--red level-wrapper-mini-menu__btn" onClick={() => changeLevel("essencial")}>
            <p>Essencial</p>
            <Image
               src={IconCheck}
               alt="icon check"
               className={
                  level === "essencial" ? "level-wrapper-mini-menu__check-icon"
                     : "level-wrapper-mini-menu__check-icon level-wrapper-mini-menu__check-icon--disabled"
               }
            />
         </button>
      </div>

   )
}

export default ChangeLevelMiniMenu