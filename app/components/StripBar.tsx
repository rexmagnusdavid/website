function StripStation(props: { name: string }) {
  return (
    <button className="aspect-square h-3/4 rounded-full border-4 border-black bg-gradient-radial from-amber-300 to-amber-700">
      <div className="-translate-y-7">
        <h1 className="origin-left rotate-[-40deg] text-nowrap px-6 text-xl font-semibold text-white">{props.name}</h1>
      </div>
    </button>
  );
}

export function StripBar() {
  return (
    <div className="flex h-8 w-5/6 flex-row items-center justify-around rounded-full bg-green-800">
      <StripStation name="Developer St"></StripStation>
      <StripStation name="Researcher Sq"></StripStation>
      <StripStation name="Transit Nerd Av"></StripStation>
    </div>
  );
}
