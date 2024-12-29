"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeText } from '@/components/ui/fade-text'
import { BlurFade } from '@/components/ui/blur-fade'
import { FadeListItem } from '@/components/ui/fade-list-item'

export default function Education() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <FadeText 
        text="Education and Awards"
        className="text-4xl font-bold mb-6"
        direction="up"
      />
      
      <BlurFade>
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              {[
                {
                  title: "PhD: U.C. Irvine",
                  subtitle: "Doctor of Philosophy in Environmental Health Science and Policy, 2001",
                  description: [
                    "A multidisciplinary dissertation with an epidemiology study and economic impact analysis, titled:",
                    "Health and Economic Impacts of Coastal Water Pollution in North Orange County, California.",
                    "Three peer reviewed publications resulted from the research, and other investigations and publications in the field were inspired by the research. Several media articles were generated about my dissertation research, and I was interviewed on National Public Radio."
                  ]
                },
                {
                  title: "BA: U.C. San Diego",
                  subtitle: "Bachelor of Arts in Biology, 1988",
                  description: ["Minors in Organic Chemistry and U.S. History"]
                }
              ].map((education, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold">{education.title}</h3>
                  <p className="font-medium">{education.subtitle}</p>
                  {education.description.map((text, i) => (
                    <p key={i} className="mt-2 font-medium">{text}</p>
                  ))}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </BlurFade>

      <BlurFade delay={0.25}>
        <Card>
          <CardHeader>
            <CardTitle>Awards, Postdoctoral Position, and Fellowships</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {[
                {
                  text: "Trident University International (2017) - Teaching Excellence Award",
                  delay: 0.2
                },
                {
                  text: "U.C. Riverside, Department of Environmental Sciences (2009) - Postdoctoral Researcher for Dr. Linda Fernandez",
                  delay: 0.4
                },
                {
                  text: "U.C. Irvine, School of Social Ecology (2001) - Research Fellowship",
                  delay: 0.6
                },
                {
                  text: "U.C. Irvine, School of Social Ecology (2000) - Regents Dissertation Fellowship",
                  delay: 0.8
                },
                {
                  text: "U.C. Santa Barbara, UC Toxic Substances Research and Teaching Program (1998) - Fellowship Recipient",
                  delay: 1.0
                },
                {
                  text: "U.C. Santa Barbara, UC Toxic Substances Research and Teaching Program (1997) - Fellowship Recipient",
                  delay: 1.2
                },
                {
                  text: "Smithsonian Institution (1993) - Certificate for Exceptional Service",
                  delay: 1.4
                },
                {
                  text: "Smithsonian Institution (1992) - Certificate for Exceptional Service",
                  delay: 1.6
                }
              ].map((award, index) => (
                <FadeListItem key={index} delay={award.delay}>
                  <li className="font-medium">{award.text}</li>
                </FadeListItem>
              ))}
            </ul>
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  )
}
