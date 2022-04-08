import { useState } from 'react'
import './index.less'
function Home(){
   const [count, setCount] = useState(0)
   return(
     <div className='home'>
       <button className='btn' onClick={() => setCount(count + 1)}>点我ba</button>
       this count is {count}
     </div>
   )

}
export default Home