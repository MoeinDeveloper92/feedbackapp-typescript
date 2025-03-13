const Tooltip = ({ text }: { text: string }) => {
  return (
    <div className="opacity-0 text-sm absolute w-fit whitespace-nowrap px-2 py-1 border-1 rounded-2xl -left-[50px] bg-white -top-10 group-hover:opacity-100 pointer-events-none">
      <p className="p-2">{text}</p>
    </div>
  );
};

export default Tooltip;
// pointer - events - none; => this class prevents the tooltop from being cosndioered when detecting hobvers.
