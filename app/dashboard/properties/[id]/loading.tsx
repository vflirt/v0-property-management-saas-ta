import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function PropertyDetailsLoading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Skeleton className="h-9 w-9 rounded-md" />
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-6 w-[100px] rounded-full" />
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="md:col-span-5">
          <CardHeader className="p-4">
            <Skeleton className="h-6 w-[180px]" />
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Skeleton className="h-4 w-4 mt-0.5" />
                  <div className="w-full">
                    <Skeleton className="h-5 w-[100px] mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Skeleton className="h-4 w-4 mt-0.5" />
                  <div className="w-full">
                    <Skeleton className="h-5 w-[120px] mb-2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full mt-1" />
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Skeleton className="h-4 w-4 mt-0.5" />
                  <div className="w-full">
                    <Skeleton className="h-5 w-[80px] mb-2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full mt-1" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Skeleton className="h-4 w-4 mt-0.5" />
                  <div className="w-full">
                    <Skeleton className="h-5 w-[140px] mb-2" />
                    <div className="flex items-center gap-2 mt-1">
                      <Skeleton className="h-6 w-6 rounded-full" />
                      <Skeleton className="h-4 w-[120px]" />
                    </div>
                    <Skeleton className="h-4 w-full mt-1" />
                    <Skeleton className="h-4 w-full mt-1" />
                  </div>
                </div>
                <div>
                  <Skeleton className="h-5 w-[100px] mb-2" />
                  <div className="mt-1 flex flex-wrap gap-1">
                    <Skeleton className="h-6 w-[80px] rounded-full" />
                    <Skeleton className="h-6 w-[100px] rounded-full" />
                    <Skeleton className="h-6 w-[90px] rounded-full" />
                    <Skeleton className="h-6 w-[120px] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Skeleton className="h-5 w-[100px] mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full mt-1" />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="p-4">
            <Skeleton className="h-6 w-[100px]" />
          </CardHeader>
          <CardContent className="p-4 pt-0 space-y-4">
            <div>
              <Skeleton className="h-4 w-[120px] mb-1" />
              <Skeleton className="h-8 w-[60px]" />
            </div>
            <div>
              <Skeleton className="h-4 w-[100px] mb-1" />
              <Skeleton className="h-8 w-[40px]" />
            </div>
            <div>
              <Skeleton className="h-4 w-[110px] mb-1" />
              <Skeleton className="h-8 w-[30px]" />
            </div>
            <div>
              <Skeleton className="h-4 w-[120px] mb-1" />
              <Skeleton className="h-8 w-[40px]" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Skeleton className="h-10 w-[300px] mb-4" />
        <Card>
          <CardHeader className="p-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-[100px]" />
              <Skeleton className="h-9 w-[100px]" />
            </div>
            <Skeleton className="h-4 w-[250px] mt-1" />
          </CardHeader>
          <CardContent className="p-0">
            <Skeleton className="h-[400px] w-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
