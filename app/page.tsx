import { StripBar } from "./components/StripBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 bg-black p-4">
      <div className="flex h-48 w-2/3 flex-col rounded-lg bg-black pb-6 pt-28">
        <div className="flex h-full items-center justify-center">
          <StripBar></StripBar>
        </div>
      </div>
    </main>
  );
}
