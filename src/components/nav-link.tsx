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
      className="text-muted-foreground hover:text-foreground data-[current=true]:text-foreground flex items-center gap-1.5 text-sm font-medium"
      data-current={pathname === rest.to}
    >
      {children}
    </Link>
  )
}
