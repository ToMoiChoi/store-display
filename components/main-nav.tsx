'use client'

import { cn } from '@/lib/utils';
import { Category } from '@/types';
import Link from 'next/link';
import { usePathname }  from 'next/navigation'
interface MainNarProps{
    data: Category[];
};

const MainNar:React.FC<MainNarProps> = ({
    data
}) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname == `/category/${route.id}`
    }))
    return (
        <div className='mx-6 flex items-center space-x-4 lg:space-x-2'>
            {routes.map((route) =>(
                <Link 
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium hover:text-black",
                        route.active ? "text-black" : "text-neutral-500"
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </div>
        );
}
 
export default MainNar;