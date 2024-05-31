import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { LabelChart } from './label-chart'

export const PopularProductsChart = () => {
  const data = [
    { product: 'Pepperoni', amount: 40 },
    { product: 'Mussarela', amount: 50 },
    { product: 'Marguerita', amount: 16 },
    { product: '4 queijos', amount: 26 },
    { product: 'Portuguesa', amount: 30 },
  ]
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
        <ResponsiveContainer height={240} width="100%">
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              label={<LabelChart data={data} />}
              labelLine={false}
            >
              {data.map((_, index) => {
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
      </CardContent>
    </Card>
  )
}
