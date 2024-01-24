import { StandardButton } from "../../components/buttons/StyledButtons";

export const HeroSection = () => {
  return (
    <section className="w-full h-[calc(100dvh-96px)]">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-5xl font-bold">Villo</h1>
        <p className="text-2xl font-bold">Utvikling</p>
        <StandardButton>Click me!</StandardButton>
      </div>
    </section>
  );
};
