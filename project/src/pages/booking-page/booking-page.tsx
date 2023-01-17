import BookingForm from '../../components/booking-form/booking-form';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';

function BookingPage(): JSX.Element {
  const activeQuest = useAppSelector((state) => state.activeQuest);
  const questBookingSlots = useAppSelector((state) => state.questBooking);
  return (
    <div className='wrapper'>
      <Header />
      <main className='page-content decorated-page'>
        <div className='decorated-page__decor' aria-hidden='true'>
          <picture>
            <source type='image/webp' srcSet='img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x' />
            <img src='img/content/maniac/maniac-bg-size-m.jpg' srcSet='img/content/maniac/maniac-bg-size-m@2x.jpg 2x' width='1366' height='1959' alt='' />
          </picture>
        </div>
        <div className='container container--size-s'>
          <div className='page-content__title-wrapper'>
            <h1 className='subtitle subtitle--size-l page-content__subtitle'>Бронирование квеста
            </h1>
            <p className='title title--size-m title--uppercase page-content__title'>{activeQuest?.title}</p>
          </div>
          <div className='page-content__item'>
            <div className='booking-map'>
              <div className='map'>
                {(questBookingSlots) ? <Map coordinates={questBookingSlots.locations[0].coords}/> : ''}
              </div>
              <p className='booking-map__address'>{questBookingSlots?.locations[0].address}</p>
            </div>
          </div>
          <BookingForm />
        </div>
      </main>
      <Footer />
    </div >
  );
}

export default BookingPage;
