import { SpinnerGapIcon } from "@phosphor-icons/react";

export default function Spinner() {
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col gap-2">
      <div className="text-[#9037FF] animate-spin">
        <SpinnerGapIcon size={66} />
      </div>
      <p className="text-[#9037FF] font-bold">Carregando...</p>
    </div>
  );
}
