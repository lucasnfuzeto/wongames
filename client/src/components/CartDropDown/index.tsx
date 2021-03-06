import DropDown from 'components/DropDown'
import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import * as S from './styles'

const CartDropDown = () => (
  <S.Wrapper>
    <DropDown title={<CartIcon />}>
      <CartList hasButton />
    </DropDown>
  </S.Wrapper>
)

export default CartDropDown
