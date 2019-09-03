import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import departments from '@/json/department'
import IndexLayer from '@/components/indexLayer'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Swiper from 'react-id-swiper'
import { SwiperOptions } from 'swiper'
import styles from './index.less'
import router from 'umi/router'

const IndexPage: React.FC = () => {
  const handelDepartmentClick = (index: number) => {
    router.push({
      pathname: '/department',
      query: {
        index,
      }
    })
  }
    const params: SwiperOptions =  {
      // 切换效果
      effect: 'coverflow',
      // 开始图片
      initialSlide: 2,
      // 是否有手形
      grabCursor: false,
      // 激活的那个居中
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      coverflowEffect: {
        rotate: 16,
        stretch: -20,
        depth: -150,
        modifier: 1,
        slideShadows: true
      },
    }
  // @ts-ignore
  return (
    <Fragment>
      <IndexLayer>
        <div className={styles.swiperWapper}>
          <div className={styles.swiperWapper2}>
            <Swiper {...params} containerClass={styles.swiperContainer}>
              {departments.map((department, index) => (
                <div className={styles.designItem} onClick={()=>handelDepartmentClick(index)}/>
              ))}
            </Swiper>
          </div>
        </div>
      </IndexLayer>
    </Fragment>
  )
}

export default IndexPage
