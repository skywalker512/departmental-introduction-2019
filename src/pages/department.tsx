import React, { Fragment } from 'react'
import { RCProps } from '@/interface/router'
import departments from '@/json/department'
import styles from './department.less'

import DepartmentLayer from '@/components/departmentLayer'
import VBack from '@/components/Vback'
import DepartmentButton from '@/components/departmentButton'

import IconBrain from '@/assets/img/departmentIconBrain.png'

interface IRouterQuery {
  index: string
}

const SelectionControl: React.FC = () => {
  return (
    <Fragment>
      <div className={styles.iconBrain}>
        <DepartmentButton>
          <img src={IconBrain} />
        </DepartmentButton>
      </div>
    </Fragment>
  )
}

const DepartmentPage: React.FC<RCProps<IRouterQuery>> = ({ location }) => {
  const index = parseInt(location.query.index)
  return (
    <Fragment>
      <DepartmentLayer>
        <VBack />
        <SelectionControl />
        <div>{departments[index].name}</div>
      </DepartmentLayer>
    </Fragment>
  )
}

export default DepartmentPage
