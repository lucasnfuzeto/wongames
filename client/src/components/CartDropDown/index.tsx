import DropDown from 'components/DropDown'
import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import { GameItemProps } from 'components/GameItem'

import * as S from './styles'

export type CartDropDownProps = {
  items: GameItemProps[]
  total: string
}

const CartDropDown = ({ items, total }: CartDropDownProps) => (
  <S.Wrapper>
    <DropDown title={<CartIcon quantity={items.length} />}>
      <CartList items={items} total={total} hasButton />
    </DropDown>
  </S.Wrapper>
)

export default CartDropDown
