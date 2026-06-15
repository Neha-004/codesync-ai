import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code2,
  Sparkles,
  Users,
  Check,
  Star,
  ArrowRight,
  Play,
  Bot,
  GitBranch,
  MessageSquare,
  FileCode,
  Terminal,
} from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { AnimatedCodeBlock } from '@/components/ui/animated-code-block';
import { FloatingOrb } from '@/components/ui/animated-background';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/animated-components';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/ui/glass-card';

const sampleCode = `import { createRoom } from 'codesync';

const room = await createRoom({
  name: 'my-awesome-project',
  language: 'typescript',
  ai: true,
  collaborators: ['user1', 'user2'],
});

// AI assistant joins automatically
room.ai.suggest('Implement authentication');`;

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Assistance',
    description: 'Get intelligent code suggestions, bug detection, and automated refactoring powered by advanced AI models.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Users,
    title: 'Real-Time Collaboration',
    description: 'Code together with your team in real-time. See live cursors, selections, and changes instantly.',
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    icon: Sparkles,
    title: 'Lightning Fast',
    description: 'Built on cutting-edge technology for instant synchronization. Zero lag, zero delay.',
    gradient: 'from-yellow-500 to-orange-400',
  },
  {
    icon: Code2,
    title: 'Enterprise Security',
    description: 'End-to-end encryption, SOC 2 compliance, and advanced access controls for your code.',
    gradient: 'from-green-500 to-teal-400',
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Built-in Git integration with visual diff, merge conflict resolution, and branch management.',
    gradient: 'from-orange-500 to-red-400',
  },
  {
    icon: FileCode,
    title: 'Cloud Native',
    description: 'Access your workspace from anywhere. No setup required, just open and code.',
    gradient: 'from-cyan-500 to-blue-400',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Senior Engineer @ Stripe',
    content: 'CodeSync AI has transformed how our team collaborates. The AI assistant is incredibly helpful for code reviews.',
    avatar: 'SC',
  },
  {
    name: 'Marcus Johnson',
    role: 'Tech Lead @ Airbnb',
    content: 'The real-time collaboration features are unmatched. It feels like pair programming with your whole team.',
    avatar: 'MJ',
  },
  {
    name: 'Emily Rodriguez',
    role: 'CTO @ Notion',
    content: 'We switched from VS Code Live Share and never looked back. The AI features alone are worth it.',
    avatar: 'ER',
  },
];

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for individuals and small projects',
    features: [
      'Unlimited public rooms',
      'AI suggestions (100/month)',
      'Real-time collaboration',
      'Basic code review',
      'Community support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    description: 'For professional developers and small teams',
    features: [
      'Everything in Free',
      'Unlimited private rooms',
      'Unlimited AI assistance',
      'Advanced code review',
      'Voice collaboration',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced needs',
    features: [
      'Everything in Pro',
      'SSO & SAML',
      'Self-hosted option',
      'Advanced analytics',
      'Custom AI models',
      'Dedicated support',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-codesync-bg overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FloatingOrb color="blue" size="xl" className="top-0 -left-40 opacity-20" delay={0} />
        <FloatingOrb color="purple" size="lg" className="top-1/4 right-0 opacity-15" delay={2} />
        <FloatingOrb color="cyan" size="md" className="bottom-0 left-1/3 opacity-10" delay={4} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="glass-card border-white/10 px-3 py-1 text-sm mb-4">
                  <Sparkles className="w-3 h-3 mr-1 text-codesync-accent" />
                  Now with GPT-4 Integration
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Code Together,{' '}
                <span className="gradient-text">AI-Powered</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-lg"
              >
                The next-generation collaborative coding platform with AI assistance.
                Write, review, and ship code faster with your team.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <GradientButton
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  onClick={() => window.location.href = '/register'}
                >
                  Start Coding Free
                </GradientButton>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 hover:bg-white/5"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-8 pt-4"
              >
                <div className="flex -space-x-3">
                  {['JD', 'MK', 'AS', 'RW'].map((initials) => (
                    <Avatar key={initials} className="w-10 h-10 border-2 border-codesync-bg">
                      <AvatarFallback className="bg-gradient-to-r from-codesync-primary to-codesync-secondary text-white text-xs">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Trusted by 50,000+ developers</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-codesync-primary/20 to-codesync-secondary/20 rounded-lg blur-xl" />
              <AnimatedCodeBlock
                code={sampleCode}
                language="TypeScript"
                className="relative"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-codesync-bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge className="glass-card border-white/10 mb-4">
                Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything you need to{' '}
                <span className="gradient-text">code better</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Powerful features designed for modern development teams.
                From AI assistance to real-time collaboration.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <GlassCard className="p-6 h-full hover:shadow-glow-md transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* AI Features Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection>
                <div className="space-y-6">
                  <Badge className="glass-card border-white/10">
                    <Sparkles className="w-3 h-3 mr-1 text-codesync-accent" />
                    AI-Powered
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Your AI pair programmer,{' '}
                    <span className="gradient-text">24/7</span>
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Get intelligent assistance at every step of your development workflow.
                    From writing code to debugging and refactoring.
                  </p>
                </div>
              </AnimatedSection>

              <div className="space-y-4 mt-8">
                {[
                  { icon: FileCode, title: 'Code Review', desc: 'Automated PR reviews with actionable feedback' },
                  { icon: Terminal, title: 'Bug Detection', desc: 'Find and fix bugs before they reach production' },
                  { icon: MessageSquare, title: 'Code Explanation', desc: 'Understand complex codebases in seconds' },
                ].map((item, i) => (
                  <AnimatedSection key={item.title} delay={i * 0.1}>
                    <GlassCard className="p-4 flex items-start gap-4 group hover:border-codesync-primary/50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-codesync-primary/20 flex items-center justify-center shrink-0 group-hover:bg-codesync-primary/30 transition-colors">
                        <item.icon className="w-5 h-5 text-codesync-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </GlassCard>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-codesync-primary/10 to-codesync-secondary/10 rounded-xl blur-2xl" />
                <GlassCard className="relative p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-xs text-muted-foreground ml-2">AI Assistant</span>
                  </div>
                  <div className="space-y-3">
                    <GlassCard className="p-3 border-codesync-secondary/30 bg-codesync-secondary/10">
                      <p className="text-sm">Find security vulnerabilities in this code</p>
                    </GlassCard>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <GlassCard className="p-3 border-codesync-accent/30 bg-codesync-accent/10">
                        <p className="text-sm text-codesync-accent">Found 2 potential issues:</p>
                        <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                          <li>SQL injection risk at line 23</li>
                          <li>Missing input validation</li>
                        </ul>
                        <GradientButton size="sm" className="mt-3">
                          Fix All Issues
                        </GradientButton>
                      </GlassCard>
                    </motion.div>
                  </div>
                </GlassCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-codesync-bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge className="glass-card border-white/10 mb-4">
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple, transparent{' '}
                <span className="gradient-text">pricing</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Start for free, upgrade when you need more.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <GlassCard
                  className={`p-6 relative ${plan.popular ? 'border-codesync-primary/50' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-codesync-primary to-codesync-secondary">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-codesync-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {plan.popular ? (
                    <GradientButton className="w-full">
                      {plan.cta}
                    </GradientButton>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full border-white/20 hover:bg-white/5"
                    >
                      {plan.cta}
                    </Button>
                  )}
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge className="glass-card border-white/10 mb-4">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Loved by developers{' '}
                <span className="gradient-text">worldwide</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.name} delay={i * 0.1}>
                <GlassCard className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-r from-codesync-primary to-codesync-secondary text-white text-xs">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <GlassCard className="p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-codesync-primary/10 to-codesync-secondary/10" />
              <div className="relative space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to transform your{' '}
                  <span className="gradient-text">coding workflow?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Join thousands of developers already using CodeSync AI to ship better code faster.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <GradientButton
                    size="lg"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                    onClick={() => window.location.href = '/register'}
                  >
                    Start Free Today
                  </GradientButton>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 hover:bg-white/5"
                  >
                    Schedule Demo
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  No credit card required. Free forever for public projects.
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-codesync-primary to-codesync-secondary flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">CodeSync AI</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                The next-generation collaborative coding platform with AI assistance.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} CodeSync AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
