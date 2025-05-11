import Link from "next/link";

import { NewsFigureOrganization } from "@/app/_components/global/NewsFigure";
import { UnderlinedTitle, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import ArrowRight from "@/app/_components/icons/ArrowRight";
import { PostWithTagsAndUser } from "@/types/entityRelations";

export default function RelatedNews({
  data,
  orgName,
}: {
  data: PostWithTagsAndUser[];
  orgName: string;
}) {
  return (
    <SectionWrapper id="berita">
      <div className="flex w-full flex-col gap-[54px]">
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-[18px] md:gap-0">
          <UnderlinedTitle underlineClassName="w-[65px] md:w-[100px] top-4 md:top-[24px]">
            Berita Terkait
          </UnderlinedTitle>
          <Link href={`/berita/tags/${orgName}`}>
            <div className="group flex gap-[8px]">
              <span className="text-base text-primary-400 transition-all duration-500 group-hover:text-primary-200">
                Lihat semua
              </span>
              <ArrowRight className="transition-all duration-500 group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
        <div className="w-full overflow-x-none">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-start gap-[36px]">
            {data.length !== 0 ? (
              data.map((post) => (
                <NewsFigureOrganization key={post.id} post={post} />
              ))
            ) : (
              <P>Belum ada berita apa-apa, nih...</P>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
