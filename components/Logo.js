// ASRS logo block: dark square with three figures above the wordmark.
export default function Logo() {
  return (
    <div className="flex h-[88px] w-[88px] flex-col bg-asrs-ink">
      {/* three stylized figures */}
      <div className="flex items-end justify-center gap-1 px-2 pt-2">
        <span className="h-3 w-3 rounded-full bg-asrs-coral" />
        <span className="h-4 w-3 rounded-full bg-asrs-coral" />
        <span className="h-3 w-3 rounded-full bg-[#E89A3C]" />
        <span className="h-4 w-3 rounded-full bg-asrs-gold" />
      </div>
      {/* wordmark */}
      <div className="flex flex-1 items-center justify-center">
        <span className="text-2xl font-black tracking-tighter text-white">
          ASRS
        </span>
      </div>
    </div>
  );
}
