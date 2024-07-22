import "@/css/screens/habitos/components/stats-card.css"

const StatsCard = ({ label, amount }) => {
   return (
      <div className="habitos__stats-card">
         <span>{label}</span>
         <span>{amount}</span>
      </div>
   )
}

export default StatsCard