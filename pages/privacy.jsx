export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      <h1 className="font-semibold text-3xl text-white/75">Privacy Policy for Retro</h1>
      <p className="text-sm text-white/30 mb-4">Last Update: 14/08/2025 🆕️</p>

      <div className="animateHeader text-white text-opacity-40 mt-5 space-y-3">
        <p>
          ⊳ To use the Retro bot, you must grant the necessary permissions when adding it to your Discord server: 
          <span className="text-white"> READ MESSAGES, SEND MESSAGES, EMBED LINKS, ATTACH FILES, READ MESSAGE HISTORY, CONNECT, SPEAK, USE VOICE ACTIVITY, PRIORITY SPEAKER</span>
        </p>

        <p>
          ⊳ Some commands may require voting for Retro on <a className="text-purple-400" href="https://top.gg/bot/YOUR_RETRO_BOT_ID/vote" target="_blank" rel="noopener noreferrer">Top.gg</a>.
        </p>

        <p>
          ⊳ Users can use Retro freely as long as their intent is not harmful.
        </p>

        <p>
          ⊳ Certain commands cannot be used simultaneously to prevent conflicts in playback.
        </p>

        <p>
          ⊳ Retro does not permanently save any user data.
        </p>

        <p>
          ⊳ For temporary functionality, your user ID may be saved for a short period (e.g., 60 seconds) and deleted automatically.
        </p>
      </div>
    </div>
  );
}
