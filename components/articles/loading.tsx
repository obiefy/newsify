import Skeleton from "@/components/articles/skeleton";

type Props = {
  times: Number,
}

export default function Loading({ times = 3 }: Props) {
  const iterations = Array(times).fill(null);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-12 xl:grid-cols-3">
       {iterations.map((item, index) => <Skeleton key={index} />)}
    </div>
  )
}