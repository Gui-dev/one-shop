import { useMutation, useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'
import { useState } from 'react'

import { cancelOrder } from '@/api/cancel-order'
import { IGetOrdersResponse, IOrderParams } from '@/api/get-orders'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderStatus, OrderStatusProps } from './order-status'
import { OrderDetail } from './orders-details'

interface IOrderTableRow {
  order: IOrderParams
}

export const OrderTableRow = ({ order }: IOrderTableRow) => {
  const [iseDetailsOpen, setIsDetailsOpen] = useState(false)
  const queryClient = useQueryClient()

  const updateOrderStatusOnCache = (
    orderId: string,
    status: OrderStatusProps,
  ) => {
    const ordersListCache = queryClient.getQueriesData<IGetOrdersResponse>({
      queryKey: ['orders'],
    })
    ordersListCache.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return
      }
      queryClient.setQueryData<IGetOrdersResponse>(cacheKey, {
        ...cacheData,
        orders: cacheData.orders.map((order) => {
          if (order.id === orderId) {
            return { ...order, status }
          }
          return order
        }),
      })
    })
  }

  const { mutateAsync: cancelOrderFn } = useMutation({
    mutationFn: cancelOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, 'canceled')
    },
  })

  return (
    <TableRow>
      <TableCell>
        <Dialog open={iseDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs" title="Detalhes do pedido">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetail orderId={order.id} open={iseDetailsOpen} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {order.id}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {order.totalInCents.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>
      <TableCell>
        <Button variant="outline" size="xs" title="Aprovar pedido">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button
          variant="ghost"
          size="xs"
          title="Cancelar pedido"
          disabled={!['pending', 'processing'].includes(order.status)}
          onClick={() => cancelOrderFn({ orderId: order.id })}
        >
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
