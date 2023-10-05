import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  console;
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col justify-center items-start text-center gap-y-3 lg:px-20 md:px-15 sm:px-10 px-7">
          <div className="text-4xl max-w-xs text-white font-semibold">
            {data.label}
          </div>
          <h2 className="text-white max-w-xs text-xl">{data.label}</h2>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
