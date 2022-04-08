import React from 'react';
import '@/assets/font/iconfont.css'
type PropsType = {
  name:string,
  color?:string,
  size?:string | number
}
const Icon = (props:PropsType) => {
  const styles = {
    fontSize:Number(props.size) + 'px' || '26px',
    color:props.color || '#fff'
  }
  return(
    <>
      <span className={'iconfont ' + props.name} style={styles}></span>
    </>
  )
};

export default Icon;