import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from '../pagination'

const onPageChangeCallback = vi.fn()

describe('<Pagination />', () => {
  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        page_index={1}
        per_page={10}
        total_count={200}
        onPageChange={() => {}}
      />,
    )

    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })

  it('should be able to navigate to next page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        page_index={1}
        per_page={10}
        total_count={200}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    })
    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(2)
  })

  it('should be able to navigate to previous page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        page_index={5}
        per_page={10}
        total_count={200}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Página anterior',
    })
    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(4)
  })
})
