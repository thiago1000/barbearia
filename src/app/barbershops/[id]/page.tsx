import { Key } from 'react';

import BarbershopInfo from '@/components/barbershop-info';
import ServiceItem from '@/components/service-item';
import { db } from '@/lib/prisma';

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({
  params
}: BarbershopDetailsPageProps) => {
  if (!params.id) {
    // redirecionar para home page
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id
    },
    include: {
      services: true
    }
  });

  if (!barbershop) {
    // redirecionar para home page
    return null;
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />
      <div className="gap-3 flex flex-col px-5 py-6">
        {barbershop.services.map((service: { id: Key | null | undefined }) => (
          <ServiceItem
            key={service.id}
            service={service}
            barbershop={barbershop}
            isAuthenticated={true}
          />
        ))}
      </div>
    </div>
  );
};

export default BarbershopDetailsPage;
