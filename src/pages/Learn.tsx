import { BookOpen, HelpCircle } from 'lucide-react';

export function Learn() {
  const topics = [
    {
      title: "What is Intrinsic Value?",
      content: "Intrinsic value is the discounted value of the cash that can be taken out of a business during its remaining life. It is the objective value of a company, completely separated from its daily market quotation."
    },
    {
      title: "The Margin of Safety Explained",
      content: "The central concept of value investing. You only buy a stock when its market price is significantly below its calculated intrinsic value. This delta serves as a cushion against errors in calculation, bad luck, or unforeseeable events. E.g., if a gaming stock's hard assets are worth RM 8.00/share, but it trades at RM 4.50, that RM 3.50 difference is your margin of safety."
    },
    {
      title: "Mr. Market Metaphor",
      content: "Benjamin Graham's famous allegory. Imagine a manic-depressive business partner named Mr. Market who offers to buy or sell his share of the business every day. Some days he is wildly optimistic and asks a high price; other days he is pessimistic and will sell for pennies. You must serve your own interests by taking advantage of his folly, not being infected by his mood."
    },
    {
      title: "Circle of Competence",
      content: "You don't need to be an expert in every sector. You only need to be able to evaluate companies within your 'circle of competence'. The size of the circle is not very important; knowing its boundaries is vital."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto pb-16">
      <div className="text-center mb-16">
        <h1 className="font-headline text-5xl font-bold mb-4">The Value Investor's Playbook</h1>
        <p className="font-body text-xl text-dark/70">
          Education and principles for rational capital allocation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {topics.map((topic, i) => (
          <div key={i} className="bg-card border border-dark p-8 group">
            <div className="text-teal mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
              <BookOpen size={32} />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-3 group-hover:text-teal transition-colors">{topic.title}</h3>
            <p className="font-body text-lg text-dark/90 leading-[1.6]">
              {topic.content}
            </p>
          </div>
        ))}
      </div>

       <div className="bg-dark text-paper p-8 md:p-12 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 text-cream/5 transform scale-[5] origin-bottom-right"><HelpCircle /></div>
        <div className="relative z-10">
          <h2 className="font-headline text-3xl font-bold mb-6 text-cream">Case Study: Casino Assets</h2>
          <div className="font-body text-lg space-y-4 text-cream/80 max-w-2xl">
            <p>
              How do we apply these principles to the Malaysian gaming sector? When institutional investors dump hospitality stocks amid macroeconomic panic, they often ignore the underlying asset replacement cost.
            </p>
            <p>
              When a company like Genting trades at a massive discount, a value investor asks: <em className="text-orange">"Could a competitor realistically build a rival integrated resort on a mountain in Malaysia for less than its current market cap?"</em> If the answer is no, a margin of safety likely exists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
