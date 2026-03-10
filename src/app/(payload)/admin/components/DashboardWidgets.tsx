'use client'

import React, { useEffect, useState } from 'react'
import { motion, type Variants } from 'framer-motion'

interface StatData {
    label: string
    value: number | string
    change?: string
    changeUp?: boolean
    icon: React.ReactNode
    href: string
}

const TrendUp = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
    </svg>
)

const TrendDown = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
        <polyline points="17 18 23 18 23 12" />
    </svg>
)

const IconUsers = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
)

const IconTrophy = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
)

const IconCalendar = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
)

const IconMail = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
)

const IconPlus = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
)

const IconArrowRight = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
)

const easing: [number, number, number, number] = [0.23, 1, 0.32, 1]

const defaultStats: StatData[] = [
    {
        label: 'Total Players',
        value: '—',
        change: 'Loading...',
        changeUp: true,
        icon: <IconUsers />,
        href: '/admin/collections/players',
    },
    {
        label: 'Coaching Staff',
        value: '—',
        change: 'Loading...',
        changeUp: true,
        icon: <IconTrophy />,
        href: '/admin/collections/coaches',
    },
    {
        label: 'Matches',
        value: '—',
        change: 'Loading...',
        changeUp: true,
        icon: <IconCalendar />,
        href: '/admin/collections/matches',
    },
    {
        label: 'Messages',
        value: '—',
        change: 'Loading...',
        changeUp: false,
        icon: <IconMail />,
        href: '/admin/collections/contact-submissions',
    },
]

const quickActions = [
    { label: 'Add Player', href: '/admin/collections/players/create', icon: <IconPlus /> },
    { label: 'Add Coach', href: '/admin/collections/coaches/create', icon: <IconPlus /> },
    { label: 'New Announcement', href: '/admin/collections/announcements/create', icon: <IconPlus /> },
    { label: 'Upload to Gallery', href: '/admin/collections/gallery/create', icon: <IconPlus /> },
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: easing
        }
    }
}

const DashboardWidgets: React.FC = () => {
    const [mounted, setMounted] = useState(false)
    const [stats, setStats] = useState<StatData[]>(defaultStats)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const fetchCounts = async () => {
            const controller = new AbortController()
            const timeout = setTimeout(() => controller.abort(), 5000)
            try {
                const collections = ['players', 'coaches', 'matches', 'contact-submissions']
                const results = await Promise.all(
                    collections.map(async (slug) => {
                        try {
                            const res = await fetch(`/api/payload/${slug}?limit=0`, {
                                credentials: 'include',
                                signal: controller.signal,
                            })
                            const json = await res.json()
                            return json.totalDocs ?? 0
                        } catch {
                            return 0
                        }
                    })
                )
                setStats(prev => prev.map((s, i) => ({
                    ...s,
                    value: results[i],
                    change: `${results[i]} total`,
                })))
            } catch {
                // Keep default values on failure
            } finally {
                clearTimeout(timeout)
            }
        }
        fetchCounts()
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <motion.div
            className="mcfc-widgets"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Welcome Banner */}
            <motion.div className="mcfc-welcome" variants={itemVariants}>
                <div className="mcfc-welcome__content">
                    <h2 className="mcfc-welcome__title">Welcome to MCFC HQ</h2>
                    <p className="mcfc-welcome__text">
                        Manage your academy, track players, and keep the club running at peak performance.
                    </p>
                </div>
                <div className="mcfc-welcome__badge">
                    <span>⚽</span>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div className="mcfc-stats" variants={containerVariants}>
                {stats.map((stat) => (
                    <motion.a
                        key={stat.label}
                        href={stat.href}
                        className="mcfc-stat-card"
                        variants={itemVariants}
                        whileHover={{
                            y: -4,
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="mcfc-stat-card__icon">{stat.icon}</div>
                        <div className="mcfc-stat-card__data">
                            <div className="mcfc-stat-card__value">{stat.value}</div>
                            <div className="mcfc-stat-card__label">{stat.label}</div>
                        </div>
                        {stat.change && (
                            <div className={`mcfc-stat-card__change ${stat.changeUp ? 'up' : 'down'}`}>
                                {stat.changeUp ? <TrendUp /> : <TrendDown />}
                                <span>{stat.change}</span>
                            </div>
                        )}
                    </motion.a>
                ))}
            </motion.div>

            {/* Quick Actions */}
            <motion.div className="mcfc-quick-actions" variants={itemVariants}>
                <h3 className="mcfc-quick-actions__title">Quick Actions</h3>
                <motion.div className="mcfc-quick-actions__grid" variants={containerVariants}>
                    {quickActions.map((action) => (
                        <motion.a
                            key={action.label}
                            href={action.href}
                            className="mcfc-action-btn"
                            variants={itemVariants}
                            whileHover={{
                                x: 4,
                                backgroundColor: 'rgba(30, 41, 59, 0.6)',
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {action.icon}
                            <span>{action.label}</span>
                            <IconArrowRight />
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default DashboardWidgets
