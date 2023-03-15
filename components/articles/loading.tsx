import Skeleton from "@/components/articles/skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-12 xl:grid-cols-3">
       <Skeleton />
       <Skeleton />
       <Skeleton />
    </div>
  )
}