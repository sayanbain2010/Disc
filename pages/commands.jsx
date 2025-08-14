import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

export default function Commands() {
  const commandCategories = {
    Music: [
      "autoplay",
      "clear",
      "grab",
      "join",
      "leave",
      "loop",
      "nowplaying",
      "pause",
      "play",
      "previous",
      "queue",
      "radio",
      "rejoin",
      "remove",
      "resume",
      "search",
      "seek",
      "shuffle",
      "similar",
      "skip",
      "stop",
      "volume"
    ],
    Config: ["247", "buy", "config", "ignore", "prefix", "premium", "preset", "profile", "redeem"],
    Filter: ["enhance", "equalizer", "filter", "optimize"],
    Information: ["balance", "help", "invite", "ping", "report", "stats", "support", "vote"]
  };

  return (
    <>
      <div>
        <div className="flex w-full justify-center">
          <img width="500" src="/img/bck2.png" alt="Retro background" />
        </div>

        <p className="text-xl font-medium text-white">
          <i className="fal fa-cogs text-purple-400 mr-2" />
          Bot Commands
        </p>
        <p className="text-white text-sm text-opacity-50 mb-5">
          You can get information about the commands of the Retro Bot.
        </p>

        <div>
          <Menu as="div" className="w-full relative inline-block text-left">
            <div>
              <Menu.Button className="left-0 transition w-full duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-purple-400 rounded-xl border border-white/10 focus:border-purple-400 focus:outline-none py-4 px-6 flex justify-between items-center">
                <div className="flex items-center gap-x-1 text-white text-opacity-60">
                  <i className="fa fa-hashtag text-white text-opacity-20" />
                  View Commands List
                </div>
              </Menu.Button>
            </div>

            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="z-1 custom-scroll absolute left-0 w-full mt-2 origin-top-right bg-black overflow-auto max-h-80 border border-black border-opacity-20 bg-opacity-95 rounded-lg p-2">
                <div className="px-2 py-2 w-full">
                  {Object.entries(commandCategories).map(([category, commands], idx) => (
                    <div key={idx} className="mb-2">
                      <p className="text-purple-400 font-semibold px-2 mb-1">{category}</p>
                      {commands.map((cmd, i) => (
                        <Menu.Item key={i}>
                          <button className="w-full rounded-lg p-2 cursor-pointer text-white flex items-center space-x-3 transition-all duration-200 hover:bg-purple-700/20">
                            <i className="fa-spin text-xl text-white text-opacity-20" />
                            {cmd}
                          </button>
                        </Menu.Item>
                      ))}
                    </div>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* Buttons Section */}
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
          <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_RETRO_CLIENT_ID&permissions=277028620608&scope=applications.commands%20bot">
            <a className="flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-purple-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-purple-700 to-purple-500 hover:opacity-80 transition duration-200 text-white">
              Invite Retro
            </a>
          </Link>

          <div className="py-10"></div>

          <Link href="https://discord.gg/YOUR_RETRO_SUPPORT_LINK">
            <a className="px-6 justify-center gap-x-2 shadow-lg shadow-purple-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-purple-700 to-purple-500 hover:opacity-80 transition duration-200 text-white">
              Support Server
            </a>
          </Link>

          <div className="py-10"></div>

          <Link href="https://top.gg/bot/YOUR_RETRO_BOT_ID/vote">
            <a className="px-6 justify-center gap-x-2 shadow-lg shadow-purple-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-purple-700 to-purple-500 hover:opacity-80 transition duration-200 text-white">
              Vote Retro
            </a>
          </Link>
        </div>
      </div>

      <div className="py-20"></div>
    </>
  );
    }
