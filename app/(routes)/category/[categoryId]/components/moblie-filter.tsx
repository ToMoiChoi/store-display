'use client'

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";

import { useState } from "react";
import Filter from "./filter";

interface MoblieFiltersProps{
    colors: Color[];
    sizes: Size[];
}

const MoblieFilters:React.FC<MoblieFiltersProps> = ({
    colors,
    sizes
}) => {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return ( 
        <>
            <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
                Filter
                <Plus size={20}/>
            </Button>
            <Dialog open={open} as='div' className='relative z-40 lg:hidden' onClose={onClose}>
                {/* Background */}
                <div className="fixed inset-0 bg-black bg-opacity-25"/>
               {/* Dialog position */}
               <div className="fixed z-40 flex inset-0">
                    <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white pb-6 py-4 shadow-xl'>                    
                        {/* Close button */}
                        <div className="flex items-center justify-end px-4">
                            <IconButton icon={<X size={15}/>} onClick={onClose}/>
                        </div>
                        <div className="p-4">
                        <Filter
                            valueKey="sizeId" 
                            name="Sizes" 
                            data={sizes}
                        />
                        <Filter
                            valueKey="colorId" 
                            name="Colors" 
                            data={colors}
                        /> 
                        </div>
                    </Dialog.Panel>
               </div>
            </Dialog>
        </>
     );
}
 
export default MoblieFilters;