import { useState } from "react";
import { Link } from "react-router-dom";
import { UserCircle } from "@phosphor-icons/react";
import IconButton from "@/components/common/IconButton";
import Menu from "@/components/common/Menu";

const ActionUser = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Menu
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      position="left"
      handler={
        <IconButton
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu de usuário"
        >
          <UserCircle aria-hidden size={24} weight="bold" />
        </IconButton>
      }
    >
      <div className="grid gap-4">
        <Link to="/criar-conta">Criar conta</Link>
        <Link to="/conectar">Conectar</Link>
      </div>
    </Menu>
  );
};

export default ActionUser;
