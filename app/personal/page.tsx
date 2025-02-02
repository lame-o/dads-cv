"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeText } from '@/components/ui/fade-text'
import { BlurFade } from '@/components/ui/blur-fade'
import { FadeListItem } from '@/components/ui/fade-list-item'

export default function Personal() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="relative mt-16">
        <div className="-translate-x-8 translate-y-2.5 absolute z-10 bottom-full left-8 bg-white px-16 py-4" 
          style={{ 
            width: 'fit-content',
            clipPath: 'polygon(40px 0%, calc(100% - 40px) 0%, 100% 100%, 0% 100%)'
          }}>
          <div className="absolute inset-[11px] bg-[#d4d4d4]"
            style={{
              clipPath: 'polygon(36px 0%, calc(100% - 36px) 0%, 98% 100%, 2% 100%)'
            }}>
          </div>
          <div className="relative">
            <FadeText 
              text="Personal Interests"
              className="text-4xl font-bold text-black tracking-tight"
              direction="up"
            />
          </div>
        </div>
        <BlurFade>
          <Card className="relative z-0 py-4 bg-white">
            <CardContent className="space-y-4">
              <p className="mb-4 font-medium text-base">
                From the Myers–Briggs Personality Test, I am a Sigma INTJ, supposedly very rare. I do strive to live in a
                constant state of learning, from politics, science, religion, art, history, and philosophy, to the more
                mundane tasks of cooking, gardening and home repair hacks. I navigate life with a clear moral compass,
                and strong intuition. I drink from life with a glass half-full perspective, and I always pursue a better
                tomorrow for all.
              </p>
              <ul className="list-disc list-inside space-y-2 font-medium text-base">
                {[
                  "I am the proud father of three adult children (one who built this site).",
                  "I enjoy travel and have explored many parts of the world, yet the bucket list only gets longer the more I dream.",
                  "I enjoy outdoor sports such as surfing, skiing, volleyball, diving, camping, fishing, gardening.",
                  "I enjoy hobbies such as collecting vinyl records, photography, cooking, and a good game of dominoes.",
                  "I am an animal person who enjoys the company of both cats and dogs."
                ].map((item, index) => (
                  <FadeListItem key={index} delay={0.2 * (index + 1)}>
                    <li>{item}</li>
                  </FadeListItem>
                ))}
              </ul>
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </div>
  )
}
