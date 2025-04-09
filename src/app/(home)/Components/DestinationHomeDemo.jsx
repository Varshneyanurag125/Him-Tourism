import Image from "next/image";

export default function DestinationHomeDemo() {
    return (
        <div className="relative w-full h-[85vh] ">
      {/* Background Image */}
      <Image
        src="/images/destination.webp"
        alt="Mountain landscape with clouds"
        fill
        priority
        className="object-cover"
        quality={100}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 lg:p-16">
        {/* Main Text */}
        <div className="max-w-4xl mt-32 md:mt-40">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Weaving Your Dreams
            <br />
            into Unforgettable
            <br />
            Destinations
          </h1>
          <p className="text-sm md:text-base lg:text-lg max-w-2xl opacity-90 mb-8">
            Discover the captivating allure of Arctic wonders, from stunning landscapes
            to vibrant culture, on an unforgettable journey through the North.
          </p>
      
        </div>
      </div>
    </div>  
    )
}
