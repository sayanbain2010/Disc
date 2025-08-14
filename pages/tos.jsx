import React from "react";

export default function Tos() {
  return (
    <div className="min-h-screen bg-neutral-900 px-5 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="mt-4 text-white font-bold text-3xl">Terms of Service</h2>
        <p className="text-sm text-white/30 mb-6">Last Update: 14/08/2025 🆕️</p>

        <div className="animateHeader text-white text-opacity-40 mt-5 space-y-4">
          <p>
            ⊳ Every Discord server can use <span className="text-purple-400 font-semibold">Retro</span> for free. It is strictly prohibited to sell or monetize the bot.
          </p>

          <p>
            ⊳ You may not use Retro's commands to harm the bot or disrupt its operation.
          </p>

          <p>
            ⊳ You may not misuse open source code of Retro to harm other servers or users.
          </p>

          <p>
            ⊳ Selling or distributing Retro's code for profit on other platforms is forbidden.
          </p>

          <p>
            ⊳ While using the bot, do not use it to harass, troll, or harm other users.
          </p>

          <p>
            ⊳ Some commands may require voting for Retro on{" "}
            <a
              className="text-purple-400 underline"
              href="https://top.gg/bot/YOUR_RETRO_BOT_ID/vote"
              target="_blank"
              rel="noopener noreferrer"
            >
              Top.gg
            </a>{" "}
            at certain intervals.
          </p>
        </div>
      </div>
    </div>
  );
    }
