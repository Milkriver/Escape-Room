import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addBookingAction } from '../../store/api-actions';

type ITimeSlot = {
  time: string;
  isAvailable: boolean;
};

function BookingForm(): JSX.Element {
  const slots = useAppSelector((state) => state.questBooking);
  const [person, setPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [peopleCount, setPeopleCount] = useState(1);
  const [withChildren, setWithChildren] = useState(false);
  const [time, setTime] = useState('');
  const [day, setDay] = useState('');
  const onPersonChange = (event: React.ChangeEvent<HTMLInputElement>) => setPerson(event.currentTarget.value);
  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => setPhone(event.currentTarget.value);
  const onPeopleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => setPeopleCount(Number(event.currentTarget.value));
  const onWithChildrenClick = () => setWithChildren(!withChildren);
  function onTimeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTime(event.currentTarget.value);
    setDay(event.currentTarget.id);
  }
  const dispatch = useAppDispatch();
  const onFormClick = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (slots !== undefined) {
      dispatch(addBookingAction(
        {
          date: day,
          time: time,
          contactPerson: person,
          phone: phone,
          withChildren: withChildren,
          peopleCount: peopleCount,
          locationId: slots?.locations[0].id,
          questId: slots?.id
        }
      ));
    }

  };
  const renderTimeSlot = (element: ITimeSlot, weekDay: string) => (
    <label className='custom-radio booking-form__date' key={element.time} id={weekDay}>
      <input
        type='radio'
        id={weekDay}
        name='date'
        value={element.time}
        required
        disabled={!element.isAvailable}
        onChange={onTimeChange}
        readOnly
      />
      <span className='custom-radio__label'>{element.time}</span>
    </label>
  );
  return (
    <form className='booking-form' onSubmit={onFormClick}>
      <fieldset className='booking-form__section'>
        <legend className='visually-hidden'>?????????? ???????? ?? ??????????????</legend>
        <fieldset className='booking-form__date-section'>
          <legend className='booking-form__date-title'>??????????????</legend>
          <div className='booking-form__date-inner-wrapper'>{slots?.slots.today.map((element) => renderTimeSlot(element, 'today'))}</div>
        </fieldset>
        <fieldset className='booking-form__date-section'>
          <legend className='booking-form__date-title'>????????????</legend>
          <div className='booking-form__date-inner-wrapper'>{slots?.slots.tomorrow.map((element) => renderTimeSlot(element, 'tomorrow'))}</div>
        </fieldset>
      </fieldset>
      <fieldset className='booking-form__section'>
        <legend className='visually-hidden'>???????????????????? ????????????????????</legend>
        <div className='custom-input booking-form__input'>
          <label className='custom-input__label' htmlFor='name'>???????? ??????</label>
          <input type='text' id='name' name='name' placeholder='??????' pattern='[??-????-??????A-Za-z]{1,}' required onChange={onPersonChange} />
        </div>
        <div className='custom-input booking-form__input'>
          <label className='custom-input__label' htmlFor='tel'>???????????????????? ??????????????</label>
          <input type='tel' id='tel' name='tel' placeholder='??????????????' required pattern='\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}' onChange={onPhoneChange} />
        </div>
        <div className='custom-input booking-form__input'>
          <label className='custom-input__label' htmlFor='person'>???????????????????? ????????????????????</label>
          <input type='number' id='person' name='person' placeholder='???????????????????? ????????????????????' required onChange={onPeopleCountChange} />
        </div>
        <label className='custom-checkbox booking-form__checkbox booking-form__checkbox--children'>
          <input type='checkbox' id='children' name='children' onClick={() => onWithChildrenClick} />
          <span className='custom-checkbox__icon'>
            <svg width='20' height='17' aria-hidden='true'>
              <use xlinkHref='#icon-tick'></use>
            </svg>
          </span>
          <span className='custom-checkbox__label'>????&nbsp;???????? ?????????? ????????</span>
        </label>
      </fieldset>
      <button className='btn btn--accent btn--cta booking-form__submit' type='submit'>??????????????????????????</button>
      <label className='custom-checkbox booking-form__checkbox booking-form__checkbox--agreement'>
        <input type='checkbox' id='id-order-agreement' name='user-agreement' required />
        <span className='custom-checkbox__icon'>
          <svg width='20' height='17' aria-hidden='true'>
            <use xlinkHref='#icon-tick'></use>
          </svg>
        </span>
        <span className='custom-checkbox__label'>??&nbsp;???????????????? ??
          <Link className='link link--active-silver link--underlined' to="#">?????????????????? ?????????????????? ???????????????????????? ????????????</Link>&nbsp;?? ???????????????????????????????? ??????????????????????
        </span>
      </label>
    </form>
  );
}

export default BookingForm;
