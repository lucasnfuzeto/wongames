import Profile from 'templates/Profile'
import OrdersList, { OrdersListProps } from 'components/OrdersList'

import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'
import { ordersMapper } from 'utils/mappers'
import { QUERY_ORDERS } from 'graphql/queries/orders'
import {
  QueryOrders,
  QueryOrdersVariables
} from 'graphql/generated/QueryOrders'

export default function Cards({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryOrders, QueryOrdersVariables>({
    query: QUERY_ORDERS,
    variables: {
      identifier: session?.id
    }
  })

  return {
    props: {
      session,
      items: ordersMapper(data.orders)
    }
  }
}
