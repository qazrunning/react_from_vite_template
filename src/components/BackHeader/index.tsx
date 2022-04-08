import React from 'react';
import './index.less'
import Icon from '@/components/Icon'
import {useNavigate,useSearchParams} from 'react-router-dom'
const BackHeader = (props:any) => {
  const navigation = useNavigate()
  return(
    <div className='back_header'>
      <div className='back' onClick={()=>navigation(-1)}>
        <Icon name="icon-jiantouzuo"></Icon>
      </div>
      <div className="title">
        播放列表
      </div>
      <div className="right">

      </div>
    </div>
  )
};

export default BackHeader;