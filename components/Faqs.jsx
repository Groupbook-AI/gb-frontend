import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How can Groupbook help me attract more events to my destination?',
      answer:
        'Groupbook simplifies the booking process, making it easier for event planners to choose your destination for their events by offering streamlined accommodations and exclusive hotel deals.',
    },
    {
      question: 'How do I ensure a smooth booking experience for large groups visiting my destination?',
      answer:
        'Groupbook’s platform allows you to manage room blocks and bookings for large groups, ensuring a seamless experience for event planners, attendees, and your local hotels.',
    },
    {
      question: 'How can Groupbook improve the visibility of my destination to event planners?',
      answer:
        'By integrating Groupbook with your marketing strategy, you can provide event planners with a trusted booking platform, enhancing your destination’s appeal and visibility to a larger audience.',
    },
  ],
  [
    {
      question: 'Can I track bookings and hotel availability for multiple events at once?',
      answer:
        'Yes, Groupbook provides an intuitive dashboard where you can monitor all hotel bookings across multiple events, ensuring room availability and preventing overbooking for your destination.',
    },
    {
      question: 'How do I ensure hotels in my area offer competitive rates for events?',
      answer:
        'Groupbook works with local hotels to negotiate group rates, ensuring competitive pricing for your destination while making it easier for event planners to secure accommodations.',
    },
    {
      question: 'Can Groupbook help with post-event feedback from visitors?',
      answer:
        'Groupbook’s platform allows you to gather feedback from event planners and attendees, helping you measure satisfaction and improve future event coordination in your destination.',
    },
  ],
  [
    {
      question: 'What kind of support does Groupbook offer to event planners using my destination?',
      answer:
        'Groupbook provides event planners with dedicated concierge support, ensuring a seamless booking experience for their events and helping them manage logistics more effectively.',
    },
    {
      question: 'How can I offer exclusive deals to attract events to my destination?',
      answer:
        'By partnering with Groupbook, you can offer exclusive perks such as discounted hotel rates, amenities, and added services to event planners, making your destination more attractive for bookings.',
    },
    {
      question: 'Can I manage room blocks across multiple hotels in my area?',
      answer:
        'Yes, Groupbook allows you to manage room blocks across multiple hotels in your destination, offering a flexible solution for event organizers and large groups needing accommodations.',
    },
  ],
];



export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
