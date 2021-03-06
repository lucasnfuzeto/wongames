import { render } from 'utils/test-utils'
import { FormWrapper, FormLink } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <FormWrapper>
        <FormLink>
          <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchSnapshot()
  })
})
