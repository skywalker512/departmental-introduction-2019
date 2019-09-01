import React, { Fragment } from 'react'
import { RCProps } from '@/interface/router'
import departments from '@/json/department'
import DepartmentLayer from '@/components/departmentLayer'

interface IRouterQuery {
  index: string
}

const DepartmentPage: React.FC<RCProps<IRouterQuery>> = ({ location }) => {
  const index = parseInt(location.query.index)
  return (
    <Fragment>
      <DepartmentLayer>
        <div>{departments[index].name}</div>
      </DepartmentLayer>
    </Fragment>
  )
}

export default DepartmentPage
