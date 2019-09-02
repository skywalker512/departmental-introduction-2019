import React, { Fragment } from 'react'
import { RCProps } from '@/interface/router'
import departments from '@/json/department'
import styles from './department.less'

import DepartmentLayer from '@/components/departmentLayer'
import VBack from '@/components/Vback'
import DepartmentButton from '@/components/departmentButton'

import IconBrain from '@/assets/img/departmentIconBrain.png'
import IconArt from '@/assets/img/departmentIconArt.png'
import IconPhone from '@/assets/img/departmentIconPhone.png'
import IconEarth from '@/assets/img/departmentIconEarth.png'
import IconSre from '@/assets/img/departmentIconSre.png'
import DepartmentTitle from '@/components/departmentTitle';
import DepartmentDetail from '@/components/dapartmentDetail';


interface IRouterQuery {
  index: string
}

const SelectionControl: React.FC = () => {
  return (
    <div className={styles.selectionControl}>
      <div className={styles.iconBrain}>
        <DepartmentButton>
          <img src={IconBrain} />
        </DepartmentButton>
      </div>
      <div className={styles.iconArt}>
        <DepartmentButton>
          <img src={IconArt} />
        </DepartmentButton>
      </div>
      <div className={styles.iconPhone}>
        <DepartmentButton>
          <img src={IconPhone} />
        </DepartmentButton>
      </div>
      <div className={styles.iconEarth}>
        <DepartmentButton>
          <img src={IconEarth} />
        </DepartmentButton>
      </div>
      <div className={styles.iconSre}>
        <DepartmentButton>
          <img src={IconSre} />
        </DepartmentButton>
      </div>
    </div>
  )
}

interface IDetailBoxProps {
  name: string
  detail: string
}

const DetailBox: React.FC<IDetailBoxProps>  = ({ name, detail }) => {
  return (
    <div className={styles.detailBox}>
      <DepartmentTitle>{name}介绍</DepartmentTitle>
      <DepartmentDetail>{detail}</DepartmentDetail>
    </div>
  )
}

const DepartmentPage: React.FC<RCProps<IRouterQuery>> = ({ location }) => {
  const index = parseInt(location.query.index)
  return (
    <Fragment>
      <DepartmentLayer>
        <VBack />
        <SelectionControl />
        <DetailBox name={departments[index].name} detail={departments[index].detail} />
      </DepartmentLayer>
    </Fragment>
  )
}

export default DepartmentPage
