import BookingItem from '@/components/booking-item';
import Header from '@/components/header';
import Search from '@/components/search';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Thiago</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "eeee', ' dd 'de' MMMM", {
            locale: ptBR
          })}
        </p>
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>
      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
          Agendamentos
        </h2>
        <BookingItem />
      </div>
    </div>
  );
}
