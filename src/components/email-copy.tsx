'use client'

import { useState } from 'react'

export function EmailCopy({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }).catch(() => {
        fallbackCopy()
      })
    } else {
      fallbackCopy()
    }
  }

  const fallbackCopy = () => {
    const textArea = document.createElement('textarea')
    textArea.value = email
    textArea.style.position = 'fixed'
    textArea.style.left = '-9999px'
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="hover:text-[#e5e5e5] transition-colors link-hover cursor-pointer w-[52px] text-left"
    >
      {copied ? 'copied!' : 'email'}
    </button>
  )
}
