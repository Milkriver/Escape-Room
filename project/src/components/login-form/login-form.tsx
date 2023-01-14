import { FormEvent, useRef } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/user';

function LoginForm(): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };
  return (
    <form className="login-form" action="#" method="post" onSubmit={handleSubmit}>
      <div className="login-form__inner-wrapper">
        <h1 className="title title--size-s login-form__title">Вход</h1>
        <div className="login-form__inputs">
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
            <input type="email" id="email" name="email" placeholder="Адрес электронной почты" required ref={loginRef} />
          </div>
          <div className="custom-input login-htmlForm__input">
            <label className="custom-input__label" htmlFor="password">Пароль</label>
            <input type="password" id="password" name="password" placeholder="Пароль" required ref={passwordRef} />
          </div>
        </div>
        <button className="btn btn--accent btn--general login-form__submit" type="submit" >Войти</button>
      </div>
      <label className="custom-checkbox login-form__checkbox">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <div className="link link--active-silver link--underlined">правилами обработки персональных данных</div>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export default LoginForm;