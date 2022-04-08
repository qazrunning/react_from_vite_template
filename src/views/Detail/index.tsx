import { useState } from 'react'

function Detail(){
   const [count, setCount] = useState(0)
   return(
     <div>
       <button onClick={() => setCount(count + 1)}>点我</button>
       this count is {count}
     </div>
   )

}
export default Detail