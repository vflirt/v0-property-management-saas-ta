import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function TenantDetailsLoading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Skeleton className="h-9 w-9 rounded-md" />
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div>
            <Skeleton className="h-10 w-[200px]" />
            <div className="flex items-center gap-2 mt-1">
              <Skeleton className="h-6 w-[80px] rounded-full" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="md:col-span-5">
          <CardHeader className="p-4">
            <Skeleton className="h-6 w-[150px]" />
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Skeleton className="h-4 w-4 mt-0.5" />
                  <div className="w-full">
                    <Skeleton className="h-5 w-[150px] mb-2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full mt-1" />
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Skeleton className="h-4 w-4 mt-0.5" />
                  <div className="w-full">
                    <Skeleton className="h-5 w-[80px] mb-2" />
                    <Skeleton className="h-4 w-[150px]" />
                    <Skeleton className="h-4 w-full mt-1" />
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Skeleton className="h-4 w-4 mt-0.5" />
                  <div className="w-full">
                    <Skeleton className="h-5 w-[50px] mb-2" />
                    <Skeleton className="h-4 w-[100px]" />
                    <Skeleton className="h-4 w-[100px] mt-1" />
                    <Skeleton className="h-4 w-[100px] mt-1" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Skeleton className="h-4 w-4 mt-0.5" />
                  <div className="w-full">
                    <Skeleton className="h-5 w-[150px] mb-2" />
                    <Skeleton className="h-4 w-[100px]" />
                    <Skeleton className="h-4 w-[100px] mt-1" />
                    <Skeleton className="h-4 w-[100px] mt-1" />
                    <Skeleton className="h-6 w-[80px] mt-1 rounded-full" />
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Skeleton className="h-4 w-4 mt-0.5" />
                  <div className="w-full">
                    <Skeleton className="h-5 w-[150px] mb-2" />
                    <Skeleton className="h-4 w-[150px]" />
                    <Skeleton className="h-4 w-[150px] mt-1" />
                    <Skeleton className="h-4 w-[150px] mt-1" />
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Skeleton className="h-4 w-4 mt-0.5" />
                  <div className="w-full">
                    <Skeleton className="h-5 w-[100px] mb-2" />
                    <div className="mt-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-[150px]" />
                        <Skeleton className="h-6 w-[60px]" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-[150px]" />
                        <Skeleton className="h-6 w-[60px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="p-4">
            <Skeleton className="h-6 w-[120px]" />
          </CardHeader>
          <CardContent className="p-4 pt-0 space-y-2">
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-9 w-full" />
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Skeleton className="h-10 w-[300px] mb-4" />
        <Card>
          <CardHeader className="p-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-[150px]" />
              <Skeleton className="h-9 w-[120px]" />
            </div>
            <Skeleton className="h-4 w-[250px] mt-1" />
          </CardHeader>
          <CardContent className="p-0">
            <Skeleton className="h-[300px] w-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
