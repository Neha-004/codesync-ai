import {
  MessageSquare,
  Search,
  FileText,
  Zap,
  Users,
  Code2,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/animated-components';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail } from 'lucide-react';

const helpCategories = [
  {
    icon: Code2,
    title: 'Getting Started',
    description: 'Learn the basics of CodeSync AI',
    articles: 12,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Work together with your team',
    articles: 8,
    color: 'from-purple-500 to-pink-400',
  },
  {
    icon: Zap,
    title: 'AI Features',
    description: 'Master AI-powered coding',
    articles: 15,
    color: 'from-yellow-500 to-orange-400',
  },
  {
    icon: FileText,
    title: 'Billing & Plans',
    description: 'Manage your subscription',
    articles: 6,
    color: 'from-green-500 to-teal-400',
  },
];

const popularArticles = [
  { title: 'How to create a coding room', category: 'Getting Started', time: '2 min read' },
  { title: 'Real-time collaboration basics', category: 'Collaboration', time: '3 min read' },
  { title: 'Using the AI assistant', category: 'AI Features', time: '5 min read' },
  { title: 'Keyboard shortcuts guide', category: 'Getting Started', time: '4 min read' },
];

const faqs = [
  { question: 'How many people can collaborate in one room?', answer: 'Up to 50 people can collaborate simultaneously in a single room. Pro and Enterprise plans offer higher limits.' },
  { question: 'Which programming languages are supported?', answer: 'CodeSync AI supports 50+ programming languages including JavaScript, TypeScript, Python, Go, Rust, Java, and many more.' },
  { question: 'Is my code private and secure?', answer: 'Yes! All code is encrypted in transit and at rest. Private rooms are only accessible by invited collaborators.' },
  { question: 'How does the AI assistant work?', answer: 'Our AI assistant analyzes your code in real-time and provides context-aware suggestions, bug detection, and refactoring recommendations.' },
  { question: 'Can I use CodeSync AI offline?', answer: 'Currently, CodeSync AI requires an internet connection for real-time collaboration and AI features. Offline mode is coming soon.' },
];

export function SupportPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <AnimatedSection>
        <div className="text-center space-y-4 mb-8">
          <Badge className="glass-card border-white/10">Support Center</Badge>
          <h1 className="text-4xl font-bold">How can we help you?</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Find answers to your questions, browse documentation, or contact our support team.
          </p>

          <div className="relative max-w-xl mx-auto mt-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search for help articles..."
              className="pl-12 h-14 text-lg border-white/10"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Help Categories */}
      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {helpCategories.map((category) => (
          <StaggerItem key={category.title}>
            <GlassCard className="p-5 group hover:border-codesync-primary/50 transition-all cursor-pointer">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-1">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
              <Badge variant="outline" className="text-xs border-white/10">
                {category.articles} articles
              </Badge>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Popular Articles */}
      <AnimatedSection delay={0.2}>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Popular Articles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {popularArticles.map((article, i) => (
              <GlassCard key={i} className="p-4 group hover:border-codesync-primary/50 transition-all cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <FileText className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium group-hover:text-codesync-primary transition-colors">{article.title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <Badge variant="outline" className="text-xs border-white/10">{article.category}</Badge>
                      <span>{article.time}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQs */}
      <AnimatedSection delay={0.3}>
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left hover:text-codesync-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </GlassCard>
      </AnimatedSection>

      {/* Contact Options */}
      <AnimatedSection delay={0.4}>
        <div className="grid md:grid-cols-2 gap-4">
          <GlassCard className="p-6 text-center">
            <div className="w-14 h-14 rounded-xl bg-codesync-primary/20 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-7 h-7 text-codesync-primary" />
            </div>
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-muted-foreground mb-4">Chat with our support team in real-time</p>
            <GradientButton className="w-full">Start Chat</GradientButton>
          </GlassCard>

          <GlassCard className="p-6 text-center">
            <div className="w-14 h-14 rounded-xl bg-codesync-secondary/20 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-codesync-secondary" />
            </div>
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="text-sm text-muted-foreground mb-4">Send us an email and we'll respond within 24 hours</p>
            <Button variant="outline" className="w-full border-white/10">Send Email</Button>
          </GlassCard>
        </div>
      </AnimatedSection>
    </div>
  );
}
