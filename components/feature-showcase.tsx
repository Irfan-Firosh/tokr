"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Edit, Video, BarChart, PauseCircle, PlayCircle, ArrowLeft, ArrowRight, ChevronRight, ChevronLeft } from "lucide-react"

const features = [
  {
    id: "scrape",
    icon: Search,
    title: "Content Scraping",
    description: "Automatically find and extract the most engaging Reddit stories and comments.",
    color: "from-[#8A2BE2] to-[#5D3FD3]",
    benefits: ["Find trending stories automatically", "Filter by engagement metrics", "Extract comments and context"],
  },
  {
    id: "customize",
    icon: Edit,
    title: "Video Customization",
    description: "Customize voice, background music, visual style, and pacing to match your brand.",
    color: "from-[#00E5CC] to-[#00A3B4]",
    benefits: ["Multiple voice options", "Custom visual templates", "Background music library"],
  },
  {
    id: "generate",
    icon: Video,
    title: "Video Generation",
    description: "Generate complete videos with text-to-speech narration, background music, and visual elements.",
    color: "from-[#FF7B3A] to-[#FF5733]",
    benefits: ["One-click video generation", "Multiple resolution options", "Automatic captions"],
  },
  {
    id: "analytics",
    icon: BarChart,
    title: "Performance Analytics",
    description: "Track video performance, engagement metrics, and audience insights to optimize your content.",
    color: "from-[#4ECB71] to-[#2EA745]",
    benefits: ["Engagement tracking", "Audience demographics", "Performance recommendations"],
  },
]

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [showSwipeHint, setShowSwipeHint] = useState(false)
  const [swipeDirection, setSwipeDirection] = useState<string | null>(null)
  const [swipeProgress, setSwipeProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  
  // Minimum swipe distance (in px) - reduce this to make swipes more sensitive
  const minSwipeDistance = 30

  // Add mouse drag functionality
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState<number | null>(null)
  const [dragEnd, setDragEnd] = useState<number | null>(null)

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(null) // Reset touch end
    setShowSwipeHint(false)
    setIsPaused(true)
    console.log("Touch start:", e.targetTouches[0].clientX)
  }

  // Handle touch move
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return
    
    const currentX = e.targetTouches[0].clientX
    setTouchEnd(currentX)
    
    // Calculate swipe progress for visual feedback
    const distance = touchStart - currentX
    setSwipeProgress(distance)
    
    // Determine swipe direction for visual feedback
    if (distance > 10) {
      setSwipeDirection('left')
    } else if (distance < -10) {
      setSwipeDirection('right')
    } else {
      setSwipeDirection(null)
    }
    
    console.log("Touch move:", currentX, "Distance:", distance)
  }

  // Handle touch end
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      console.log("Touch end without valid start/end")
      return
    }
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    console.log("Touch end - distance:", distance, "Left swipe:", isLeftSwipe, "Right swipe:", isRightSwipe)
    
    if (isLeftSwipe) {
      // Handle left swipe - go to next feature
      setActiveFeature((prev) => (prev + 1) % features.length)
      console.log("Left swipe detected - moving to next feature")
    } else if (isRightSwipe) {
      // Handle right swipe - go to previous feature
      setActiveFeature((prev) => (prev - 1 + features.length) % features.length)
      console.log("Right swipe detected - moving to previous feature")
    }
    
    // Reset touch values and visual feedback
    setTouchStart(null)
    setTouchEnd(null)
    setSwipeDirection(null)
    setSwipeProgress(0)
  }

  // Hide swipe hint after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeHint(false)
    }, 5000)
    
    return () => clearTimeout(timer)
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length)
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused])

  // Handle mouse down
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent text selection during drag
    setIsDragging(true)
    setDragStart(e.clientX)
    setDragEnd(null) // Reset drag end
    setShowSwipeHint(false)
    setIsPaused(true)
    console.log("Mouse down:", e.clientX)
  }

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragStart) return
    
    const currentX = e.clientX
    setDragEnd(currentX)
    
    // Calculate swipe progress for visual feedback
    const distance = dragStart - currentX
    setSwipeProgress(distance)
    
    // Determine swipe direction for visual feedback
    if (distance > 10) {
      setSwipeDirection('left')
    } else if (distance < -10) {
      setSwipeDirection('right')
    } else {
      setSwipeDirection(null)
    }
    
    console.log("Mouse move:", currentX, "Distance:", distance)
  }

  // Handle mouse up
  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging || !dragStart) {
      setIsDragging(false)
      console.log("Mouse up without valid start")
      return
    }
    
    const currentX = e.clientX
    const distance = dragStart - currentX
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    console.log("Mouse up - distance:", distance, "Left swipe:", isLeftSwipe, "Right swipe:", isRightSwipe)
    
    if (isLeftSwipe) {
      // Handle left swipe - go to next feature
      setActiveFeature((prev) => (prev + 1) % features.length)
      console.log("Left swipe detected - moving to next feature")
    } else if (isRightSwipe) {
      // Handle right swipe - go to previous feature
      setActiveFeature((prev) => (prev - 1 + features.length) % features.length)
      console.log("Right swipe detected - moving to previous feature")
    }
    
    // Reset drag values and visual feedback
    setIsDragging(false)
    setDragStart(null)
    setDragEnd(null)
    setSwipeDirection(null)
    setSwipeProgress(0)
  }

  // Handle mouse leave
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      setDragStart(null)
      setDragEnd(null)
    }
    setIsPaused(false)
  }

  // Toggle pause/play
  const togglePause = () => setIsPaused((prev) => !prev)

  // Add back the handleMouseEnter function
  const handleMouseEnter = () => setIsPaused(true)

  const [showSwipeNotification, setShowSwipeNotification] = useState(false);

  useEffect(() => {
    if (swipeDirection) {
      setShowSwipeNotification(true);
      const timer = setTimeout(() => setShowSwipeNotification(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [swipeDirection]);

  // Add visual feedback for swipe direction
  const getSwipeStyles = () => {
    if (!swipeDirection) return {}
    const translateValue = swipeDirection === 'left' 
      ? Math.min(-swipeProgress * 0.05, 0) 
      : Math.max(-swipeProgress * 0.05, 0)
    return {
      transform: `translateX(${translateValue}px)`,
      transition: isDragging || touchStart ? 'none' : 'transform 0.3s ease'
    }
  }

  return (
    <section
      id="features"
      className="py-20 bg-[#121214]"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showSwipeNotification && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#24242A] text-white px-4 py-2 rounded shadow-lg mt-4">
          Swipe to explore more features!
        </div>
      )}
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#24242A] rounded-full text-sm font-medium text-[#B3B3B7] mb-4">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
            Everything You Need to <span className="text-gradient-multi">Create Viral Content</span>
          </h2>
          <p className="text-xl text-[#B3B3B7] max-w-2xl mx-auto">
            Our platform streamlines every step of the video creation process.
          </p>
        </div>

        <div className="relative">
          {/* Pause/Play Button */}
          <button
            onClick={togglePause}
            className="absolute top-0 right-0 z-10 text-[#B3B3B7] hover:text-white transition-colors"
            aria-label={isPaused ? "Play carousel" : "Pause carousel"}
          >
            {isPaused ? <PlayCircle className="h-8 w-8" /> : <PauseCircle className="h-8 w-8" />}
          </button>

          {/* Feature Carousel */}
          <div 
            className="relative overflow-hidden rounded-2xl border border-[#34343A] bg-[#1A1A1C]"
            ref={carouselRef}
            style={{ cursor: 'default' }}
          >
            {/* Left Navigation Arrow */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-1/4 z-20 flex items-center justify-start pl-4 cursor-pointer group"
              onClick={() => {
                setActiveFeature((prev) => (prev - 1 + features.length) % features.length);
                setIsPaused(true);
              }}
            >
              <div className="bg-[#24242A]/80 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronLeft className="h-6 w-6 text-white" />
              </div>
            </div>

            {/* Right Navigation Arrow */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-1/4 z-20 flex items-center justify-end pr-4 cursor-pointer group"
              onClick={() => {
                setActiveFeature((prev) => (prev + 1) % features.length);
                setIsPaused(true);
              }}
            >
              <div className="bg-[#24242A]/80 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="h-6 w-6 text-white" />
              </div>
            </div>

            {/* Content without swipe animation */}
            <div>
              {/* Progress Indicators */}
              <div className="absolute top-0 left-0 right-0 z-10 flex">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className="h-1 flex-1 bg-[#34343A] overflow-hidden"
                    onClick={() => {
                      setActiveFeature(index)
                      setIsPaused(true)
                    }}
                  >
                    {activeFeature === index && (
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#8A2BE2] to-[#00E5CC]"
                        initial={{ width: "0%" }}
                        animate={{ width: isPaused ? "100%" : "100%" }}
                        transition={{
                          duration: isPaused ? 0 : 5,
                          ease: "linear",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="p-8"
                  >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-[#8A2BE2] to-[#5D3FD3] rounded-xl mb-6">
                          {(() => {
                            const FeatureIcon = features[activeFeature].icon
                            return <FeatureIcon className="h-7 w-7 text-[#121214]" />
                          })()}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                          {features[activeFeature].title}
                        </h3>
                        <p className="text-[#B3B3B7] text-lg mb-8">{features[activeFeature].description}</p>
                        <ul className="space-y-4">
                          {features[activeFeature].benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="mr-3 h-6 w-6 mt-0.5 rounded-full bg-[#4ECB71]/20 flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-3 w-3 text-[#4ECB71]"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </div>
                              <span className="text-white text-lg">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-[#24242A] rounded-xl border border-[#34343A] p-6 shadow-xl h-[500px] overflow-y-auto">
                        {activeFeature === 0 && (
                          <div>
                            <div className="flex justify-between items-center mb-4">
                              <div className="text-lg font-medium text-white">Reddit Content Explorer</div>
                              <div className="text-sm text-[#B3B3B7]">Trending Stories</div>
                            </div>
                            <div className="relative mb-4">
                              <input
                                type="text"
                                className="w-full h-12 pl-10 pr-4 rounded-lg bg-[#1A1A1C] border border-[#34343A] text-white"
                                placeholder="Search for Reddit stories..."
                                defaultValue="AITA for not attending my sister's wedding"
                              />
                              <Search className="h-5 w-5 text-[#6D6D74] absolute left-3 top-3.5" />
                            </div>
                            <div className="space-y-3">
                              {[1, 2].map((i) => (
                                <div
                                  key={i}
                                  className="p-4 rounded-lg bg-[#1A1A1C] border border-[#34343A] hover:border-[#8A2BE2] transition-colors"
                                >
                                  <div className="text-sm font-medium text-white mb-2 truncate">
                                    {i === 1
                                      ? "AITA for not attending my sister's wedding after she uninvited my husband?"
                                      : "My sister is getting married next month and I wasn't invited"}
                                  </div>
                                  <p className="text-xs text-[#B3B3B7] mb-3 line-clamp-2">
                                    {i === 1
                                      ? "My sister and I have always been close, but she recently got engaged to a man who has a long-standing feud with my husband..."
                                      : "I just found out my sister is getting married next month and I wasn't invited. We've had our differences in the past but..."}
                                  </p>
                                  <div className="flex justify-between text-xs text-[#B3B3B7]">
                                    <span>{i === 1 ? "3.2k upvotes" : "2.8k upvotes"}</span>
                                    <span>{i === 1 ? "847 comments" : "612 comments"}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeFeature === 1 && (
                          <div>
                            <div className="flex justify-between items-center mb-4">
                              <div className="text-lg font-medium text-white">Video Customization</div>
                              <div className="text-sm text-[#00E5CC]">Templates</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <label className="block text-sm text-[#B3B3B7] mb-2">Voice Style</label>
                                <select className="w-full h-12 px-3 rounded-lg bg-[#1A1A1C] border border-[#34343A] text-white">
                                  <option>Natural Male</option>
                                  <option>Natural Female</option>
                                  <option>Dramatic Male</option>
                                  <option>Dramatic Female</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-sm text-[#B3B3B7] mb-2">Background Music</label>
                                <select className="w-full h-12 px-3 rounded-lg bg-[#1A1A1C] border border-[#34343A] text-white">
                                  <option>Ambient</option>
                                  <option>Dramatic</option>
                                  <option>Upbeat</option>
                                  <option>None</option>
                                </select>
                              </div>
                            </div>
                            <div className="mb-6">
                              <label className="block text-sm text-[#B3B3B7] mb-2">Visual Template</label>
                              <div className="grid grid-cols-4 gap-3">
                                {["Minimal", "Cinematic", "Vibrant", "Dramatic"].map((template, i) => (
                                  <div
                                    key={template}
                                    className={`aspect-video rounded-lg cursor-pointer overflow-hidden border-2 ${i === 0 ? "border-[#00E5CC]" : "border-[#34343A]"}`}
                                  >
                                    <div className="h-full w-full p-2 bg-[#1A1A1C] flex flex-col">
                                      <div
                                        className="h-2 w-1/2 rounded-full mb-1"
                                        style={{
                                          backgroundColor:
                                            i === 0 ? "#00E5CC" : i === 1 ? "#8A2BE2" : i === 2 ? "#FF7B3A" : "#4ECB71",
                                        }}
                                      ></div>
                                      <div className="h-1 w-3/4 bg-[#34343A] rounded-full mb-1"></div>
                                      <div className="h-1 w-2/3 bg-[#34343A] rounded-full mb-1"></div>
                                      <div className="mt-auto h-2 w-full bg-[#34343A] rounded-full opacity-50"></div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm text-[#B3B3B7] mb-2">Pacing</label>
                              <div className="relative h-12">
                                <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                                  <div className="h-2 w-full bg-[#1A1A1C] rounded-full">
                                    <div className="h-full w-3/5 bg-gradient-to-r from-[#00E5CC] to-[#00A3B4] rounded-full"></div>
                                    <div className="h-5 w-5 rounded-full bg-white border-2 border-[#00E5CC] absolute top-1/2 left-[60%] transform -translate-y-1/2 cursor-pointer"></div>
                                  </div>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 flex justify-between text-sm text-[#B3B3B7]">
                                  <span>Slower</span>
                                  <span>Faster</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeFeature === 2 && (
                          <div>
                            <div className="flex justify-between items-center mb-4">
                              <div className="text-lg font-medium text-white">Video Generator</div>
                              <div className="text-sm text-[#FF7B3A]">Processing</div>
                            </div>
                            <div className="aspect-video bg-[#1A1A1C] rounded-lg mb-6 flex items-center justify-center">
                              <div className="text-center">
                                <div className="w-16 h-16 rounded-full border-3 border-[#FF7B3A] border-t-transparent animate-spin mx-auto mb-3"></div>
                                <div className="text-white text-lg font-medium">65%</div>
                                <div className="w-48 h-2 bg-[#34343A] rounded-full mx-auto mt-3 overflow-hidden">
                                  <div className="h-full w-[65%] bg-gradient-to-r from-[#FF7B3A] to-[#FF5733] rounded-full"></div>
                                </div>
                                <div className="text-sm text-[#B3B3B7] mt-3">Generating your video...</div>
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="p-4 rounded-lg bg-[#1A1A1C] border border-[#34343A]">
                                <div className="text-sm text-[#B3B3B7] mb-1">Duration</div>
                                <div className="text-white text-lg font-medium">2:45</div>
                              </div>
                              <div className="p-4 rounded-lg bg-[#1A1A1C] border border-[#34343A]">
                                <div className="text-sm text-[#B3B3B7] mb-1">Resolution</div>
                                <div className="text-white text-lg font-medium">1080p</div>
                              </div>
                              <div className="p-4 rounded-lg bg-[#1A1A1C] border border-[#34343A]">
                                <div className="text-sm text-[#B3B3B7] mb-1">File Size</div>
                                <div className="text-white text-lg font-medium">24.8 MB</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeFeature === 3 && (
                          <div>
                            <div className="flex justify-between items-center mb-4">
                              <div className="text-lg font-medium text-white">Performance Dashboard</div>
                              <div className="text-sm text-[#4ECB71]">Last 7 days</div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mb-6">
                              <div className="p-4 rounded-lg bg-[#1A1A1C] border border-[#34343A]">
                                <div className="text-sm text-[#B3B3B7] mb-1">Total Views</div>
                                <div className="text-white text-lg font-medium">17,000</div>
                                <div className="text-xs text-[#4ECB71] mt-1 flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <polyline points="18 15 12 9 6 15"></polyline>
                                  </svg>
                                  <span className="ml-1">+24.3%</span>
                                </div>
                              </div>
                              <div className="p-4 rounded-lg bg-[#1A1A1C] border border-[#34343A]">
                                <div className="text-sm text-[#B3B3B7] mb-1">Engagement</div>
                                <div className="text-white text-lg font-medium">26.8%</div>
                                <div className="text-xs text-[#4ECB71] mt-1 flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <polyline points="18 15 12 9 6 15"></polyline>
                                  </svg>
                                  <span className="ml-1">+5.7%</span>
                                </div>
                              </div>
                              <div className="p-4 rounded-lg bg-[#1A1A1C] border border-[#34343A]">
                                <div className="text-sm text-[#B3B3B7] mb-1">Followers</div>
                                <div className="text-white text-lg font-medium">843</div>
                                <div className="text-xs text-[#4ECB71] mt-1 flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <polyline points="18 15 12 9 6 15"></polyline>
                                  </svg>
                                  <span className="ml-1">+12.1%</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between items-center mb-3">
                                <h4 className="text-white font-medium">Views Performance</h4>
                                <div className="flex items-center gap-4 text-xs">
                                  <div className="flex items-center gap-1">
                                    <div className="h-2 w-2 rounded-full bg-[#8A2BE2]"></div>
                                    <span className="text-[#B3B3B7]">Views</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <div className="h-2 w-2 rounded-full bg-[#4ECB71]"></div>
                                    <span className="text-[#B3B3B7]">Engagement</span>
                                  </div>
                                </div>
                              </div>

                              <div className="h-40 bg-[#1A1A1C] rounded-lg p-4 flex items-end justify-between">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                                  const viewHeights = [45, 65, 85, 95, 75, 55, 80];
                                  const engagementHeights = [35, 55, 70, 85, 60, 45, 65];
                                  return (
                                    <div key={day} className="flex flex-col items-center gap-2">
                                      <div className="relative w-8 flex flex-col items-center">
                                        {/* Views Bar */}
                                        <div 
                                          className="w-6 bg-[#8A2BE2] hover:bg-[#9B4DFF] transition-colors duration-200 rounded-sm"
                                          style={{ height: `${viewHeights[i]}%` }}
                                        />
                                        {/* Engagement Bar */}
                                        <div 
                                          className="absolute bottom-0 w-3 bg-[#4ECB71] hover:bg-[#60E085] transition-colors duration-200 rounded-sm"
                                          style={{ height: `${engagementHeights[i]}%` }}
                                        />
                                      </div>
                                      <span className="text-xs text-[#B3B3B7]">{day.charAt(0)}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Feature Navigation Dots */}
              <div className="flex justify-center py-6">
                <div className="flex gap-3">
                  {features.map((feature, index) => (
                    <button
                      key={feature.id}
                      className={`h-3 rounded-full transition-all ${
                        activeFeature === index ? "w-10 bg-[#8A2BE2]" : "w-3 bg-[#34343A] hover:bg-[#6D6D74]"
                      }`}
                      onClick={() => {
                        setActiveFeature(index)
                        setIsPaused(true)
                      }}
                      aria-label={`Go to ${feature.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

