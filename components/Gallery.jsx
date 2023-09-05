import { galleryImages } from "@data";
import Image from "next/image";
import GallerySwiper from "./GallerySwiper";

const Gallery = () => {
  return (
    <section className="gallery-bg text-white">
      <div className="section-container md:flex md:flex-col tablet:gap-y-16 desktop:gap-y-6 items-center">
        <h2 className="mobile:mb-6 desktop:self-start text-l/[1.4] tablet:text-xl desktop:text-xxl font-thin uppercase tracking-[-1.6px] tablet:tracking-[-2.68px] desktop:tracking-[-3.92px]">
          OUR
          <span className="font-medium"> GALLERY</span>
        </h2>
        <ul className="flex flex-col gap-y-6 md:hidden">
          {galleryImages.map(({ id, label, img }) => (
            <li key={id}>
              <Image src={img} alt={label} quality={95} placeholder="blur" />
            </li>
          ))}
        </ul>
        <GallerySwiper />
      </div>
    </section>
  );
};

export default Gallery;
