import Link from "next/link";

import Image from "@/app/_components/global/Image";
import { Tags } from "@/app/_components/global/NewsFigure";
import { PostWithTagsAndUser } from "@/types/entityRelations";
import { stringifyDate, trimName } from "@/utils/atomics";

export default function RelatedNewsFigure({
  post,
}: Readonly<{ post: PostWithTagsAndUser }>) {
  return (
    <figure className="w-full lg:w-[339px] xl:w-[372px]">
      <div className="h-[200px] w-full">
        <Image
          src={post.thumbnail}
          alt="wao"
          height={200}
          width={372}
          className="h-full w-full object-cover rounded-[20px]"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[26px]">
        <div>
          <div className="mb-[16px] mt-[26px] flex flex-wrap gap-[10px]">
            {post.tags.map((tag) => (
              <Tags tag={tag} key={tag.tagName} />
            ))}
          </div>
          <Link
            href={"/berita/" + post.slug}
            className="text-black hover:text-primary-400 transition-all duration-500"
          >
            <div className="min-h-[52px]">
              <span className="text-[18px] md:text-xl font-bold">
                {post.title.length > 52
                  ? post.title.slice(0, 48) + "..."
                  : post.title}
              </span>
            </div>
          </Link>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-3">
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
