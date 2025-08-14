export default function Partners() {
  return (
    <>
      <div className="w-full my-10">
        <div className="flex w-full justify-center">
          <img width="400" src="/img/bck4.png" alt="Retro Partners Background" />
        </div>
        <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
          <i className="fal fa-stars text-purple-400 mr-2" />
          Partners
        </h1>
      </div>

      <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="flex flex-col justify-center text-white rounded">
          <a href="https://codeshare.me" target="_blank" rel="noopener noreferrer">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full hover:shadow-lg hover:shadow-purple-600/20 transition duration-200">
              <img 
                className="rounded-full h-32 w-32" 
                src="https://images-ext-1.discordapp.net/external/YYXCkfsbbSARvGEzBx8W_3gt7ITp4f8YB_2y14SpoiA/%3Fsize%3D4096/https/cdn.discordapp.com/icons/676124992919830548/256b9dd9a6109b1c85ca64677f84f80a.png?format=webp&quality=lossless&width=160&height=160" 
                alt="Code Share Logo" 
              />
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">Code Share</h1>
                <div className="flex items-center mt-1">
                  <p className="font-normal text-sm text-gray-300">
                    Code Share is an ideal platform for developers to share their projects, interact with others, sell their work, and explore a variety of projects across different categories and programming languages.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* You can add more partners here following the same structure */}

      </div>

      <div className="py-10"></div>
    </>
  );
};
