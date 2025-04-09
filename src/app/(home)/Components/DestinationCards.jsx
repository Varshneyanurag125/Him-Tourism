"use client"
import Image from 'next/image';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';  

const destinations = [
  {
    id: 1,
    name: 'Shimla',
    description: "Swathed by cedar, rhododendron, fir and Himalayan oak trees, the state capital of Himachal Pradesh is one of the most popular hill stations of India. Basking in the grandeur of the British era with apparent influences in its architecture, Shimla did charm the British colonisers of the 19th century so much that they elevated the small township into the summer capital of an empire sprawling the sub-continent. In its heyday Shimla attracted princes, merchants, diplomats and political leaders from Afghanistan, Tibet, China, Myanmar and other countries. Several heritage buildings in the city are witness to historical moments that have shaped the history of south Asia.Leaders of the freedom movement led by Mahatma Gandhi, Pandit Nehru, Sardar Patel, Maulana Azad, C. Rajagopalachari and others frequently visited Shimla in their struggle to gain independence from British rule. Hard contested deliberations over the partition of India and Pakistan at Viceregal Lodge, now the Indian Institute of Advanced Studies, between the resident Viceroy and leaders of the freedom struggle finally won the country its Independence on 15th August, 1947.An engineering marvel, the Kalka-Shimla railway line with 102 tunnels constructed between 1898 to 1903 has been recognised by UNESCO as World Heritage mountain railway site. The Ridge and The Mall are still popular landmarks just as they were in the pre-Independence era. The imperial Viceregal Lodge, the graceful Christ Church, Gaiety Theatre, Gorton Castle, Barnes Court and several buildings are part of the colonial architectural heritage of the town.",
    image: '/destinationimages/shimla2.jpg',
    images: ['/destinationimages/shimla1.jpg', '/destinationimages/shimla3.jpg',"/destinationimages/shimla4.jpg","/destinationimages/shimla5.jpg"]
  },
  {
    id: 2,
    name: 'Manali',
    description: 'A gift of the Himalayas to the world, Manali is a beautiful township nestled in the picturesque Beas River valley. It is a rustic enclave known for its cool climate and snow-capped mountains, offering respite to tourists escaping scorching heat of the Plains. The tourism industry in Manali started booming only in the early 20th century, mainly because of its natural bounties and salubrious climate. Once a sleepy village, the modern town cocooned in its rich cultural heritage and age-old traditions is now one of the most popular destinations of India. The place is a classic blend of peace and tranquility which makes it a haven for nature lovers and adventure enthusiasts, who want to get off the main tourist trails and experience nature up close. Once a sleepy village, the modern town cocooned in its rich cultural heritage and age-old traditions is now one of the most popular destinations of India. The place is a classic blend of peace and tranquility which makes it a haven for nature lovers and adventure enthusiasts, who want to get off the main tourist trails and experience nature up close. The glacial water of River Beas after rushing down the slopes of Rohtang Pass allows adventure sport activities of rowing, white water rafting and river crossing as it meanders through the valley from Manali to Kullu. The open valley with terraced fields dotted with hotels and resorts has tourists converge on this township in summer from April to July and in autumn to early winter from October to December. If you have ever imagined of sitting by the gushing water of a snow-fed stream, or waking up to a glorious sunrise with breathtaking views to soak in, Manali is the place to be.',
    image: '/destinationimages/manali1.jpg',
    images: ['/destinationimages/manali2.jpg', '/destinationimages/manali3.jpg',"/destinationimages/manali4.jpg"]
  },
  {
    id: 3,
    name: 'Dharmshala',
    description: 'Lying in the shadow of mighty Dhauladhar range is the quaint town of Dharamshala. Divided in two halves - Kotwali Bazar and the skirting markets make up Lower Dharamshala, which makes a dramatic transition in the upper reaches that has thick pine, cedar and Himalayan oak forests around the township of Mcleodganj. It is an 18 km gradual uphill drive from Kangra that gets you to Dharamshala. Mcleodganj serves as the capital of the Tibetan Government in exile. With rising altitude, the summer temperature between Lower and Upper Dharamshala changes from warm to cool climes. It was in the wake of the Tibetan uprising of 1959 that His Holiness the 14th Dalai Lama escaped from Lhasa. Choosing Mcleodganyj for an abode in exile saw an influx of Tibetan population that followed him into exile. Often referred to as ‘Little Lhasa’ the vivid character of the city today attracts many famous people, including country heads, filmmakers and diplomats to Mcleodganj, Dharamshala from all over the world. Colonial influence, however, has its imprint intact in the town which can be spotted in many buildings, a church and other landmarks of the era scattered around the town and its suburbs.',
    image: '/destinationimages/dharmshala1.jpg',
    images: ['/destinationimages/dharmshala2.jpg', '/destinationimages/dharmshala3.webp']
  },
  {
    id: 4,
    name: 'Chamba',
    description: '‘Shimla Nahin Basna, Kasauli Nahin Basna, Chamba Jana Zaroor’ - Settle not in Shimla, not in Kasauli, visit Chamba for sure - are the opening lyrics of a popular Himachali folk song sung by folk singers. Such is the charm of Chamba. Dotted with historical and architecturally significant landmarks, the town in its temples and palaces preserves much of its rich medieval past. For a traveller there is much to explore in and around Chamba. Chamba, perhaps the loveliest valley of Himachal, is a treasure trove of scenic attractions, sparkling streams, primeval lakes, meadows, dense alpine tree covers, rich wildlife and fertile valleys. At the crossroads of Dhauladhar and Zanskar ranges, the region borders Jammu & Kashmir and is the northernmost district of the state. Fast flowing streams drain into River Ravi on the southern side and into River Chenab on the northern fringes. The land is populated with a lively people who are endowed with a vibrant culture that stretches back thousands of years. Charm of the natives heartwarming hospitality is such that it has you longing for more. A splendid artistic heritage includes fine temple architecture, beautiful miniature paintings and the exquisite embroidered Chamba Rumal. Nestling on the right bank of River Ravi, on terraced flats at a scenic place where the smaller Sal River meets the large one, the sprawling township of Chamba was founded by Raja Sahil Varman in 920 AD. It was at the insistence of his daughter Champavati that the king shifted his capital from Bharmaur to Chamba. After Chamba merged with the Indian union in 1947, the town now is a district headquarter.',
    image: '/destinationimages/chamba1.webp',
    images: ['/destinationimages/chamba2.webp']
  },
  {
    id: 5,
    name: 'Solan',
    description: 'For its moderate climate Solan is an ideal tourist destination with picturesque vistas of the Himalayan foothills and a town replete with colonial heritage that is bustling with activities. Located between Chandigarh and Shimla, on the Chandigarh- Kalka-Shimla highway, the town draws its name from goddess Shoolini Devi, the presiding deity in whose honour a three day fair is held in June. Before the British colonists turned it into a cantonment in the early part of the 19th century, Solan had served as a capital for Baghat, a princely state. It was after driving out occupying Gurkha forces in 1815, who had expanded their dominion from Nepal upto the bank of River Sutlej that British cantonments came to be established at Dagshai, Kasauli, Jutogh and Solan. Remnants of the old forts are scattered around Solan. The growing town today serves as a district headquarter and provides easy access to the nearby getaway places of Kasauli, Dagshai, Nalagarh, Arki, Chail, Rajgarh and Kandaghat. Famous as a tomato and mushroom growing region, Solan is often referred to as ‘City of Red God’ and sometimes as the ‘Mushroom City of India’.',
    image: '/destinationimages/solan1.jpg',
    images: ['/destinationimages/solan2.jpg', '/destinationimages/solan3.webp',"/destinationimages/solan4.webp"]
  },
  {
    id: 6,
    name: 'Kullu',
    description: 'Revered for its many village deities as the ‘Land of Gods’ (Devtas), Kullu - spread out on the banks of River Beas is a quiet town that attracts travellers, connoisseurs, photographers, filmmakers and honeymooners round the year. As a gateway to the popular destination of Manali, it is a cool escapade for tired souls. Founded as a capital of Kullu in the year 1660, today the sprawling township serves as the administrative headquarter of the valley district. The intricate web of valleys, deep forests, gushing streams and rivers, bountiful orchards and the forbidden heights of the Greater Himalayas for a magnificent backdrop, is a sight to behold. Myths and legends enrich the deeply religious beliefs of a simple people that can be seen during a variety of festivals celebrated in the valley. In October, the quiet town comes to life when the week-long Kullu Dussehra festival is held. A congregation of Devtas - village deities carried on palanquins, grace the occasion to celebrate the victory of good over evil.',
    image: '/destinationimages/kullu1.jpg',
    images: ['/destinationimages/kullu2.jpg', '/destinationimages/kullu3.jpg',"/destinationimages/kullu4.jpg"]
  },
  {
    id: 7,
    name: 'Lahaul & Spiti',
    description: 'A land of wide contrasts on the Manali-Leh route, Lahaul is a bouquet of scenic mountain villages and fascinating Buddhist art and culture. As the better half of Spiti that lies across the high Kunzum Pass, Lahaul is marked by high mountains, massive glaciers, rivers and high passes. The word ‘Lahaul’ is derived from the Tibetan word Lho-yul meaning ‘country in the south’. Another meaning of Lhahi-yul stands for ‘country of the gods.” The land is a quaint settlement guarded by snow-topped mountains that stop the advance of monsoon rains from the south but the northerly winds pound the region with heavy snow in winters. The landscape changes from verdant valleys and forested hillsides to a sandy terrain dotted with miniature villages of flat-roofed houses precariously hanging along rocky hillsides as you move deeper into the highland, leaving the traveller in awe of the raw beauty scattered around. Keylong is the administrative headquarters of Lahaul. The lands simple rustic charm, rich culture, full of folk dances and songs regularly attracts tourists from all over the world. It is a thriving centre of Buddhism and home to several monasteries which are repositories of ancient murals, thangkas, wood carvings and massive statues of Guru Padmasambhava, the missionary who introduced Buddhism to Lahaul, Spiti and Tibet. Greener than Spiti, Lahaul is nourished by the two mountain rivers of Chandra and Bhaga and their tributaries that originate on either side of the Baralacha La Pass. It is at their confluence at Tandi in Pattan Valley that the rivers become River Chenab, traditionally still called Chandrabhaga.',
    image: '/destinationimages/spiti2.jpg',
    images: ['/destinationimages/spiti1.jpg', '/destinationimages/spiti3.jpg',"/destinationimages/spiti4.jpg","/destinationimages/spiti5.jpg","/destinationimages/spiti6.jpg"]
  },
  {
    id: 8,
    name: 'Kangra',
    description: 'Kangra takes pride in being home to the Katoch dynasty as one of the oldest surviving royal dynasties in the world. Spread out over the western region of the state, Kangra is by far the largest region of Himachal Pradesh. In the shadow of the majestic Dhauladhar ranges, the valley is also one of the most diverse and picturesque one. The people are gentle, hardworking and very hospitable. Recorded history of Kangra dates back to more than 3,500 years. The prosperous land was subject to many invasions, but the strategically located strong fort of Kangra held out, foiling plans of most invaders. The fort in 1615 AD did even withstand a siege laid by Mughal armies of emperor Akbar. The fort’s defences in thousands of years of its history was but rarely broken into. The natural beauty of the land gave refuge to arts and artists who fled many royal courts after the Mughal empire declined in the 17th century. A synthesis of local art forms gave rise to the famous Kangra school of painting. Masterpiece miniatures of this unique art style are on display in many reputed galleries around the world.',
    image: '/destinationimages/kangra1.webp',
    images: ['/destinationimages/kangra2.webp', '/destinationimages/kangra3.webp']
  }
];

export default function DestinationCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [mainImageSrc, setMainImageSrc] = useState(null);
  const [previousMainSrc, setPreviousMainSrc] = useState(null);

  const formatDescription = (text) => {
    const words = text.split(' ');
    const chunks = [];
    let currentChunk = [];
    
    words.forEach((word) => {
      currentChunk.push(word);
      if (currentChunk.length >= 50) {
        chunks.push(currentChunk.join(' '));
        currentChunk = [];
      }
    });
    
    if (currentChunk.length > 0) {
      chunks.push(currentChunk.join(' '));
    }
    
    return chunks.map((chunk, index) => (
      <span key={index}>
        {chunk}
        {index < chunks.length - 1 && <br />}
      </span>
    ));
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPreviousMainSrc(null);
    setMainImageSrc(null);
    setSelectedThumbnail(null);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPreviousMainSrc(null);
    setMainImageSrc(null);
    setSelectedThumbnail(null);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const handleThumbnailClick = (thumbnailSrc, idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const currentMain = mainImageSrc || currentDestination.image;
    setPreviousMainSrc(currentMain);
    
    // Start transition
    setSelectedThumbnail(idx);
    
    setTimeout(() => {
      setMainImageSrc(thumbnailSrc);
      const thumbnails = [...currentDestination.images];
      thumbnails[idx] = currentMain;
      currentDestination.images = thumbnails;
      
      setTimeout(() => {
        setSelectedThumbnail(null);
        setIsAnimating(false);
        setPreviousMainSrc(null);
      }, 300);
    }, 300);
  };

  const currentDestination = destinations[currentIndex];
  const displayImage = mainImageSrc || currentDestination.image;

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto relative bg-neutral-50 border-1 border-neutral-400 p-10 rounded-3xl ">
        {/* Navigation Arrows */}
        <div className="absolute left-8/9 right-[1%] top-[8%] -translate-y-1/2 flex justify-between pointer-events-none z-20 px-4">
          <button 
            onClick={prevSlide}
            disabled={isAnimating}
            className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-600 transition-colors disabled:opacity-50 pointer-events-auto"
            aria-label="Previous destination"
          >
            <FaArrowLeft className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={nextSlide}
            disabled={isAnimating}
            className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-600 transition-colors disabled:opacity-50 pointer-events-auto"
            aria-label="Next destination"
          >
            <FaArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden">
          {/* Left side - Images Section */}
          <div className="flex flex-col gap-6">
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {previousMainSrc && (
                <Image
                  src={previousMainSrc}
                  alt="Previous view"
                  fill
                  className="object-cover absolute transition-all duration-500 opacity-0 scale-110"
                />
              )}
              <Image
                src={displayImage}
                alt={currentDestination.name}
                fill
                className={`object-cover transition-all duration-500 ${
                  isAnimating ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                }`}
                priority
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-4">
              {currentDestination.images.map((img, idx) => (
                <div 
                  key={idx}
                  className={`relative w-24 h-24 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 ${
                    selectedThumbnail === idx 
                      ? 'scale-110 opacity-100 shadow-lg z-10' 
                      : 'scale-100 hover:scale-105'
                  }`}
                  onClick={() => handleThumbnailClick(img, idx)}
                >
                  <Image
                    src={img}
                    alt={`${currentDestination.name} view ${idx + 1}`}
                    fill
                    className={`object-cover transition-all duration-500 ${
                      selectedThumbnail === idx ? 'scale-110' : 'scale-100'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col">
            <div>
              <h2 className="text-5xl font-bold text-neutral-700 mb-4">
                {currentDestination.name}
              </h2>
              <p className="text-neutral-900 leading-relaxed mb-6 text-justify text-lg">
                {formatDescription(currentDestination.description)}
              </p>
            </div>
          </div>
        </div>

        {/* Modern Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {destinations.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setPreviousMainSrc(null);
                setMainImageSrc(null);
                setSelectedThumbnail(null);
                
                setTimeout(() => {
                  setCurrentIndex(idx);
                  setTimeout(() => setIsAnimating(false), 50);
                }, 300);
              }}
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                currentIndex === idx 
                  ? 'bg-green-800 text-white' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              disabled={isAnimating}
            >
              {idx + 1}
            </button>
          ))}
          {destinations.length > 5 && (
            <>
              <span className="text-gray-500">...</span>
              <button
                className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium bg-gray-800 text-white hover:bg-gray-700"
              >
                {destinations.length}
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
} 