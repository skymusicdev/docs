import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image src="/images/logo.png" width={24} height={24} alt="Logo" />
      <span style={{ marginLeft: '.4em' }}>
        SkyMusic Docs
      </span>
    </>
  ),
  head: (
    <>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </>
  ),
  project: {
    link: 'https://github.com/skymusicdev',
  },
  chat: {
    link: 'https://discord.gg/t26PH4hDFq',
  },
  docsRepositoryBase: 'https://github.com/skymusicdev/app',
  primaryHue: 142,
  banner: {
    key: 'beta-waitlist',
    text: (
      <a href="https://skymusic.app/" target="_blank">
        🚀 Join SkyMusic beta waitlist. Read more →
      </a>
    )
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://skymusic.app/" target="_blank">
          SkyMusic
        </a>
        .
      </span>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – SkyMusic Docs'
    }
  }
}

export default config
