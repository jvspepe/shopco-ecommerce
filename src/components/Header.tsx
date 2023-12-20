import { Link } from "react-router-dom";
import {
  List,
  MagnifyingGlass,
  ShoppingCartSimple,
} from "@phosphor-icons/react";
import IconButton from "@/components/common/IconButton";
import ActionUser from "@/components/ActionUser";

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between px-4 py-5">
      <div className="flex items-center gap-2">
        <IconButton aria-label="Abrir menu" className="md:hidden">
          <List aria-hidden size={24} weight="bold" />
        </IconButton>
        <Link to="/" className="font-heading text-[2rem] font-black uppercase">
          Shop.co
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <IconButton
          aria-label="Abrir menu de pesquisa de produtos"
          className="md:hidden"
        >
          <MagnifyingGlass aria-hidden size={24} weight="bold" />
        </IconButton>
        <IconButton aria-label="Abrir carrinho">
          <ShoppingCartSimple aria-hidden size={24} weight="bold" />
        </IconButton>
        <ActionUser />
      </div>
    </header>
  );
};

export default Header;
