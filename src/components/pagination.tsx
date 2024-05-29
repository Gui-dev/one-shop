import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

export interface IPagination {
  page_index: number
  total_count: number
  per_page: number
}

export const Pagination = ({
  page_index,
  total_count,
  per_page,
}: IPagination) => {
  const pages = Math.ceil(total_count / per_page) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {total_count} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {page_index + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="xs" title="Primeira página">
            <ChevronsLeft className="h-4 w-4 text-white" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button variant="outline" size="xs" title="Página anterior">
            <ChevronLeft className="h-4 w-4 text-white" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button variant="outline" size="xs" title="Próxima página">
            <ChevronRight className="h-4 w-4 text-white" />
            <span className="sr-only">Próxima página</span>
          </Button>
          <Button variant="outline" size="xs" title="Última página">
            <ChevronsRight className="h-4 w-4 text-white" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
