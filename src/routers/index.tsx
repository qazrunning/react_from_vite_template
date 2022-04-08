import React from 'react';
import { useRoutes } from "react-router-dom";
import Detail from "@/views/Detail";
import Home from "@/views/Home";
import Life from '@/views/life'
import Mine from "@/views/Mine"
import Collection from "@/views/Mine/Collection"
// 是不是可以区分 token的时候 分别输出 然后直接重定向到 login 但是当前页面的url要怎么保存呢
function Routers() {
  const elements = useRoutes(
    [
      {
        path:'/',
        element:<Home />,
        children:[
          {
            path:'/detail',
            element:<Detail />
          },
        ]
      },{
        path:'/life',
        element:<Life></Life>
      },
      {
        path:'/mine',
        element:<Mine></Mine>
      },
      {
        path:'/collection',
        element:<Collection></Collection>
      }
      
    ]
  )
  
  return elements
}

export default Routers