import "./App.css";
import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import Sticker from "./components/Sticker";
import ConfettiButton from "./components/ConfettiButton";
import StickyNote, { stickyNoteColors } from "./components/StickyNote";
import LargeStickyNote from "./components/LargeStickyNote";

function App() {
  const projectsList = [
    {
      name: "NEAT Flappy Bird",
      image: "./flappybird.jpg",
      color: stickyNoteColors.green,
      rotation: -1,
    },
    {
      name: "2048 Solver",
      image: "./2048.png",
      color: stickyNoteColors.yellow,
      rotation: -2,
    },
    {
      name: "PlanTalk",
      image: "./Earth.png",
      color: stickyNoteColors.green,
      rotation: 3,
    },
    {
      name: "OurToDos",
      image: "./otdThumb.png",
      color: stickyNoteColors.blue,
      rotation: -4,
    },

    {
      name: "Space Game",
      image: "./gameThumb.png",
      color: stickyNoteColors.orange,
      rotation: 2,
    },
  ];
  return (
    <div className="App">
      <defs>
        <path id="textPath" d="M10 50 C10 0 90 0 90 50" />
      </defs>
      <NavBar />
      <div
        id="home"
        className="min-h-screen flex flex-col gap-8 max-w-[1100px] mx-auto pt-8"
      >
        <div className="flex flex-col items-center justify-center p-4 gap-4">
          <h1 className="stroke-black-title text-7xl w-full text-white title-text">
            Eren Erisgen
          </h1>
          <h2 className="stroke-black-title text-4xl w-full text-white title-text">
            Software Engineer && Computer Scientist
          </h2>
        </div>

        <LargeStickyNote color="yellow" className="mx-auto max-w-[200px] md:max-w-full">
          <div className="flex gap-8 items-center flex-col md:flex-row">
            <div className="basis-1/3">
              <img
                src="./profilepicture.jpeg"
                alt="Profile"
                className="shadow-md stroke-2 stroke-black rounded-xl object-cover"
              />
            </div>
            <div className="basis-2/3 flex flex-col gap-4">
              <h3 className="text-4xl text-left font-bold title-text">
                Welcome!
              </h3>
              <p className="text-xl text-black text-left leading-6">
                Howdy! I'm Eren Erisgen—a Software Engineer and Computer
                Scientist living in the beautiful state of Minnesota. I proudly
                graduated from the{" "}
                <ConfettiButton
                  confettiImage="./goldy.png"
                  className="font-bold underline text-[#7a0019] hover:underline cursor-pointer bg-transparent border-none"
                >
                  University of Minnesota
                </ConfettiButton>{" "}
                with a B.S. in Computer Science and currently work as an
                Associate Software Engineer at{" "}
                <a href="https://thebernardgroup.com/">The Bernard Group</a>.
                During my time at university, I explored everything from
                graduate-level algorithms to software engineering and
                event-driven architecture. I love working with Java, C, and
                JavaScript. On this site, you'll find some of my favorite
                projects and links to the source code—they showcase what I've
                learned both in school and in industry.
              </p>
            </div>
          </div>
        </LargeStickyNote>

        <h2 className="stroke-black-title text-4xl w-full text-white title-text">
          Featured Projects
        </h2>

        <div className="flex flex-wrap justify-center">
          {projectsList.map(({ name, image, color, rotation }) => (
            <div key={name} className="basis-1/3 p-4">
              <StickyNote
                color={color}
                className="mx-auto w-64"
                rotate={rotation}
              >
                <div>
                  <div
                    id="main body"
                    className="max-w-[1100px] mx-auto flex items-center justify-center p-4 gap-2"
                  >
                    <div className="w-32">
                      <img
                        src={image}
                        className="relative drop-shadow-md rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="title-text text-2xl">{name}</p>
                  </div>
                </div>
              </StickyNote>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
