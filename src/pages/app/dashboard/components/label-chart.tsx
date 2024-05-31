interface ILabelChart {
  data: {
    product: string
    amount: number
  }[]
  cx?: string | number | undefined
  cy?: string | number | undefined
  midAngle?: string | number | undefined
  innerRadius?: string | number | undefined
  outerRadius?: string | number | undefined
  value?: string | number | undefined
  index?: string | number | undefined
}

export const LabelChart = ({
  data,
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  index,
}: ILabelChart) => {
  const RADIAN = Math.PI / 180
  const radius =
    12 + Number(innerRadius) + (Number(outerRadius) - Number(innerRadius))
  const x = Number(cx) + radius * Math.cos(-Number(midAngle) * RADIAN)
  const y = Number(cy) + radius * Math.sin(-Number(midAngle) * RADIAN)

  return (
    <text
      x={x}
      y={y}
      className="fill-muted-foreground text-xs"
      textAnchor={Number(x) > Number(cx) ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {data && data[Number(index)].product.length > 12
        ? data[Number(index)].product.substring(0, 12).concat('...')
        : data[Number(index)].product}{' '}
      ({value})
    </text>
  )
}
