import { BreedByParams } from "../types/breed";

interface BreedDescriptionProps {
  data: BreedByParams[];
}

const BreedDescription = ({ data }: BreedDescriptionProps) => {
  const breed = data[0]?.breeds[0];

  return (
    <div className="relative border-[2px] border-light-pink rounded-20 pt-[19px] pb-[14px] px-[20px] max-w-[640px]">
      <h1 className="text-20 text-dark font-medium px-[20px] py-[16px] rounded-20 bg-white absolute -top-[31px] left-1/2 -translate-x-1/2 w-max md:text-36 md:py-[5px] md:px-[40px]">
        {breed?.name}
      </h1>

      <h2 className="font-medium text-center mb-[20px] relative z-10 md:text-20 md:mt-[5px]">
        {breed?.alt_names}
      </h2>

      <div className="flex flex-wrap gap-[10px] md:gap-[75px]">
        <div className="max-w-[215px]">
          <span className="font-medium text-dark block">Temperament:</span>
          <p>{breed?.temperament}</p>
        </div>

        <ul className="flex flex-col gap-[10px]">
          <li>
            <span className="font-medium text-dark block md:inline-block">
              Origin:
            </span>{" "}
            {breed?.origin}
          </li>
          <li>
            <span className="font-medium text-dark block md:inline-block">
              Weight:
            </span>{" "}
            {breed?.weight.metric} kgs
          </li>
          <li>
            <span className="font-medium text-dark block md:inline-block">
              Life span:
            </span>{" "}
            {breed?.life_span} years
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreedDescription;
