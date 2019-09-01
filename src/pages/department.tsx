import React, { Fragment } from 'react'
import { RCProps } from '@/interface/router'
import departments from '@/json/department'

interface IRouterQuery {
  index: string
}

const DepartmentPage: React.FC<RCProps<IRouterQuery>> =  ({ location }) => {
  const index = parseInt(location.query.index)
  return (
    <Fragment>
      <div>{departments[index].name}</div>
    </Fragment>
  )
}

export default DepartmentPage