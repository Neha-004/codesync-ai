import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock, Eye, EyeOff, Code2, ArrowRight, Github } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { FloatingOrb } from '@/components/ui/animated-background';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  remember: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FloatingOrb color="blue" size="xl" className="top-10 left-10 opacity-20" delay={0} />
        <FloatingOrb color="purple" size="md" className="bottom-20 right-10 opacity-15" delay={2} />
      </div>

      {/* Left Panel - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-codesync-bg to-codesync-bg-secondary items-center justify-center p-12">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-r from-codesync-primary to-codesync-secondary flex items-center justify-center mb-8">
              <Code2 className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">
              Code <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Join thousands of developers collaborating in real-time with AI-powered assistance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 glass-card p-6 rounded-xl max-w-md mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-codesync-primary to-codesync-secondary flex items-center justify-center">
                <span className="text-white text-sm font-bold">JD</span>
              </div>
              <div>
                <p className="font-medium text-white">John Doe</p>
                <p className="text-xs text-muted-foreground">Active now</p>
              </div>
              <div className="ml-auto flex -space-x-2">
                {['AK', 'SM', 'RL'].map((initials) => (
                  <div
                    key={initials}
                    className="w-7 h-7 rounded-full bg-codesync-bg-tertiary border-2 border-codesync-bg flex items-center justify-center text-xs text-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
            </div>
            <div className="code-block p-3 text-sm font-mono">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-400">room</span>{' '}
              <span className="text-white">=</span>{' '}
              <span className="text-yellow-300">createRoom</span>
              <span className="text-white">({'{'})</span>
              <br />
              <span className="text-gray-500 ml-4">AI: enabled</span>
              <br />
              <span className="text-white">{'}'});</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
            <p className="text-muted-foreground">
              Sign in to continue to CodeSync AI
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10 border-white/10"
                    {...register('email')}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="/forgot-password"
                    className="text-sm text-codesync-primary hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 border-white/10"
                    {...register('password')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-400">{errors.password.message}</p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="remember" {...register('remember')} />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me for 30 days
                </Label>
              </div>

              <GradientButton
                type="submit"
                className="w-full"
                isLoading={isLoading}
                rightIcon={!isLoading ? <ArrowRight className="w-4 h-4" /> : undefined}
              >
                Sign In
              </GradientButton>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-codesync-bg px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full border-white/10 hover:bg-white/5"
              onClick={() => navigate('/dashboard')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-codesync-primary hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
