import Link from "next/link";
import Follow from "@/components/follow";

export default function ArticleCard({ article }) {
  return (
    <div className="my-2">
      <div className=" pb-5/6">
        <img className="inset-0 h-64 w-full rounded-lg shadow-md object-cover" src={article.cover} alt={article.title} />
      </div>
      <div className="relative px-4 -mt-16">
        <div className="bg-white rounded-lg px-4 py-4 shadow-lg">
          <div className="flex items-baseline justify-between mb-2">
            <div>
            {article.category &&
              <div className="flex">
                <Link href={`/?category=${article.category}`} className="inline-block px-2 py-1 leading-none bg-gray-100 border border-gray-300 text-gray-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                {article.category}
                </Link>
                <Follow item='category' value={article.category}/>
              </div>
            }
            </div>
            <div className="flex">
              <Link href={`/?source=${article.source}`} className="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide text-xs">
                {article.source}
              </Link>
              <Follow item='source' value={article.source}/>
            </div>
          </div>
          <h4 className="mt-1 text-gray-800 font-semibold text-md">{article.title}</h4>
          <div className="mt-1 text-gray-700 text-sm">{article.description}</div>
          <div className="mt-1 flex justify-between">
            <span className="text-gray-400 text-sm">{article.author}</span>
            <span className="text-gray-400 text-sm">{article.publishedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}