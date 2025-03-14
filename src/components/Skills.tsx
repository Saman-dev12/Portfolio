import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "TypeScript",
  "HonoJS",
  "JavaScript",
  "Python",
  "C++",
  "C",
  "HTML",
  "CSS",
  "TailwindCSS",
  "NextJS",
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Redis",
  "Langchain",
  "Drizzle-ORM",
  "Prisma-ORM",
  "Docker",
];

export const Skills = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <Badge key={i} variant="secondary">
              {s}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
