import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function LeaseDetailsLoading() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Skeleton className="h-9 w-9 rounded-md" />
        <Skeleton className="h-10 w-[200px]" />
        <Skeleton className="h-6 w-[80px] rounded-full" />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <Skeleton className="h-6 w-[150px] mb-1" />
            <Skeleton className="h-4 w-[250px]" />
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <Skeleton className="h-5 w-[100px] mb-1" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
                <div>
                  <Skeleton className="h-5 w-[100px] mb-1" />
                  <Skeleton className="h-4 w-[80px]" />
                </div>
                <div>
                  <Skeleton className="h-5 w-[120px] mb-1" />
                  <Skeleton className="h-4 w-[80px]" />
                </div>
                <div>
                  <Skeleton className="h-5 w-[120px] mb-1" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Skeleton className="h-5 w-[80px] mb-1" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
                <div>
                  <Skeleton className="h-5 w-[120px] mb-1" />
                  <Skeleton className="h-4 w-[40px]" />
                </div>
                <div>
                  <Skeleton className="h-5 w-[120px] mb-1" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </div>
          </CardContent>
          <div className="flex justify-end gap-2 p-4 pt-0">
            <Skeleton className="h-9 w-[100px]" />
            <Skeleton className="h-9 w-[150px]" />
          </div>
        </Card>
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[150px]" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div>
                <Skeleton className="h-5 w-[50px] mb-1" />
                <Skeleton className="h-4 w-[120px]" />
              </div>
            </div>
            <div className="space-y-4 mt-4">
              <div>
                <Skeleton className="h-5 w-[50px] mb-1" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
              <div>
                <Skeleton className="h-5 w-[50px] mb-1" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
