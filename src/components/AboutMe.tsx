import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

export const AboutMe = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {/* Write 1-2 sentences about yourself */}I’m a passionate web
          developer and solopreneur focused on creating scalable, efficient, and
          user-friendly web applications. With a strong foundation in front-end
          and back-end technologies, I specialize in building solutions that
          solve real-world problems. I thrive on turning ideas into reality
          through clean code, modern design, and innovative functionality.
          Whether it's crafting seamless user experiences or optimizing backend
          workflows, I’m always ready to tackle new challenges and deliver
          impactful results.
        </p>
      </CardContent>
    </Card>
  );
};
