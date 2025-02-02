import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorIsOpenMenu } from "../../redux/appSlice/selectors";
import { setIsOpenMenu } from "../../redux/appSlice/slice";
import { selectorIsLoggedIn } from "../../redux/auth/selectors";
import { DeviceContext } from "../../components/DeviceProvider/DeviceProvider.jsx";
import GuestMenu from "../GuestMenu/GuestMenu";
import UserMenu from "../UserMenu/UserMenu";
import Modal from "react-modal";
import style from "./ModalMenu.module.css";

Modal.setAppElement("#root");

export default function ModalMenu() {
  const dispatch = useDispatch();
  const isOpenMenu = useSelector(selectorIsOpenMenu);
  const isAuthenticated = useSelector(selectorIsLoggedIn);
  const { isDesktop } = useContext(DeviceContext);

  function closeModal() {
    if (!isDesktop) {
      dispatch(setIsOpenMenu(false));
    }
  }
  return (
    isOpenMenu && (
      <div className={style.modalMenuContainer}>
        {isOpenMenu && !isAuthenticated ? (
          <GuestMenu closeModal={closeModal} />
        ) : (
          <UserMenu closeModal={closeModal} />
        )}
      </div>
    )
  );
}
