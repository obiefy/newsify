import ArticleCard from "@/components/articles/card";
import Article from "@/interfaces/article";


type Props = {
  articles: Article[]
}

export default function ArticlesList({ articles }: Props) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-12 xl:grid-cols-2">
      {articles.map((article, index) => <ArticleCard key={index} article={article} />)}
    </div>
  )
}