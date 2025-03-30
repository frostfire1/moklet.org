import Link from "next/link";

import Image from "@/app/_components/global/Image";
import { PostWithTagsAndUser } from "@/types/entityRelations";
import { stringifyDate, trimName } from "@/utils/atomics";

export function WideNewsFigure({
  post,
}: Readonly<{ post: PostWithTagsAndUser }>) {
  return (
    <figure className="w-full h-[140px] md:w-[45%] flex gap-[26px]">
      <div className="min-w-[140px] h-full">
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={140}
          height={140}
          className="h-[140px] w-[140px] rounded-2xl object-cover"
        />
      </div>
      <div className="w-full flex flex-col gap-0 md:gap-[52px] text-wrap">
        <Link
          href={"/berita/" + post.slug}
          className="text-black hover:text-primary-400 transition-all duration-500"
        >
          <div className="min-h-[87px] md:min-h-[60px]">
            <span className="text-[18px] md:text-[20px] font-bold">
              {post.title.length > 52
                ? post.title.slice(0, 48) + "..."
                : post.title}
            </span>
          </div>
        </Link>
        <div className="flex flex-col justify-start gap-[10px] lg:flex-row w-full md:gap-0 items-start lg:items-center lg:justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={post.user.user_pic}
              alt={post.user.name + "'s Pfp"}
              height={28}
              width={28}
              className="h-7 w-7 object-cover rounded-full"
            />
            <span className="text-base text-black">
              {trimName(post.user.name)}
            </span>
          </div>
          <span className="text-neutral-500">
            {post.published_at && stringifyDate(post.published_at)}
          </span>
        </div>
      </div>
    </figure>
  );
}
