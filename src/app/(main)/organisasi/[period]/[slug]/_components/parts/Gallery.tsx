import Image from "@/app/_components/global/Image";
import { H2, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";

export default function OrgGallery({
  image,
  organisasi_name,
  period,
  image_description,
}: {
  image: string;
  organisasi_name: string;
  period: string;
  image_description: string;
}) {
  return (
    <SectionWrapper id="gallery">
      <div className="flex flex-col gap-[54px] w-full">
        <div className="flex justify-between flex-col lg:flex-row items-start lg:items-center gap-[18px] lg:gap-[52px]">
          <div className="w-full flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <H2 className="mb-0">
              Photo of {organisasi_name} {period.replace(/-/, " / ")}
            </H2>
            <P className="max-w-full md:max-w-[40%]">{image_description}</P>
          </div>
        </div>
        <div className="flex gap-[18px] flex-col lg:flex-row items-center">
          <div className="w-full rounded-2xl overflow-hidden h-auto lg:h-[460px] xl:h-[520px] 2xl:h-[580px]">
            <Image
              src={image}
              alt="Image"
              width={587}
              height={407}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
