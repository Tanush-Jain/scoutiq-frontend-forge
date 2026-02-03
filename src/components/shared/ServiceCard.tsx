import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  status: 'live' | 'coming-soon';
}

export function ServiceCard({ icon: Icon, title, description, status }: ServiceCardProps) {
  return (
    <div className="group p-6 lg:p-8 rounded-xl bg-card border border-border card-glow">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === 'live'
              ? 'bg-green-500/20 text-green-400'
              : 'bg-amber-500/20 text-amber-400'
          }`}
        >
          {status === 'live' ? 'Live' : 'Coming Soon'}
        </span>
      </div>
      <h3 className="font-display text-lg lg:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
