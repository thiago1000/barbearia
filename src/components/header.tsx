import Image from 'next/image';

import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

import { MenuIcon } from 'lucide-react';

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 flex justify-between flex-row items-center">
        <Image src="/logo.png" alt="Barbearia" height={18} width={120} />
        <Button variant={'outline'} size={'icon'} className="h-8 w-8">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
