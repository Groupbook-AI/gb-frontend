import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Why is it so difficult to secure competitive hotel rates for my clients?',
      answer:
        'Event planners often struggle with negotiating competitive rates due to limited leverage or a lack of direct connections with hotels. Groupbook simplifies this process by leveraging our extensive network to secure competitive rates, ensuring your clients receive the best options without the hassle.',
    },
    {
      question: 'How can I ensure room availability during peak event times?',
      answer:
        'During high-demand periods, securing room availability can be a challenge. Groupbook works closely with hotels to prioritize group bookings, enabling you to lock in room blocks early and avoid last-minute surprises.',
    },
    {
      question: 'Why haven’t I been able to earn commissions on hotel bookings in the past?',
      answer:
        'Many hotels don’t offer direct commissions or involve complex agreements. Groupbook automatically calculates and pays commissions on every booking, making it easy to get rewarded for your efforts without the extra hassle.',
    },
  ],
  [
    {
      question: 'How do I handle last-minute changes or cancellations for my clients?',
      answer:
        'Last-minute changes or cancellations can be stressful, but Groupbook’s concierge team is here to help. We assist with modifications, ensuring seamless communication with hotels and minimizing disruptions to your event.',
    },
    {
      question: 'Can I offer my clients added perks or benefits when booking through Groupbook?',
      answer:
        'Absolutely! Groupbook negotiates exclusive perks such as discounted rates, complimentary amenities, and additional services, all of which enhance your clients’ experience and reflect positively on your services.',
    },
    {
      question: 'Is Groupbook suitable for all event sizes?',
      answer:
        'Yes! Whether you’re managing a small meeting or a large convention, Groupbook is designed to scale to meet the needs of any event, ensuring seamless booking for groups of any size.',
    },
  ],
  [
    {
      question: 'How do I track bookings made through Groupbook?',
      answer:
        'Groupbook provides an easy-to-use dashboard where you can track all bookings in real-time. You’ll be able to monitor room availability, payments, and confirmations, ensuring everything is on track for your event.',
    },
    {
      question: 'How does Groupbook streamline the booking process for large events?',
      answer:
        'Groupbook simplifies large event management by centralizing all bookings, room availability, and client preferences into one platform, ensuring smooth coordination and eliminating the hassle of juggling multiple systems.',
    },
    {
      question: 'What makes Groupbook different from other booking platforms?',
      answer:
        'Groupbook stands out by offering a tailored solution for event planners, sports teams, venues, and destination marketing organizations. Our platform is designed to simplify group bookings, save you time, and ensure competitive rates and availability.',
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
