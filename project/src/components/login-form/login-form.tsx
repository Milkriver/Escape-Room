import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/user';

function LoginForm(): JSX.Element {

  const { register, handleSubmit, formState: { errors } } = useForm<AuthData>();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<AuthData> = ( data ) => dispatch(loginAction(data));

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="login-form__inner-wrapper">
        <h1 className="title title--size-s login-form__title">Вход</h1>
        <div className="login-form__inputs">
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true })}
              {...register('email', { required: 'Укажите почту' })}
              placeholder="Адрес электронной почты"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
          </div>
          <div className="custom-input login-htmlForm__input">
            <label className="custom-input__label" htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              placeholder="Пароль"
              // pattern = '/([0-9].*[a-z])|([a-z].*[0-9])/'
              {...register('password', { required: true, minLength: 2})}
              {...register('password', { required: 'Укажите пароль'})}
              aria-invalid={errors.password ? 'true' : 'false'}
            />
          </div>
        </div>
        <button className="btn btn--accent btn--general login-form__submit" type="submit" >Войти</button>
      </div>
      <label className="custom-checkbox login-form__checkbox">
        <input
          type="checkbox"
          id="id-order-agreement"
          name="user-agreement"
          required
        />
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
