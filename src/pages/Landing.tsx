import { Globe } from "@/components/ui/globe";
import Meteors from "@/components/ui/meteors";
import SparklesText from "@/components/ui/sparkles-text";
import BlurredInComponent from "@/components/BlurIn";
import Navbar from "@/components/Navbar";
import { AnimatedBeamDemo } from "@/components/About";
import WordPullUp from "@/components/ui/word-pull-up";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import NumberTicker from "@/components/ui/number-ticker";
import Particles from "@/components/ui/particles";
import { Footer } from "@/components/Footer";
import logo from "@/assets/LOGOFINAL.png";
import BenefitsCard from "@/components/BenefitsCard";

export function Landing() {
  return (
    <div>
      <div className="absolute -z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <Meteors number={30} />
      </div>
      <div className="absolute -z-30 w-full h-[910px]">
        <AnimatedGridPattern
          repeatDelay={2}
          width={100}
          height={100}
          numSquares={5}
          className=""
        />
      </div>
      <div className="z-50 m-0 flex items-center justify-between h-24 bg-black bg-opacity-60 mb-10">
        <div className="logo bg-black">
          <img className="rounded-2xl" src={logo} height={400} width={500} />
        </div>
        <Navbar />
      </div>
      <div>
        <div className="flex w-full items-center justify-center pb-20">
          <div className="-z-20 w-full top-0  min-h-64 items-center justify-center ">
            <div className="text-center text-white font-extrabold text-5xl font-aleo">
              Welcome To
            </div>
            <WordPullUp
              words="NUV ACM"
              className="text-center text-red-600 font-mega-bold text-9xl p-2 font-aleo"
            />
            <SparklesText
              className="z-50 font-bold w-full absolute top-48 text-center text-transparent text-8xl p-2 font-aleo"
              text="NUV x ACM"
            />
            <div className="ml-[300px] text-center text-white font-extrabold text-4xl pb-0 font-aleo w-3/4">
              <VelocityScroll
                text="Student Chapter"
                default_velocity={1}
                className="text-white"
              />
            </div>
            <div className="z-50 items-center w-full max max-h-[500px] overflow-hidden">
              <Globe />
            </div>
          </div>
        </div>
        <div className="flex flex-col	items-center justify-center">
          <div className="w-full absolute text-white">
            <Particles color="#b91c1c" />
          </div>
          <div className="">
            <div className="text-3xl text-center font-bold mb-4 text-white">
              BENIFITS OFFERED BY NUV ACM
            </div>
            <div className="flex justify-center gap-12  mb-5 flex-wrap">
              <BenefitsCard
                title="Career Advancement"
                desc="Subscribe to the ACM Digital Library for full-text articles, bibliographic data, research papers, and tutorials on cutting-edge technologies."
                img="/assets/LandingPageAssets/CareerAdvancement.svg"
              />
              <BenefitsCard
                title="Leadership"
                desc="Opportunities for students to take up leadership roles within
                  the chapter and showcase their contributions to a global
                  audience."
                img="/assets/LandingPageAssets/Leadership.svg"
              />

              <BenefitsCard
                title="Networking Opportunities"
                desc="A chance to connect with ACM’s global community of
                  professionals, academicians, and students through conferences,
                  webinars, and mentorship programs."
                img="/assets/LandingPageAssets/Networking.svg"
              />
              <BenefitsCard
                title="Research Opportunities"
                desc="ACM offers research opportunities, connecting students to
                  advancements in computing through publications, conferences,
                  and special interest groups."
                img="/assets/LandingPageAssets/ProffesionalDevelopment.svg"
              />
              <BenefitsCard
                title="Skill Advancement"
                desc="Hands-on learning experiences through workshops, hackathons,
                  coding competitions, and seminars that cover various domains
                  of computing and technology."
                img="/assets/LandingPageAssets/Skills.svg"
              />
            </div>
          </div>
          <div>
            <BlurredInComponent word="What Is ACM?" />
          </div>
          <div className="w-full flex items-center justify-center mt-8">
            <div className="text-gray-200 flex items-center max-w-3xl text-justify">
              <div className="size-full max-w-full items-center justify-center overflow-hidden pt-8">
                <p className="text-2xl">
                  The <strong>Association for Computing Machinery (ACM)</strong>{" "}
                  is a global organization dedicated to advancing computing as a
                  science and profession. With over 100,000 members worldwide,
                  ACM brings together educators, researchers, and professionals
                  to address the challenges and opportunities in computing. The
                  Navrachana University ACM Chapter joins this vast network,
                  creating a platform for students and faculty to connect,
                  learn, and contribute to the ever-evolving field of
                  technology.
                </p>
              </div>
            </div>
            <div className="text-white flex flex-col gap-5 w-[500px] items-center justify-center mx-0 px-0">
              <div className="flex gap-5">
                <NumberTicker
                  value={190}
                  className="whitespace-pre-wrap text-8xl font-extrabold tracking-tighter text-gray-200"
                />
                <p className="text-8xl font-extrabold text-gray-200">+</p>
              </div>
              <div className="text-3xl font-extrabold tracking-tighter text-gray-200">
                COUNTRIES
              </div>
            </div>
          </div>
          <div className="h-28"></div>

          <div className="w-full flex items-center justify-center">
            <BlurredInComponent word="Our Vision & Mission" />
          </div>
          <div className="w-full flex items-center justify-center mt-8">
            <div className="text-white flex w-[500px] items-center justify-center mx-0 px-0">
              <AnimatedBeamDemo />
            </div>
            <div className="text-white flex items-center max-w-3xl">
              <p className="pl-9 text-xl text-justify text-gray-300">
                The ACM Student Chapter envisions fostering an inclusive,
                innovative, and collaborative environment where students can
                excel in the field of computing and technology. Our chapter
                serves as a bridge between academic learning and professional
                excellence, empowering students to explore emerging trends,
                contribute to impactful projects, and develop problem-solving
                skills essential for the challenges of tomorrow. Through
                workshops, hackathons, guest lectures, and collaborative
                research opportunities, we aim to inspire curiosity and nurture
                talent. By cultivating a vibrant community, we strive to promote
                diversity, encourage interdisciplinary collaboration, and ignite
                a passion for lifelong learning in the ever-evolving landscape
                of computing. Together, we are building a foundation where the
                students of today become the thought leaders, innovators, and
                change-makers of the future.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
