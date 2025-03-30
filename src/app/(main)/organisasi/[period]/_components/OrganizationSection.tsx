import Link from "next/link";

import Image from "@/app/_components/global/Image";
import { H2, H4, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import ArrowRight from "@/app/_components/icons/ArrowRight";

import { OrganisasiSection } from "./Parts/Organizations";

export default function OrganizationSection({
  data,
  period,
}: {
  data: OrganisasiSection;
  period: string;
}) {
  return (
    <SectionWrapper id={data.sectionName} key={data.sectionName}>
      <div className="flex flex-col lg:flex-row gap-[62px] justify-between">
        <div className="w-full lg:w-[512px] flex flex-col gap-7">
          <div className="flex gap-[22px] items-center">
            <div className="bg-primary-50 rounded-full w-[62px] h-[62px] flex items-center justify-center">
              {data.sectionLogo}
            </div>
            <H2>{data.sectionName}</H2>
          </div>
          <P className="text-justify md:text-left">{data.sectionDesc}</P>
        </div>
        <div className="w-full lg:w-[618px] flex flex-col gap-[18px]">
          {data.sectionOrgans.map((organisasi) => (
            <Link
              className="w-full rounded-xl border p-[22px] border-neutral-400 flex items-center justify-between gap-0 md:gap-[42px] group transition-all hover:border-primary-300 duration-300"
              href={`/organisasi/${period}/${organisasi.organisasi}`}
              key={organisasi.organisasi_name}
            >
              <div className="w-full flex items-center gap-8">
                <Image
                  alt={organisasi.organisasi_name}
                  src={organisasi.logo}
                  width={62}
                  height={62}
                  className="w-[62px] h-[62px] object-cover"
                />
                <div className="flex flex-col gap-[6px] w-[80%]">
                  <H4>{organisasi.organisasi}</H4>
                  <P className="line-clamp-1">{organisasi.description}</P>
                </div>
              </div>
              <ArrowRight className="group-hover:translate-x-1/4 transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
