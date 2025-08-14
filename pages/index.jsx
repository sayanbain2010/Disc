import Link from "next/link";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <div className="py-20 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
          <img width="500" src="/img/bck.png" alt="Retro music background" />
        </div>

        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          Retro
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
          Listen to music non-stop with Retro! Create playlists, control playback, and enjoy music from 20+ supported platforms.
        </p>

        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
          <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_RETRO_CLIENT_ID&permissions=277028620608&scope=applications.commands%20bot">
            <a className="flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-purple-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-purple-700 to-purple-500 hover:opacity-80 transition duration-200 text-white">
              Invite Retro
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold">Music Made Simple</p>
            <p className="text-gray-400 mt-3">Control music on your server with fast, high-quality playback from multiple platforms.</p>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="text-white">
              <p className="text-xl font-semibold mt-5"><i className="fa fa-music text-2xl text-purple-500" /> Multi-Platform</p>
              <p className="text-gray-400 line-clamp-4">Supports YouTube, Spotify, SoundCloud, and 20+ other platforms.</p>
            </div>
            <div className="text-white">
              <p className="text-xl font-semibold mt-5"><i className="fa fa-play-circle text-2xl text-purple-500" /> Playback Control</p>
              <p className="text-gray-400 line-clamp-4">Easily play, pause, skip, shuffle, loop, and manage your music queue.</p>
            </div>
            <div className="text-white">
              <p className="text-xl font-semibold mt-5"><i className="fa fa-list text-2xl text-purple-500" /> Playlists</p>
              <p className="text-gray-400 line-clamp-4">Create and save playlists for your server with simple commands.</p>
            </div>
            <div className="text-white">
              <p className="text-xl font-semibold mt-5"><i className="fa fa-bolt text-2xl text-purple-500" /> Fast & Reliable</p>
              <p className="text-gray-400 line-clamp-4">Experience smooth playback with minimal latency and maximum uptime.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
