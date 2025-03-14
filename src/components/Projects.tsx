import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
  {
    title: "Talking-Code",
    description:
      "Talking-Code is an AI-powered GitHub assistant to help developers analyze repositories, and allow to talk with it.",
    tech: "Langchain",
    link: "https://talking-code.vercel.app/",
  },
  {
    title: "Address-AI",
    description:
      "Address-AI is a web application that uses AI and OCR to validate and correct postal addresses.",
    tech: "NextJS",
    link: "https://address-ai.vercel.app/",
  },
  {
    title: "Collaborative-Editor",
    description:
      "Collaborative Code Editor is a web-based platform designed for real-time coding collaboration.",
    tech: "Nextjs",
    link: "https://collaborative-editor-three.vercel.app/",
  },
  {
    title: "Disco-Infinite-Store",
    description:
      "Disco Infinite Store is a web-based platform designed for uploading and storing images using Discord's CDN.",
    tech: "Discordjs",
    link: "https://discoimg.vercel.app/",
  },
];

const techColors = {
  NextJS: "bg-blue-500",
  TypeScript: "bg-blue-500",
  Judge0: "bg-orange-500",
  Langchain: "bg-green-500",
  Prisma: "bg-purple-500",
  Python: "bg-yellow-500",
};

export const Projects = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {projects.map((p, i) => (
          <Card key={i}>
            <CardContent className="pt-6 h-full">
              <div className="flex flex-col h-full">
                <Link
                  href={p.link}
                  className="font-semibold text-primary hover:underline"
                >
                  {p.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-1 mb-4">
                  {p.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className={cn(
                        "size-4 rounded-full",
                        techColors[p.tech as keyof typeof techColors]
                      )}
                    />
                    <span className="text-xs font-medium text-muted-foreground">
                      {p.tech}
                    </span>
                  </div>
                  <Link
                    href={p.link}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    View Project
                    <ExternalLink className="inline-block size-3" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
