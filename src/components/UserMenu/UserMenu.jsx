// import { useLogoutRedirect } from 'hooks/logOutRedirects';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { nameSelector } from 'redux/auth/selectors';
import { UserMenuStyled } from './UserMenu.styled';
import { TiUser } from 'react-icons/ti';
import { HiMiniArrowRightOnRectangle } from 'react-icons/hi2';
function UserMenu() {
  const dispatch = useDispatch();

  const userName = useSelector(nameSelector);
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <UserMenuStyled>
        <div className="userInfo">
          <TiUser size={20} />
          <p className="userName">{userName}</p>
        </div>
        <button className="logOutBtn" type="button" onClick={handleLogOut}>
          <HiMiniArrowRightOnRectangle
            className="icon"
            size={15}
            title={'Log out'}
          />
        </button>
      </UserMenuStyled>
    </>
  );
}

export default UserMenu;
