import React, { useState } from 'react';
import '../index.less'
import BackHeader from '@/components/BackHeader'
import Icon from '@/components/Icon'
import ImgSrc from '@/assets/images/ssds.png'
import {useSearchParams} from 'react-router-dom'
const Collection = (props: any) => {
  //usf 快速创建 useState
  const [searchVal, setsearchVal] = useState("");
  const [ getParams ,setParam] = useSearchParams() 
  // const params = getParams.get('type')
  const listType: string = getParams.get('type') || '1'
  /**
   * 因为ipt是非受控组件，所以要添加onChange
   */
  const searchChange = (e: any) => {
    setsearchVal(e.target.value)
  }
  const clearIpt = () => {
    setsearchVal("")
  }
  return (
    <div className='collection'>
      <BackHeader></BackHeader>
      <div className="search">
        <div className="search_main">
          <Icon name="icon-sousuo" size="18"></Icon>
          <div className='ipt'>
            <input type="text" placeholder='请输入' value={searchVal} onChange={searchChange} onBlur={searchChange} />
          </div>
          {
            searchVal && <div onClick={clearIpt}><Icon name="icon-close1" size="18"></Icon></div>
          }
        </div>
      </div>
      <div className="list">
        {listType === '1' && (<div className="list_search">
          <div className="list_search_li">
            <div className="list_search_left">
              <img src={ImgSrc} alt="" />
            </div>
            <div className="list_search_right">
              <div className="p1">Rulia and Remé</div>
              <div className="p2">Jeeny Benmy</div>
            </div>
          </div>
          <div className="list_search_btn">
            Add New Playlist
          </div>
        </div>)}
        {listType !== '1' && (<div className="list_main">
          <div className="list_main_li">
            <div className="list_main_left">
              <div className="sort">01</div>
              <div className={listType === '2' ? 'img' : 'img48'}>
                <img src={ImgSrc} alt="" />
              </div>
            </div>
            <div className={listType === '2' ? "list_main_right" : "list_main_right list_main_right247"}>
              <div className="flex">
                <div className="content">
                  <div className="p1">Nice For What</div>
                  {listType === '2' && (<div className="p2">Girl Generation</div>)}
                </div>
                <div className="more">
                  <Icon name="icon-gengduo" size="18"></Icon>
                </div>
              </div>
            </div>
          </div>
        </div>)}


      </div>
    </div>
  )
};

export default Collection;
