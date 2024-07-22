import Image from "next/image"

import "@/css/screens/habitos/components/title-area.css"

const TitleArea = ({ title, icon, alt }) => {
   return (
      <section className="habitos__title-area">
         <h2>{title}</h2>
         <Image src={icon} alt={alt} />
      </section>
   )
}

export default TitleArea