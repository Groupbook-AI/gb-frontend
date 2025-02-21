import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function CallToAction() {

  function PlayIcon(props) {

    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
        <path
          d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
          fill="#A3A3A3"
          stroke="#A3A3A3"
        />
      </svg>
    )
  }

  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get Started Today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
          Create your event in minutes and unlock the tools to organize, share, and earn with ease.
          </p>
          <div className="mt-8 flex justify-center">
          <Button
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                variant="outline"
              >
                <PlayIcon className="h-6 w-6 flex-none" />
                <span className="ml-2.5 text-gray-300">Let&apos;s Go</span>
              </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
