import Skeleton from "@/components/articles/skeleton";

export default function Loading({ times = 3 }) {
  const iterations = Array(times).fill(0);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-12 xl:grid-cols-2">
       {iterations.map((item, index) => <Skeleton key={index} />)}
    </div>
  )
}