import React, { Fragment } from 'react'
import departments from '@/json/department'
import GateLayer from '@/components/gateLayer'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Swiper from 'react-id-swiper'
import { SwiperOptions } from 'swiper'
import styles from './home.less'
import router from 'umi/router'

const IndexPage: React.FC = () => {
  const handelDepartmentClick = (index: number) => {
    router.push({
      pathname: '/department',
      query: {
        index,
      },
    })
  }
  const params: SwiperOptions = {
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
      rotate: 20,
      stretch: -30,
      depth: -50,
      modifier: 0.6,
      slideShadows: false,
    },
  }
  // @ts-ignore
  return (
    <Fragment>
      <GateLayer>
        <div className={styles.swiperWapper}>
          <div className={styles.swiperWapper2}>
            <Swiper {...params} containerClass={styles.swiperContainer}>
              {departments.map((department, index) => (
                <div className={`${styles['item']} ${department.slug}`} onClick={() => handelDepartmentClick(index)} key={index} />
              ))}
            </Swiper>
          </div>
        </div>
      </GateLayer>
    </Fragment>
  )
}

export default IndexPage
