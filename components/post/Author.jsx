import Image from "next/image";

import { grpahCMSImageLoader } from "../../util";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-8 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute mx-5 -top-14">
        <Image
          width={100}
          height={100}
          loader={grpahCMSImageLoader}
          alt={author.name}
          className="  rounded-full"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
