import Link from 'next/link'
import { signOut } from 'next-auth/client'
import { useRouter } from 'next/router'
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

import DropDown from 'components/DropDown'

import * as S from './styles'

export type UserDropDownProps = {
  username: string
}

const UserDropDown = ({ username }: UserDropDownProps) => {
  const { push } = useRouter()

  return (
    <DropDown
      title={
        <>
          <AccountCircle size={24} />
          <S.Username>{username}</S.Username>
          <ChevronDown size={24} />
        </>
      }
    >
      <S.Nav>
        <Link href="/profile/me" passHref>
          <S.Link>
            <AccountCircle />
            <span>My profile</span>
          </S.Link>
        </Link>
        <Link href="/wishlist" passHref>
          <S.Link title="Wishlist">
            <FavoriteBorder />
            <span>Wishlist</span>
          </S.Link>
        </Link>

        <S.Link
          role="button"
          onClick={async () => {
            const data = await signOut({ redirect: false, callbackUrl: '/' })
            push(data.url)
          }}
          title="Sign out"
        >
          <ExitToApp />
          <span>Sign out</span>
        </S.Link>
      </S.Nav>
    </DropDown>
  )
}

export default UserDropDown
