import Aside from "@components/Aside";
import useWindowSize from "@hooks/useWindowSize";

const HomePage = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width < 1440 && <Aside />}

      <section className="hidden lg:block">
        <div className="rounded-20 bg-transparent w-[680px] h-[840px]" />

        <div className="before:content-[''] before:block before:h-[840px] before:w-[680px] before:bg-light-pink before:absolute before:top-[30px] before:right-[30px] before:rounded-20">
          <img
            src={"/images/girl.png"}
            alt="girl and pet"
            width={775}
            height={900}
            className="absolute top-0 right-[0px] w-[775px] h-[900px]"
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
