import { RouteComponentProps } from 'react-router-dom';
import { Location } from 'history'

interface RCLocation<RouterQuery> extends Location {
  query: RouterQuery
}

export interface RCProps<RouterQuery = { [key: string]: string }> extends RouteComponentProps {
  location: RCLocation<RouterQuery>
}