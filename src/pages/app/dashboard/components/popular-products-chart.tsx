import { useQuery } from '@tanstack/react-query'
import { BarChart, Loader2 } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { getPopularProducts } from '@/api/get-popular-products'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { LabelChart } from './label-chart'

export const PopularProductsChart = () => {
  const { data: popularProducts } = useQuery({
    queryKey: ['metrics', 'popular-products'],
    queryFn: getPopularProducts,
  })

  const COLORS = [
    colors.sky[500],
    colors.amber[500],
    colors.violet[500],
    colors.emerald[500],
    colors.rose[500],
  ]

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="h-5 w-5" />
        </div>
      </CardHeader>
      <CardContent>
        {popularProducts && (
          <>
            <ResponsiveContainer height={240} width="100%">
              <PieChart style={{ fontSize: 12 }}>
                <Pie
                  data={popularProducts}
                  dataKey="amount"
                  nameKey="product"
                  cx="50%"
                  cy="50%"
                  outerRadius={86}
                  innerRadius={64}
                  strokeWidth={8}
                  label={<LabelChart data={popularProducts} />}
                  labelLine={false}
                >
                  {popularProducts.map((_, index) => {
                    return (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index]}
                        className="stroke-background hover:opacity-80"
                      />
                    )
                  })}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </>
        )}
        {!popularProducts && (
          <>
            <div className="flex h-[240px] w-full items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
