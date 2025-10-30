"use client"

import type React from "react"

import { MeshGradientSVG } from "@/components/mesh-gradient-svg"
import { Mail, Instagram, Music } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#101010] flex items-center justify-center p-8 relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md relative z-10">
        <MeshGradientSVG />

        <div className="flex justify-center gap-8 mt-8">
          <a
            href="https://www.instagram.com/ghost_manila/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-red-500 transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="mailto:ghost.collective2025@gmail.com"
            className="text-white/60 hover:text-red-500 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://open.spotify.com/user/a619v1unxz54pordxv63jglj6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-red-500 transition-colors duration-200"
            aria-label="Spotify"
          >
            <Music size={24} />
          </a>
        </div>

        <div className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
          <h1 className="font-serif text-8xl md:text-8xl tracking-tight">Ghost.</h1>
        </div>

        <div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[14px] font-semibold text-white">
          <p>DAMN.</p>
          <p className=" opacity-60">There's a ghost in this room.</p>
        </div>
      </div>

    </div>
  )
}
