const { createContext, useState } = require("react");

export const ItemEditActiveIDContext = createContext()

const ItemEditActiveIDProvider = ({ children }) => {

   const [itemEditActiveID, setItemEditActiveID] = useState(false)

   return (
      <ItemEditActiveIDContext.Provider value={{ itemEditActiveID, setItemEditActiveID }}>
         { children }
      </ItemEditActiveIDContext.Provider>
   )
}

export default ItemEditActiveIDProvider
