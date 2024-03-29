import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { grpahCMSImageLoader } from "../../util";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white dark:bg-secondary-dark-bg shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          fill
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg  lg:rounded-lg"
        />
      </div>
      <h1
        className="transition duration-500 text-center mb-8 cursor-pointer
          hover:text-orange-500 text-3xl font-semibold dark:text-white dark:hover:text-orange-500"
      >
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <Image
            unoptimized
            loader={grpahCMSImageLoader}
            alt={post.author.name}
            height={30}
            width={30}
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline align-middle text-gray-700 dark:text-white ml-2 text-lg">
            {post.author.name}
          </p>
        </div>

        <div className="font-medium text-gray-700 dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{moment(post.createdAt).format("DD/MMM/YYYY")}</span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 dark:text-white font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span
            className="transition duration-500 transform hover:-translate-y-1
            inline-block bg-orange-500 text-lg rounded-full text-white font-semibold font-mono
            px-8 py-3 cursor-pointer"
          >
            Continue Lendo
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
