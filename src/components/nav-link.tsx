import { ReactNode } from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'

interface INavLink extends LinkProps {
  children: ReactNode
}

export const NavLink = ({ children, ...rest }: INavLink) => {
  const { pathname } = useLocation()

  return (
    <Link
      {...rest}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      data-current={pathname === rest.to}
    >
      {children}
    </Link>
  )
}
