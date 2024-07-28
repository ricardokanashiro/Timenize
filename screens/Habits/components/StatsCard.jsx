import Image from "next/image"

import "@/css/screens/habitos/components/stats-card.css"

const StatsCard = ({ icon, amount }) => {
   return (
      <div className="habitos__stats-card">
         <Image src={icon} alt="" />
         <span>{amount}</span>
      </div>
   )
}

export default StatsCard