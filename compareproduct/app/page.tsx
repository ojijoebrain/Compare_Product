
import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24 ">
        <div className="flex max-xl:flex-col gap-16 items-center md:items-start">
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="small-text flex items-center gap-2">
              Wise product buying begins
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="Arrow pointing right"
                width={16}
                height={16}
                className="inline-block"
                aria-hidden="true"
              />
            </p>
            <h1 className="head-text">
              Liberate the strength of 
              <span className="text-primary"> compare products</span>
            </h1>
            <p className="mt-6">
              Robust, self-serve product and growth analytics designed to boost your conversions, engagement, and customer retention.
            </p>
            {/* Searchbar component placeholder */}
            <Searchbar />
            <div className="mt-6">Searchbar</div>
          </div>

          {/* HeroCarousel component placeholder */}
          <HeroCarousel />
        </div>
      </section>
      
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {['Apple Iphone 15','Book', 'sneakers'].map
          ((product) => ( <div>{product}</div>
          ))}

        </div>
      </section>
    </>
  );
};

export default Home;