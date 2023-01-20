import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

interface Props {
  previewVideo: string;
  title: string;
  image: string;
  url: string;
  views: string;
}

const Card = ({ datas: { links } }: any) => {
  return (
    <div className="flex ml-10 md:ml-20  flex-wrap">
      {links?.map((item: Props, idx: number) => (
        <div key={idx} className=" px-8 py-4 my-2 mx-1 overflow-hidden flex flex-col bg-white/10">
          <img src={item.image} alt={item.title.slice(0, 40)} className="w-40 h-32" />
          <video controls poster={item.image} className="w-40 h-40">
            <source src={item.previewVideo} type="video/mp4" />
            <source src={item.previewVideo} type="video/ogg" />
            <source src={item.previewVideo} type="video/webm" />
            Your browser does not support the video element.
          </video>
          <p className="text-sm lowercase ">{item.title.slice(0, 20)}</p>
          <a href={item.url} target="_blank" className="flex bg-sky-300 items-center px-1 py-2 space-x-1 text-indigo-500">
            <AiFillEye className="text-lg " />
            <p className="text-sm font-semibold">Watch Full Version</p>
          </a>
          <p className="text-sky-200 ">{item.views}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
