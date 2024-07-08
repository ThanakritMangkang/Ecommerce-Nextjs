import React from "react";

type Props = {};

const main = (props: Props) => {
  return (
    <div>
      <div id="about" className="relative bg-white overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  About Shop
                </h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate atque sequi reprehenderit beatae quo facilis
                  quaerat distinctio maxime, ad consequuntur molestiae sit
                  laboriosam nam, magnam fugiat, dolorum fuga! Quis dicta ullam
                  iste culpa porro architecto asperiores odio expedita omnis,
                  corporis reprehenderit magni? Ipsam obcaecati doloremque quod!
                  Possimus fugit fugiat similique?
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2024/01/20/01/54/ai-generated-8520240_1280.jpg"
            alt="men cloth"
          />
        </div>
      </div>
    </div>
  );
};

export default main;
