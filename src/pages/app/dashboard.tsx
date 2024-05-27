import { Helmet } from 'react-helmet-async'

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div>
        <h1 className="mt-5 text-3xl text-red-500">DASHBOARD</h1>
      </div>
    </>
  )
}
