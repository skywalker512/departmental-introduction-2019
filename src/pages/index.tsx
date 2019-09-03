import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import departments from '@/json/department'
import IndexLayer from '@/components/indexLayer'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Swiper from 'react-id-swiper'
import { SwiperOptions } from 'swiper'
import styles from './index.less'

const IndexPage: React.FC = () => {
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
  return (
    <Fragment>
      {/*{departments.map((department, index) => (*/}
      {/*  <Link key={department.id} to={`/department?index=${index}`}>*/}
      {/*    {department.name}*/}
      {/*  </Link>*/}
      {/*))}*/}
      <IndexLayer>
        <div className={styles.swiperWapper}>
          <div className={styles.swiperWapper2}>
            <Swiper {...params} containerClass={styles.swiperContainer}>
              <div className={styles.designItem} />
              <div className={styles.designItem} />
              <div className={styles.designItem} />
              <div className={styles.designItem} />
              <div className={styles.designItem} />
              <div className={styles.designItem} />
            </Swiper>
          </div>
        </div>
      </IndexLayer>
    </Fragment>
  )
}

export default IndexPage
