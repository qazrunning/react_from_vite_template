// rsi 快速构建模版
import React from 'react';
import './index.less'
import Icon from '@/components/Icon'
import HomeHeader from '@/components/HomeHeader';
import HeaderImg from '@/assets/images/Ellipse@2x.png'
import Rectangle from '@/assets/images/Rectangle.png'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Mine = (props: any) => {
  const listArr = [
    {
      iconName: 'icon-a-yinlebofangliebiaoyinle',
      title: '播放列表',
      type: '1',
      id: 100
    },
    {
      iconName: 'icon-zhuanji',
      title: '专辑',
      type: '2',
      id: 101
    },
    {
      iconName: 'icon-yinle',
      title: 'MV',
      type: '2',
      id: 102
    },
    {
      iconName: 'icon-shouye',
      title: 'Artist',
      type: '3',
      id: 103
    },
    {
      iconName: 'icon-xiazai',
      title: '下载',
      type: '0',
      id: 104
    },
  ]
  const navigation = useNavigate()
  const toCollection = (type: string) => {
    if (type === '0') {
      return
    }
    // 补充一个方法，对象转成url可以用的参数
    navigation(`/collection?type=${type}`, { replace: false })
  }
  return (
    <div className='mine'>
      <div className='pd24'>
        <HomeHeader title="Account">
          <Icon name="icon-shezhi" color="#eee" size="26"></Icon>
        </HomeHeader>
      </div>
      <div className="pd24 info_main">
        <div className="info_main_left">
          <img src={HeaderImg} alt="" />
        </div>
        <div className="info_main_right">
          <div className="info_main_right_top">
            <div className="info_main_right_top_item">
              <div className="p1">22</div>
              <div className="p2">Playlist</div>
            </div>
            <div className="info_main_right_top_item">
              <div className="p1">320k</div>
              <div className="p2">Follower</div>
            </div>
            <div className="info_main_right_top_item">
              <div className="p1">56</div>
              <div className="p2">Following</div>
            </div>
          </div>
          <div className="info_main_right_bottom">
            <div className="btn">Edit</div>
          </div>
        </div>
      </div>
      <div className="play_list pd24">
        <div className="play_list_title">
          Library
        </div>
        <div className="play_list_main">
          {listArr.map((item) => {
            return (
              <div key={item.id} className="play_list_main_li" onClick={() => toCollection(item.type)}>
                <Icon name={item.iconName} color='#eee'></Icon>
                <div className='play_list_main_li_flex'>
                  <p>{item.title}</p>
                  <Icon name="icon-jiantouyou" color='#eee'></Icon>
                </div>
              </div>
            )
          })}

        </div>
      </div>
      <div className="activity_list">
        <div className="activity_list_title">
          Recent Activity
        </div>
        <div className="activity_list_main">
          <div className="ul">
            {listArr.map((item) => {
              return (
                <div key={item.id} className="ul_li">
                  <img src={Rectangle} alt="" />
                </div>
              )
            })}
            <div className="ul_li"></div>
          </div>
          <div className="ul">
            {listArr.map((item) => {
              return (
                <div key={item.id} className="ul_li">
                  <img src={Rectangle} alt="" />
                </div>
              )
            })}
            <div className="ul_li"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mine