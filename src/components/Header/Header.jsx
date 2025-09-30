import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/userStore/userSelector";
import { setUser } from "../../store/userStore/userSlice";

const Header = () => {
   const dispatch = useDispatch();
   const user = useSelector(selectUser);

   useEffect(() => {
      const loadUser = () => {
         setTimeout(() => {
            dispatch(
               setUser({
                  id: 1,
                  name: "Иван Иванов",
                  email: "ivan@example.com",
               })
            );
         }, 500);
      };

      loadUser();
   }, [dispatch]);

   return (
      <header className="header">
         <h1>🛒 Интернет-магазин</h1>
         <div className="user-info">{user ? <span>Привет, {user.name}!</span> : <span>Загрузка...</span>}</div>
      </header>
   );
};

export default Header;
