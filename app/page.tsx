export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-900">
      <div className="flex h-96 w-full flex-col p-4">
        <div className="flex h-full items-center justify-center">
          <div className="flex h-12 w-5/6 flex-row items-center justify-around rounded-full bg-gradient-to-r from-purple-700 to-red-500">
            <div className="h-8 w-8 rounded-full border-4 border-black bg-gradient-radial from-amber-300 to-amber-700">
              <div className="-translate-y-7">
                <h1 className="origin-left rotate-[-40deg] text-nowrap px-8 text-3xl font-semibold text-white">Home</h1>
              </div>
            </div>
            <div className="h-8 w-8 rounded-full border-4 border-black bg-gradient-radial from-amber-300 to-amber-700">
              <div className="-translate-y-7">
                <h1 className="origin-left rotate-[-40deg] text-nowrap px-8 text-3xl font-semibold text-white">
                  About
                </h1>
              </div>
            </div>
            <div className="h-8 w-8 rounded-full border-4 border-black bg-gradient-radial from-amber-300 to-amber-700">
              <div className="-translate-y-7">
                <h1 className="origin-left rotate-[-40deg] text-nowrap px-8 text-3xl font-semibold text-white">
                  Skills
                </h1>
              </div>
            </div>
            <div className="h-8 w-8 rounded-full border-4 border-black bg-gradient-radial from-amber-300 to-amber-700">
              <div className="-translate-y-7">
                <h1 className="origin-left rotate-[-40deg] text-nowrap px-8 text-3xl font-semibold text-white">
                  Projects
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
}
