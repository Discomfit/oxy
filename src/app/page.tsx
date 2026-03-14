import Image from "next/image";
import { DiscordAlt, Github, BuyMeACoffee } from "@boxicons/react";
// import Animatedicon from "@/components/AnimatedIcon";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center py-10 px-16 sm:items-start">
        <nav className="flex justify-between w-full items-center">
          <div className="flex gap-4">
            <Image src="/pfp.png" alt="Oxy's Profile Picture" width={ 74 } height={ 74 } priority className="rounded-full" />
            <div className="flex flex-col justify-center gap-0.5">
              <div className="text-gradient flex gap-2">
                <h2>Oxy.</h2>
                <div className="bg-[#3A3438] w-px rounded-full"></div>
                <h2>They/It</h2>
              </div>

              <h2 className="text-gradient">Software Engineer</h2>
            </div>
          </div>

          <div className="bg-[#181617] flex w-fit h-fit justify-center items-center p-3 px-4.5 gap-4 rounded-full">
            <a className="w-7.5 h-7.5 cursor-pointer" href="https://buymeacoffee.com/discomfit">
              {/* <Animatedicon fillColor="#FFDD00">
                <BuyMeACoffee />
              </Animatedicon> */}
              <BuyMeACoffee className="transition-colors hover:fill-[#FFDD00]" width={ 30 } height={ 30 } />
            </a>
            <a className="w-7.5 h-7.5 cursor-pointer" href="https://www.github.com/Discomfit">
              {/* <Animatedicon fillColor="#89929B">
                <Github />
              </Animatedicon> */}
              <Github className="transition-colors hover:fill-[#89929B]" width={ 30 } height={ 30 } />
            </a>
            <a className="w-7.5 h-7.5 cursor-pointer" href="https://discord.com/users/986071537880817664">  
              {/* <Animatedicon fillColor="#5865F2">
                <DiscordAlt />
              </Animatedicon> */}
              <DiscordAlt className="transition-colors hover:fill-[#5865F2]" width={ 30 } height={ 30 } />
            </a>
          </div>
        </nav>

        <Section>
          <h1>About Me</h1>
          <p>Experienced with Next.js, React, and Node.js on the frontend, with a focus on performance and clean architecture.</p>
          <p>Systems-level work in Rust and C++, including custom rendering engines and embedded Linux I have used many distros such as Ubuntu, Debian, and Gentoo.</p>
          <p>I build developer tools, authentication systems, and high-performance backends, with a preference for create free and open-source sofware.</p>
        </Section>

        <Section>
          <h1>Languages</h1>
          <ul className="list-disc pl-4 gap-1 flex flex-col font-bold">
            <li>Rust</li>
            <li>TypeScript / JavaScript</li>
            <li>Go</li>
            <li>C++</li>
          </ul>
        </Section>

        <Section>
          <h1>Web Frameworks</h1>
          <ul className="list-disc pl-4 gap-1 flex flex-col font-bold">
            <li>Next.js / React</li>
            <li>Astro JS</li>
          </ul>
        </Section>

        <Section>
          <h1>Database Tools</h1>
          <ul className="list-disc pl-4 gap-1 flex flex-col font-bold">
            <li>MariaDB / PostgreSql</li>
          </ul>
        </Section>

        <Section className="gap-0!">
          <p className="text-gradient">Want to hire me? I'm looking for work!</p>
          <p className="text-gradient">Discord: @oxidation6_</p>
          <p className="text-[#786170] absolute right-0 bottom-0">curl 1481709001308635156.discordsays.com</p>
        </Section>
      </main>
    </div>
  );
}
