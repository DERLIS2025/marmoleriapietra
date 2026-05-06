export function TopBar() {
  return (
    <div className="bg-pietra-green/15 text-[11px] text-pietra-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-4 py-1 text-center sm:grid-cols-3 sm:gap-1 sm:px-6 sm:py-1.5 lg:px-8">
        <p className="hidden sm:block sm:text-left">info@pietra.com</p>
        <p className="font-medium">Asesoramiento y cotización sin compromiso</p>
        <p className="hidden sm:block sm:text-right">PYG · Español</p>
      </div>
    </div>
  );
}
