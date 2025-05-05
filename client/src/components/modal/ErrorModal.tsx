import { useAtom } from "jotai";
import { ErrorModalAtom } from "../../atoms/errorModalAtom";

export const ErrorModal = () => {
  const [modal, setModal] = useAtom(ErrorModalAtom);

  if (!modal) return;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white overflow-hidden  flex flex-col items-center rounded-lg w-96 relative border border-base-content/50">
        <div className={`bg-error  w-full p-3 items-center flex-col justify-center flex`}>
          <h2 className="text-3xl font-medium text-white ">Error</h2>
        </div>
        <p className="text-base-content/70 font-medium my-2">{modal.text}</p>

        <button
          onClick={() => setModal(null)}
          className="py-2 my-5 w-fit px-10 bg-white rounded-2xl hover:bg-white/70 cursor-pointer select-none
          active:translate-y-1 active:[box-shadow:0_0px_0_0_,0_0px_0_0_]
          active:border-b-[0px]
          transition-all 
        border border-base-content/20    [box-shadow:0_7px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)]
          border-b-[0.5px] "
        >
          <span className=" text-base-content font-medium">Okay!</span>
        </button>
      </div>
    </div>
  );
};
