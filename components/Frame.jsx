import Image from "next/image";
import frameLeftMob from "../public/assets/icons/frame_left_mobile.svg";
import frameRightMob from "../public/assets/icons/frame_right_mobile.svg";
import frameLeftTab from "../public/assets/icons/frame_left_tablet.svg";
import frameRightTab from "../public/assets/icons/frame_right_tablet.svg";
import frameLeftDesk from "../public/assets/icons/frame_left_desk.svg";
import frameRightDesk from "../public/assets/icons/frame_right_desk.svg";

const Frame = () => {
  return (
    <>
      <Image
        src={frameLeftMob}
        alt="Left frame"
        className="mobile:block hidden absolute top-0 left-0"
      />
      <Image
        src={frameRightMob}
        alt="Right frame"
        className="mobile:block hidden absolute top-0 right-0"
      />
      <Image
        src={frameLeftTab}
        alt="Left frame"
        className="tablet:block hidden absolute top-0 left-0"
      />
      <Image
        src={frameRightTab}
        alt="Right frame"
        className="tablet:block hidden absolute top-0 right-0"
      />
      <Image
        src={frameLeftDesk}
        alt="Left frame"
        className="desktop:block hidden absolute top-0 left-0"
      />
      <Image
        src={frameRightDesk}
        alt="Right frame"
        className="desktop:block hidden absolute top-0 right-0"
      />
    </>
  );
};

export default Frame;
