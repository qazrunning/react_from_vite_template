import React from 'react';
import './index.less'
type PropsType = {
  title:string,
  children?:any
}
const HomeHeader = (props:PropsType) => {
  return (
    <>
    <div className='home-header'>
      <div className="title">
        {props.title}
      </div>
      {props.children}
    </div>
    </>
  )
};

export default HomeHeader;