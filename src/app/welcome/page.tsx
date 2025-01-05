import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bell, Calendar, CreditCard, Download, Settings, Users } from 'lucide-react'

export default function WelcomePage() {
    return (
        <div className="min-h-screen bg-background p-6 space-y-8">
            {/* 欢迎区域 */}
            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">欢迎回来, 张三</h1>
                        <p className="text-muted-foreground">
                            今天是个好日子，让我们开始工作吧！
                        </p>
                    </div>
                    <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>ZS</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-sm">
                        上次登录: 2024-01-05 10:30
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                        会员等级: VIP
                    </Badge>
                </div>
            </section>

            {/* 快捷操作区域 */}
            <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">总余额</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">¥12,231</div>
                        <p className="text-xs text-muted-foreground">
                            +20.1% 较上月
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">活跃用户</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">
                            +201 较上周
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">销售额</CardTitle>
                        <Download className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-muted-foreground">
                            +19% 较上月
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">活动预约</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">
                            +201 较上周
                        </p>
                    </CardContent>
                </Card>
            </section>

            {/* 通知和快捷入口 */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>最新通知</CardTitle>
                        <CardDescription>
                            您有 3 条未读消息
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-start space-x-4 rounded-lg border p-3">
                                <Bell className="mt-1 h-5 w-5 text-primary" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        系统通知 {i}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        这是一条重要的系统通知，请注意查看。
                                    </p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>快捷入口</CardTitle>
                        <CardDescription>
                            常用功能快速访问
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                        <Button className="w-full justify-start" variant="outline">
                            <Settings className="mr-2 h-4 w-4" />
                            账户设置
                        </Button>
                        <Button className="w-full justify-start" variant="outline">
                            <Users className="mr-2 h-4 w-4" />
                            团队管理
                        </Button>
                        <Button className="w-full justify-start" variant="outline">
                            <Download className="mr-2 h-4 w-4" />
                            下载报表
                        </Button>
                        <Button className="w-full justify-start" variant="outline">
                            <Calendar className="mr-2 h-4 w-4" />
                            日程安排
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

