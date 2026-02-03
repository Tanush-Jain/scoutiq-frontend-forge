import { LucideIcon } from 'lucide-react';

interface FeatureWidgetProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureWidget({ icon: Icon, title, description }: FeatureWidgetProps) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h4 className="font-display font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
