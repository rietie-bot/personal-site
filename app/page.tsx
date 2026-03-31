'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { TextEffect } from '@/components/ui/text-effect'
import { EVENT, HIGHLIGHTS, SCHEDULE, SPEAKERS } from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function MagneticButton({
  children,
  link,
  primary = false,
}: {
  children: React.ReactNode
  link: string
  primary?: boolean
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-colors duration-200 ${
          primary
            ? 'bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300'
            : 'bg-zinc-100 text-black hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700'
        }`}
      >
        {children}
      </a>
    </Magnetic>
  )
}

export default function EventPage() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Hero */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="text-center"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          Happening today
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          {EVENT.title}
        </h1>
        <TextEffect
          as="p"
          preset="fade"
          per="word"
          className="mb-8 text-xl text-zinc-500 dark:text-zinc-400"
          delay={0.3}
        >
          {EVENT.subtitle}
        </TextEffect>
        <div className="mb-8 flex flex-col items-center gap-2 text-zinc-600 dark:text-zinc-400">
          <p className="text-lg">
            📅 <strong>{EVENT.date}</strong> · {EVENT.time}
          </p>
          <p className="text-lg">
            📍 <strong>{EVENT.venue}</strong>
          </p>
          <p className="text-base text-zinc-500">{EVENT.address}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <MagneticButton link={EVENT.lumaLink} primary>
            Register on Luma →
          </MagneticButton>
          <MagneticButton link={`https://maps.google.com/?q=${encodeURIComponent(EVENT.address + ', Hamburg')}`}>
            Get Directions
          </MagneticButton>
        </div>
      </motion.section>

      {/* What to Expect */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">What to Expect</h2>
        <div className="grid gap-3">
          {HIGHLIGHTS.map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <p className="text-zinc-700 dark:text-zinc-300">
                  <span className="mr-2">✓</span>
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Schedule */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Schedule</h2>
        <div className="space-y-1">
          {SCHEDULE.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative flex h-full w-full gap-4 rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <span className="shrink-0 font-mono text-sm text-zinc-400 dark:text-zinc-500 pt-0.5">
                  {item.time}
                </span>
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</h4>
                  {item.description && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Hosts */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Hosted by {EVENT.hostedBy}</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {SPEAKERS.map((speaker) => (
            <div
              key={speaker.id}
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 text-center dark:bg-zinc-950">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{speaker.name}</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* About OpenClaw */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">What is OpenClaw?</h2>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          OpenClaw is building the infrastructure for personal AI agents. Think of it as your own AI
          assistant that connects to the tools you already use — email, calendar, code, messaging —
          and actually helps you get things done. This is where early adopters and complete beginners
          sit at the same table and figure out what&apos;s actually worth using.
        </p>
      </motion.section>

      {/* Bottom CTA */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="text-center pb-8"
      >
        <p className="mb-6 text-xl text-zinc-600 dark:text-zinc-400">
          Bring your laptop. Bring your curiosity. That&apos;s it.
        </p>
        <MagneticButton link={EVENT.lumaLink} primary>
          Register Now →
        </MagneticButton>
      </motion.section>
    </motion.main>
  )
}
