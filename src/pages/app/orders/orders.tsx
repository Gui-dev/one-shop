import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getOrders } from '@/api/get-orders'
import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrderTableFilters } from './components/order-table-filters'
import { OrderTableRow } from './components/order-table-row'

export const Orders = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  // const pageIndex = z.coerce
  //   .number()
  //   .transform((page) => page - 1)
  //   .parse(searchParams.get('_page') ?? '0')
  const pageIndex = z.coerce.number().parse(searchParams.get('_page') ?? '1')
  const { data: result } = useQuery({
    queryKey: ['orders', pageIndex],
    queryFn: () => getOrders({ pageIndex }),
  })

  const handlePaginate = (pageIndex: number) => {
    setSearchParams((state) => {
      state.set('_page', String(pageIndex))
      // state.set('_page', String(pageIndex + 1))
      return state
    })
  }

  console.log(pageIndex)

  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Realizado há</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do pedido</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {result &&
                  result.orders.map((order) => {
                    return <OrderTableRow key={order.orderId} order={order} />
                  })}
              </TableBody>
            </Table>
          </div>
          {result && (
            <Pagination
              page_index={result.meta.page}
              total_count={result.meta.totalCount}
              per_page={result.meta.limit}
              onPageChange={handlePaginate}
            />
          )}
        </div>
      </div>
    </>
  )
}
