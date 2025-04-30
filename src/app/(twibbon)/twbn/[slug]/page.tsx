import { notFound, redirect } from "next/navigation";
import { findTwibbon } from "@/utils/database/twibbon.query";

export default async function TwibbonRedirectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const twibbon = await findTwibbon({ slug });

  if (!twibbon) {
    return notFound();
  }

  redirect(
    `https://twibbon.moklet.org/go?` +
      new URLSearchParams({
        title: twibbon.title,
        slug,
        frameUrl: twibbon.frame_url,
        ...(twibbon.caption
          ? { caption: encodeURIComponent(twibbon.caption) }
          : {}),
      }).toString()
  );
}