import { useCallback, useEffect, useState } from 'react'
import Particles from '@tsparticles/react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const options = {
  fullScreen: { enable: false },
  background: {
    color: { value: 'transparent' },
  },
  particles: {
    number: {
      value: 80,
      density: { enable: true, width: 800, height: 600 },
    },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: {
      value: { min: 0.2, max: 0.6 },
    },
    size: {
      value: { min: 1, max: 2.5 },
    },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.08,
      direction: 'none',
      random: true,
      outModes: { default: 'out' },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onHover: { enable: true, mode: 'grab' },
      onClick: { enable: false },
    },
    modes: {
      grab: {
        distance: 120,
        links: { enable: false },
      },
    },
  },
  fpsLimit: 30,
  detectRetina: true,
}

export default function ParticlesBackground({ className = '' }) {
  const [init, setInit] = useState(false)

  const initEngine = useCallback(async () => {
    await initParticlesEngine((engine) => loadSlim(engine))
    setInit(true)
  }, [])

  useEffect(() => {
    initEngine()
  }, [initEngine])

  if (!init) return <div className={className} aria-hidden />

  return (
    <Particles
      id="page-particles"
      className={className}
      options={options}
      style={{ position: 'absolute', inset: 0 }}
    />
  )
}
