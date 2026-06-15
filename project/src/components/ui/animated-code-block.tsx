import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';

interface AnimatedCodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  typingSpeed?: number;
  showLineNumbers?: boolean;
}

export function AnimatedCodeBlock({
  code,
  language = 'typescript',
  className,
  showLineNumbers = true,
}: AnimatedCodeBlockProps) {
  const lines = code.split('\n');

  const syntaxHighlight = (line: string) => {
    const keywords = ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'import', 'from', 'export', 'async', 'await', 'class', 'interface', 'type'];
    const types = ['string', 'number', 'boolean', 'void', 'null', 'undefined', 'any', 'never'];
    const builtins = ['console', 'log', 'Array', 'Object', 'Promise', 'JSON'];

    let highlighted = line;

    keywords.forEach((kw) => {
      highlighted = highlighted.replace(
        new RegExp(`\\b${kw}\\b`, 'g'),
        `<span class="text-purple-400">${kw}</span>`
      );
    });

    types.forEach((t) => {
      highlighted = highlighted.replace(
        new RegExp(`\\b${t}\\b`, 'g'),
        `<span class="text-cyan-400">${t}</span>`
      );
    });

    builtins.forEach((b) => {
      highlighted = highlighted.replace(
        new RegExp(`\\b${b}\\b`, 'g'),
        `<span class="text-yellow-300">${b}</span>`
      );
    });

    highlighted = highlighted.replace(
      /(['"`])(.*?)\1/g,
      '<span class="text-green-400">$&</span>'
    );

    highlighted = highlighted.replace(
      /\/\/.*/g,
      '<span class="text-gray-500 italic">$&</span>'
    );

    return highlighted;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn('code-block p-4 overflow-x-auto', className)}
    >
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-muted-foreground">{language}</span>
      </div>
      <pre className="text-sm">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              {showLineNumbers && (
                <span className="w-8 text-right pr-4 text-gray-600 select-none">
                  {i + 1}
                </span>
              )}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
                className="flex-1"
                dangerouslySetInnerHTML={{ __html: syntaxHighlight(line) || '&nbsp;' }}
              />
            </div>
          ))}
        </code>
      </pre>
    </motion.div>
  );
}

export function AnimatedTypingCode({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const chars = useMemo(() => code.split(''), [code]);

  return (
    <div className={cn('code-block p-4 font-mono text-sm', className)}>
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>
      <pre className="whitespace-pre-wrap">
        {chars.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.02 }}
            className={char === '\n' ? 'block' : undefined}
          >
            {char === '\n' ? '' : char}
          </motion.span>
        ))}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-codesync-primary ml-1"
        />
      </pre>
    </div>
  );
}
