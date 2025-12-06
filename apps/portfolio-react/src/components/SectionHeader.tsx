type SHProps = {
  title: string;
  caption: string;
};
const SectionHeader = ({ title, caption }: SHProps) => {
  return (
    <section className="h-32 md:h-40 bg-grey-200 border-solid border-y-2 border-grey-100">
      <section className="relative flex justify-start items-center wrapper w-full h-32 md:h-40">
        <h2 className="text-3xl md:text-5xl font-m text-white-300">{title}</h2>
        <p className="absolute top-4 right-0 px-5 lg:px-12 text-white-400 text-base md:text-xl">
          {caption}
        </p>
      </section>
    </section>
  );
};

export default SectionHeader;
