import { Metadata } from "next";

export function constructMetadata({
  title = "Samanpreet Singh",
  description = "I am a software engineer with a passion for building scalable and efficient web applications.",
  image = "/thumbnail.png",
  icons = "/avatar.svg",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@chrislonzo",
    },
    icons,
    metadataBase: new URL("https://www.chrislonzo.com"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
