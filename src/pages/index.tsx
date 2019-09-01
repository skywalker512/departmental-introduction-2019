import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import departments from '@/json/department'

const IndexPage: React.FC = () => {
  return (
    <Fragment>
      {departments.map((department, index) => (
        <Link key={department.id} to={`/department?index=${index}`}>
          {department.name}
        </Link>
      ))}
    </Fragment>
  )
}

export default IndexPage
