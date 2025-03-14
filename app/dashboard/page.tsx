"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Home,
  Video,
  Settings,
  BarChart,
  Search,
  Bell,
  User,
  LogOut,
  Plus,
  Filter,
  Clock,
  ThumbsUp,
  MessageSquare,
  TrendingUp,
  ChevronDown,
  Edit,
} from "lucide-react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-[#121214] text-white">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 border-r border-[#34343A] bg-[#1A1A1C] hidden md:block">
          <div className="p-4">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <span className="text-gradient-purple text-xl font-bold">ContentAI</span>
            </Link>

            <nav className="space-y-1">
              <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#24242A] text-white">
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/dashboard/videos"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-[#B3B3B7] hover:bg-[#24242A] hover:text-white transition-colors"
              >
                <Video className="h-5 w-5" />
                <span>My Videos</span>
              </Link>
              <Link
                href="/dashboard/analytics"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-[#B3B3B7] hover:bg-[#24242A] hover:text-white transition-colors"
              >
                <BarChart className="h-5 w-5" />
                <span>Analytics</span>
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-[#B3B3B7] hover:bg-[#24242A] hover:text-white transition-colors"
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </nav>
          </div>

          <div className="absolute bottom-0 w-64 p-4 border-t border-[#34343A]">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-[#8A2BE2] flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">John Doe</div>
                <div className="text-xs text-[#B3B3B7]">Creator Plan</div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="w-full border-[#34343A] text-[#B3B3B7] hover:bg-[#34343A] hover:text-white"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <header className="sticky top-0 z-10 border-b border-[#34343A] bg-[#121214]/80 backdrop-blur-md">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <Link href="/" className="md:hidden flex items-center gap-2">
                  <span className="text-gradient-purple text-xl font-bold">ContentAI</span>
                </Link>
                <div className="relative hidden md:block w-64">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-4 w-4 text-[#6D6D74]" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search videos..."
                    className="w-full h-9 pl-10 pr-4 rounded-md bg-[#1A1A1C] border border-[#34343A] text-white placeholder-[#6D6D74] focus:outline-none focus:ring-1 focus:ring-[#8A2BE2]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="h-9 w-9 rounded-full bg-[#1A1A1C] border border-[#34343A] flex items-center justify-center text-[#B3B3B7] hover:bg-[#24242A] hover:text-white transition-colors">
                  <Bell className="h-5 w-5" />
                </button>
                <div className="h-9 w-9 rounded-full bg-[#8A2BE2] flex items-center justify-center md:hidden">
                  <User className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard content */}
          <main className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">Dashboard</h1>
                <p className="text-[#B3B3B7]">Welcome back, John! Here's what's happening with your content.</p>
              </div>
              <Button className="mt-4 md:mt-0 bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Create New Video
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#24242A] rounded-lg border border-[#34343A] p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-[#B3B3B7]">Total Videos</div>
                  <div className="h-8 w-8 rounded-full bg-[#8A2BE2]/20 flex items-center justify-center">
                    <Video className="h-4 w-4 text-[#8A2BE2]" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">24</div>
                <div className="text-xs text-[#4ECB71] mt-1 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>+3 this week</span>
                </div>
              </div>

              <div className="bg-[#24242A] rounded-lg border border-[#34343A] p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-[#B3B3B7]">Total Views</div>
                  <div className="h-8 w-8 rounded-full bg-[#00E5CC]/20 flex items-center justify-center">
                    <BarChart className="h-4 w-4 text-[#00E5CC]" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">48.2K</div>
                <div className="text-xs text-[#4ECB71] mt-1 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>+12.5% from last month</span>
                </div>
              </div>

              <div className="bg-[#24242A] rounded-lg border border-[#34343A] p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-[#B3B3B7]">Engagement Rate</div>
                  <div className="h-8 w-8 rounded-full bg-[#FF7B3A]/20 flex items-center justify-center">
                    <ThumbsUp className="h-4 w-4 text-[#FF7B3A]" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">26.8%</div>
                <div className="text-xs text-[#4ECB71] mt-1 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>+5.7% from last month</span>
                </div>
              </div>

              <div className="bg-[#24242A] rounded-lg border border-[#34343A] p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-[#B3B3B7]">Followers Gained</div>
                  <div className="h-8 w-8 rounded-full bg-[#4ECB71]/20 flex items-center justify-center">
                    <User className="h-4 w-4 text-[#4ECB71]" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">843</div>
                <div className="text-xs text-[#4ECB71] mt-1 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>+12.1% from last month</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-6">
              <TabsList className="bg-[#1A1A1C] p-1 rounded-lg">
                <TabsTrigger value="overview" className="data-[state=active]:bg-[#24242A]">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="recent" className="data-[state=active]:bg-[#24242A]">
                  Recent Videos
                </TabsTrigger>
                <TabsTrigger value="performance" className="data-[state=active]:bg-[#24242A]">
                  Performance
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Recent videos */}
                  <div className="md:col-span-2 bg-[#24242A] rounded-lg border border-[#34343A] p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-medium text-white">Recent Videos</h2>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#34343A] text-[#B3B3B7] hover:bg-[#34343A] hover:text-white"
                      >
                        <Filter className="h-3 w-3 mr-1" />
                        Filter
                      </Button>
                    </div>

                    <div className="space-y-3">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex gap-3 p-2 rounded-md hover:bg-[#1A1A1C] transition-colors">
                          <div className="h-16 w-24 bg-[#1A1A1C] rounded-md flex items-center justify-center relative">
                            <Video className="h-6 w-6 text-[#6D6D74]" />
                            <div className="absolute bottom-1 right-1 text-[10px] bg-black/60 px-1 rounded text-white">
                              2:45
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-white mb-1">AITA Wedding Drama Story #{item}</h3>
                            <div className="flex items-center gap-3 text-xs text-[#B3B3B7]">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>
                                  {item} day{item > 1 ? "s" : ""} ago
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <BarChart className="h-3 w-3" />
                                <span>{(5 - item) * 1000 + 200} views</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <button className="h-8 w-8 rounded-full hover:bg-[#34343A] flex items-center justify-center text-[#B3B3B7] hover:text-white transition-colors">
                              <Edit className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 text-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#34343A] text-[#B3B3B7] hover:bg-[#34343A] hover:text-white"
                      >
                        View All Videos
                      </Button>
                    </div>
                  </div>

                  {/* Performance summary */}
                  <div className="bg-[#24242A] rounded-lg border border-[#34343A] p-4">
                    <h2 className="text-lg font-medium text-white mb-4">Performance Summary</h2>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm text-[#B3B3B7]">Top Performing Video</div>
                          <div className="text-xs text-[#00E5CC]">5.2K views</div>
                        </div>
                        <div className="p-2 bg-[#1A1A1C] rounded-md">
                          <h3 className="font-medium text-sm text-white mb-1">AITA Wedding Drama Story</h3>
                          <div className="flex items-center gap-2 text-xs text-[#B3B3B7]">
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-3 w-3" />
                              <span>1.2K</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              <span>342</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm text-[#B3B3B7]">Audience Demographics</div>
                          <div className="text-xs text-[#B3B3B7] cursor-pointer hover:text-white">
                            <ChevronDown className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="p-3 bg-[#1A1A1C] rounded-md flex justify-between items-center">
                          <div className="space-y-1 text-xs text-[#B3B3B7]">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-[#8A2BE2]"></div>
                              <span>18-24: 35%</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-[#00E5CC]"></div>
                              <span>25-34: 42%</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-[#FF7B3A]"></div>
                              <span>35+: 23%</span>
                            </div>
                          </div>
                          <div className="h-16 w-16 rounded-full border-3 border-[#8A2BE2] border-r-[#00E5CC] border-b-[#FF7B3A]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm text-[#B3B3B7]">Content Suggestions</div>
                        </div>
                        <div className="p-3 bg-[#1A1A1C] rounded-md">
                          <div className="text-xs text-white mb-2">Based on your performance:</div>
                          <ul className="space-y-1 text-xs text-[#B3B3B7]">
                            <li className="flex items-start">
                              <div className="mr-1 h-3 w-3 mt-0.5 rounded-full bg-[#4ECB71]/20 flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-1.5 w-1.5 text-[#4ECB71]"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </div>
                              <span>Try more relationship advice content</span>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-1 h-3 w-3 mt-0.5 rounded-full bg-[#4ECB71]/20 flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-1.5 w-1.5 text-[#4ECB71]"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </div>
                              <span>Videos under 3 minutes perform better</span>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-1 h-3 w-3 mt-0.5 rounded-full bg-[#4ECB71]/20 flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-1.5 w-1.5 text-[#4ECB71]"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </div>
                              <span>Post between 6-8pm for more engagement</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="recent" className="mt-4">
                <div className="bg-[#24242A] rounded-lg border border-[#34343A] p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium text-white">All Recent Videos</h2>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#34343A] text-[#B3B3B7] hover:bg-[#34343A] hover:text-white"
                      >
                        <Filter className="h-3 w-3 mr-1" />
                        Filter
                      </Button>
                      <select className="h-8 px-2 rounded-md bg-[#1A1A1C] border border-[#34343A] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#8A2BE2]">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last 90 days</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="flex gap-3 p-2 rounded-md hover:bg-[#1A1A1C] transition-colors">
                        <div className="h-16 w-24 bg-[#1A1A1C] rounded-md flex items-center justify-center relative">
                          <Video className="h-6 w-6 text-[#6D6D74]" />
                          <div className="absolute bottom-1 right-1 text-[10px] bg-black/60 px-1 rounded text-white">
                            2:45
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-white mb-1">Video Title #{item}</h3>
                          <div className="flex items-center gap-3 text-xs text-[#B3B3B7]">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>
                                {item} day{item > 1 ? "s" : ""} ago
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BarChart className="h-3 w-3" />
                              <span>{(6 - item) * 1000 + 200} views</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <button className="h-8 w-8 rounded-full hover:bg-[#34343A] flex items-center justify-center text-[#B3B3B7] hover:text-white transition-colors">
                            <Edit className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="performance" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#24242A] rounded-lg border border-[#34343A] p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-medium text-white">Views Performance</h2>
                      <select className="h-8 px-2 rounded-md bg-[#1A1A1C] border border-[#34343A] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#8A2BE2]">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                      </select>
                    </div>

                    <div className="h-40 bg-[#1A1A1C] rounded-md p-4 flex items-end justify-between">
                      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => {
                        // Create a more controlled height that fits within the container
                        const barHeight = Math.floor(Math.random() * 60) + 20
                        return (
                          <div key={index} className="flex flex-col items-center gap-1 w-8">
                            <div className="w-full flex flex-col items-center gap-1">
                              <div className="w-6 bg-[#8A2BE2] rounded-t-sm" style={{ height: `${barHeight}px` }}></div>
                            </div>
                            <div className="text-xs text-[#B3B3B7] mt-1">{day}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="bg-[#24242A] rounded-lg border border-[#34343A] p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-medium text-white">Engagement Metrics</h2>
                      <select className="h-8 px-2 rounded-md bg-[#1A1A1C] border border-[#34343A] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#8A2BE2]">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="p-3 bg-[#1A1A1C] rounded-md">
                        <div className="text-xs text-[#B3B3B7] mb-1">Likes</div>
                        <div className="text-lg font-medium text-white">3,842</div>
                        <div className="text-xs text-[#4ECB71] mt-1 flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>+18.2%</span>
                        </div>
                      </div>
                      <div className="p-3 bg-[#1A1A1C] rounded-md">
                        <div className="text-xs text-[#B3B3B7] mb-1">Comments</div>
                        <div className="text-lg font-medium text-white">1,247</div>
                        <div className="text-xs text-[#4ECB71] mt-1 flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>+12.5%</span>
                        </div>
                      </div>
                      <div className="p-3 bg-[#1A1A1C] rounded-md">
                        <div className="text-xs text-[#B3B3B7] mb-1">Shares</div>
                        <div className="text-lg font-medium text-white">956</div>
                        <div className="text-xs text-[#4ECB71] mt-1 flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>+24.8%</span>
                        </div>
                      </div>
                      <div className="p-3 bg-[#1A1A1C] rounded-md">
                        <div className="text-xs text-[#B3B3B7] mb-1">Saves</div>
                        <div className="text-lg font-medium text-white">2,103</div>
                        <div className="text-xs text-[#4ECB71] mt-1 flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>+15.3%</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-[#1A1A1C] rounded-md">
                      <h3 className="text-sm font-medium text-white mb-2">Engagement by Video Length</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-4 bg-[#24242A] rounded-full overflow-hidden">
                          <div className="h-full bg-[#8A2BE2] rounded-full" style={{ width: "65%" }}></div>
                        </div>
                        <div className="text-xs text-[#B3B3B7]">0-1 min</div>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex-1 h-4 bg-[#24242A] rounded-full overflow-hidden">
                          <div className="h-full bg-[#00E5CC] rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <div className="text-xs text-[#B3B3B7]">1-3 min</div>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex-1 h-4 bg-[#24242A] rounded-full overflow-hidden">
                          <div className="h-full bg-[#FF7B3A] rounded-full" style={{ width: "40%" }}></div>
                        </div>
                        <div className="text-xs text-[#B3B3B7]">3+ min</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}

