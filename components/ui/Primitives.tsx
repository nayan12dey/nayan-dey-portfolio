import React from 'react';

// --- BUTTONS ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'mono';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...props
}) => {
    const baseStyles =
        'inline-flex items-center justify-center font-mono transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50 disabled:pointer-events-none';

    const sizes = {
        sm: 'px-3 py-1.5 text-xs rounded-md gap-2',
        md: 'px-4 py-2.5 text-xs rounded-lg gap-2.5 tracking-wide',
        lg: 'px-6 py-3.5 text-sm rounded-lg gap-3 tracking-wide',
    };

    const variants = {
        primary:
            'bg-accent text-white shadow-subtle hover:bg-accent-hover hover:shadow-glow border border-accent/40',
        secondary:
            'bg-surface text-content-primary border border-border-subtle hover:border-border-hover hover:bg-surface-elevated',
        ghost:
            'bg-transparent text-content-secondary hover:text-content-primary hover:bg-surface/50 border border-transparent',
        mono:
            'bg-background-alt text-content-secondary border border-border-subtle hover:border-accent/40 hover:text-content-primary font-mono',
    };

    return (
        <button
            className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

// --- CARDS ---
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    interactive = false,
    className = '',
    ...props
}) => {
    return (
        <div
            className={`bg-surface border border-border-subtle rounded-xl p-6 shadow-card transition-all duration-300 relative overflow-hidden ${interactive
                    ? 'hover:border-border-hover hover:bg-surface-elevated hover:shadow-elevated'
                    : ''
                } ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

// --- BADGES ---
interface BadgeProps {
    children: React.ReactNode;
    variant?: 'accent' | 'neutral' | 'status';
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'neutral',
}) => {
    const variants = {
        accent:
            'bg-accent-subtle text-accent border-accent/20',
        neutral:
            'bg-surface-subtle text-content-secondary border-border-subtle',
        status:
            'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    };

    return (
        <span
            className={`inline-flex items-center px-2.5 py-1 text-2xs font-mono uppercase tracking-wider rounded-md border ${variants[variant]}`}
        >
            {variant === 'status' && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
            )}
            {children}
        </span>
    );
};

// --- SECTION HEADERS (Editorial & Technical) ---
interface SectionHeaderProps {
    label: string;
    title: string;
    description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    label,
    title,
    description,
}) => {
    return (
        <div className="space-y-2 mb-10">
            <div className="font-mono text-xs text-accent uppercase tracking-widest flex items-center gap-2">
                <span className="text-content-tertiary">//</span>
                <span>{label}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-content-primary tracking-tight">
                {title}
            </h2>
            {description && (
                <p className="text-content-secondary text-base max-w-2xl pt-1">
                    {description}
                </p>
            )}
        </div>
    );
};