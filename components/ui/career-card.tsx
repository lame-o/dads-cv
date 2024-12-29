"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { BlurFade } from "./blur-fade"

type CareerCardProps = {
  title: string
  company: string
  position: string
  period: string
  responsibilities: string[]
  imageUrl?: string
}

export function CareerCard({
  title,
  company,
  position,
  period,
  responsibilities,
  imageUrl
}: CareerCardProps) {
  return (
    <BlurFade>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <CardDescription className="text-xl">{company}</CardDescription>
          </div>
          <div className="h-16 w-16 rounded-full bg-gray-100 border-2 border-gray-200 overflow-hidden flex items-center justify-center">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={`${title} logo`}
                width={64}
                height={64}
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold text-blue-600 mb-1">{position}</h3>
          <p className="text-gray-600 mb-4">{period}</p>
          <ul className="space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-blue-600 flex-shrink-0">→</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </BlurFade>
  )
}
