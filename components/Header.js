import Image from 'next/image';
import { HomeIcon, LightBulbIcon, BadgeCheckIcon, CollectionIcon, SearchIcon, UserIcon } from '@heroicons/react/outline';

import HeaderItem from './HeaderItem';
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between item-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title='Home' Icon={HomeIcon} />
        <HeaderItem title='TRENDING' Icon={LightBulbIcon} />
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
        <HeaderItem title='SEARCH' Icon={SearchIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        alt="Picture of the author"
        width={200}
        height={100}
      />

    </header>
  )
}

export default Header
