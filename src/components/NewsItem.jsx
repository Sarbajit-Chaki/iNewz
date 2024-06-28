import image from '../assets/news.jpg'

const NewsItem = ({title,description,src,url}) => {
  return (
        <div className=" w-[292px] bg-[#121212] text-white border border-[#e6e9ec] rounded-md p-1">
          <img className=" h-48 w-full rounded-sm" src={src?src:image} alt="img" />
          <div className="body p-3">
            <h2 className=" text-xl font-semibold my-2 text-ellipsis overflow-hidden  ">{title.slice(0,50)}</h2>
            <p className=" mb-4 text-ellipsis overflow-hidden  ">{description?description.slice(0,90):"Recent events spark global interest, an information about something that just happened."}</p>
            <a className=" p-2 bg-blue-600 text-white rounded-md " href={url} target="_blank">Read More</a>
          </div>
        </div>
  )
}

export default NewsItem
