"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeText } from '@/components/ui/fade-text'

export default function Personal() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <FadeText 
        text="Personal Interests"
        className="text-4xl font-bold mb-6"
        direction="up"
      />
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 font-medium text-base">
            From the Myers–Briggs Personality Test, I am a Sigma INTJ, supposedly very rare. I do strive to live in a
            constant state of learning, from politics, science, religion, art, history, and philosophy, to the more
            mundane tasks of cooking, gardening and home repair hacks. I navigate life with a clear moral compass,
            and strong intuition. I drink from life with a glass half-full perspective, and I always pursue a better
            tomorrow for all.
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-base">
            <li>I am the proud father of three adult children (one who built this site).</li>
            <li>I enjoy travel and have explored many parts of the world, yet the bucket list only gets longer the more I dream.</li>
            <li>I enjoy outdoor sports such as surfing, skiing, volleyball, diving, camping, fishing, gardening.</li>
            <li>I enjoy hobbies such as collecting vinyl records, photography, cooking, and a good game of dominoes.</li>
            <li>I am an animal person who enjoys the company of both cats and dogs.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
