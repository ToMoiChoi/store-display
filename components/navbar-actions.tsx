"use client";

import { Heart, Search, ShoppingCart, User2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      {/* <Button
        onClick={() => router.push("/")}
        className="flex items-center px-2 bg-white"
      >
        <Search size={24} color="black" />
      </Button>
      <Button
        onClick={() => router.push("/")}
        className="flex items-center px-2 bg-white"
      >
        <User2 size={24} color="black" />
      </Button>
      <Button
        onClick={() => router.push("/")}
        className="flex items-center px-2 bg-white"
      >
        <Heart size={24} color="black" />
      </Button> */}
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center px-2 bg-white"
      >
        <ShoppingCart size={24} color="black" />

        <span className="ml-2 text-sm font-medium text-black">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
