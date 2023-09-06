import { galleryImages } from "@data";
import Image from "next/image";
import GallerySwiper from "./GallerySwiper";
import SectionTitle from "./SectionTitle";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-bg text-white">
      <div className="section-container md:flex md:flex-col tablet:gap-y-16 desktop:gap-y-6 items-center">
        <SectionTitle
          thinText="OUR"
          boldText="GALLERY"
          additionalStyles="mobile:mb-6 desktop:self-start"
        />
        <ul className="flex flex-col gap-y-6 md:hidden">
          {galleryImages.slice(0, 3).map(({ id, label, img }) => (
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
