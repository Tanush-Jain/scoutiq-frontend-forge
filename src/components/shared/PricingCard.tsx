import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  cta,
}: PricingCardProps) {
  return (
    <div
      className={`relative p-6 lg:p-8 rounded-xl border ${
        highlighted
          ? 'bg-gradient-to-b from-primary/10 to-card border-primary/50'
          : 'bg-card border-border'
      } card-glow`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
          Most Popular
        </span>
      )}
      
      <div className="mb-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      <div className="mb-6">
        <span className="font-display text-4xl lg:text-5xl font-bold text-foreground">{price}</span>
        <span className="text-muted-foreground ml-2">{period}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
          highlighted
            ? 'btn-primary'
            : 'btn-secondary'
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
