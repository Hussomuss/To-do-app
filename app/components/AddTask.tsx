import { useState } from "react";

import { TiPlus } from "react-icons/ti";
import Modal from "./Modal";

function AddTask() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button className="btn btn-primary w-full">
        Add new task <TiPlus className="ml-4" size={20} />
      </button>

      <Modal />
    </div>
  );
}

export default AddTask;
