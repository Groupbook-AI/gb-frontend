'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'A game-changer for event planning.',
    body: 'Groupbook saved me over 20 hours organizing hotel blocks for my client’s conference. The dashboard is so intuitive, and I earned commissions for the first time ever!',
    author: 'EventGuru22',
    rating: 5,
  },
  {
    title: 'Finally, a tool that delivers.',
    body: 'I’ve planned events for years, and nothing has made the process easier than Groupbook. From hotel negotiations to real-time tracking, it’s like having an extra team member.',
    author: 'PlannerPro',
    rating: 5,
  },
  {
    title: 'My clients love it.',
    body: 'I used Groupbook for a wedding and my clients couldn’t believe the discounts we got. I made commission on every booking and still offered them great rates!',
    author: 'WeddingWhisperer',
    rating: 5,
  },
  {
    title: 'No more hotel headaches.',
    body: 'Groupbook handled all the back-and-forth with hotels for my event. I just reviewed the offers, clicked approve, and shared it with my attendees. So easy!',
    author: 'HotelHero',
    rating: 5,
  },
  {
    title: 'Earn while you plan.',
    body: 'I was hesitant at first, but Groupbook turned booking hotel blocks into a revenue stream for my business. I can’t imagine planning an event without it now.',
    author: 'MoneyMakingPlanner',
    rating: 5,
  },
  {
    title: 'The dashboard is brilliant.',
    body: 'Seeing all my event bookings in one place made tracking room pickups so much simpler. The live analytics are a lifesaver for keeping everything organized.',
    author: 'EventTechie',
    rating: 5,
  },
  {
    title: 'Support you can count on.',
    body: 'The concierge team at Groupbook helped me secure hotel blocks I never thought possible. It’s like having a personal assistant dedicated to my events.',
    author: 'StressFreePlanner',
    rating: 5,
  },
  {
    title: 'From stressful to seamless.',
    body: 'Groupbook transformed how I handle event accommodations. I used to dread managing hotel blocks, but now it’s one of the easiest parts of my job.',
    author: 'EventMaster',
    rating: 5,
  },
  {
    title: 'Boosted my business.',
    body: 'Not only does Groupbook save me time, but earning commissions on hotel bookings has added a whole new revenue stream to my event planning services.',
    author: 'PlannerExtraordinaire',
    rating: 5,
  },
  {
    title: 'Made my event a success.',
    body: 'Groupbook helped me secure amazing rates for a corporate retreat. The attendees were thrilled, and I even got positive feedback on how smooth the booking process was.',
    author: 'CorporatePlanner',
    rating: 5,
  },
  {
    title: 'Perfect for destination weddings.',
    body: 'Groupbook made managing hotel accommodations for a large destination wedding a breeze. It’s like having a travel agent built into the platform.',
    author: 'DestinationDreamer',
    rating: 5,
  },
  {
    title: 'Incredible value.',
    body: 'For just $99 a month, I’ve saved countless hours and added significant income to my business. Groupbook is worth every penny.',
    author: 'ValuePlanner',
    rating: 5,
  },
  {
    title: 'Highly recommend.',
    body: 'If you’re an event planner, you need Groupbook. It’s not just a tool—it’s a total upgrade to how you manage events.',
    author: 'EventQueen',
    rating: 5,
  },
  {
    title: 'Wish I had this sooner.',
    body: 'I’ve been planning events for years, and I can’t believe I ever did it without Groupbook. It’s like a secret weapon for planners.',
    author: 'SeasonedPlanner',
    rating: 5,
  },
];


function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }) {
  let columnRef = useRef(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Event Planners Are Raving About Groupbook
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
        Real stories of time saved, stress reduced, and earnings increased.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
