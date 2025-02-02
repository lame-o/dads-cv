"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeText } from '@/components/ui/fade-text'
import { BlurFade } from '@/components/ui/blur-fade'
import { FadeListItem } from '@/components/ui/fade-list-item'
import Image from 'next/image'

export default function Education() {
  const education = [
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
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={`${edu.title}-${edu.subtitle}`} className={`relative ${index === 0 ? 'mt-16' : ''}`}>
            {index === 0 && (
              <div className="-translate-x-8 translate-y-2.5 absolute z-10 bottom-full left-8 bg-white px-16 py-4" 
                style={{ 
                  width: 'fit-content',
                  clipPath: 'polygon(40px 0%, calc(100% - 40px) 0%, 100% 100%, 0% 100%)'
                }}>
                <div className="absolute inset-[11px] bg-[#d4d4d4]"
                  style={{
                    clipPath: 'polygon(36px 0%, calc(100% - 36px) 0%, 98.5% 100%, 1.5% 100%)'
                  }}>
                </div>
                <div className="relative">
                  <FadeText 
                    text="Education and Awards"
                    className="text-4xl font-bold text-black tracking-tight"
                    direction="left"
                  />
                </div>
              </div>
            )}
            <BlurFade direction="right" inView inViewMargin="-100px">
              <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${index === 0 ? 'bg-white' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-3xl text-blue-600">{index === 0 ? "Education" : "Awards, Postdoctoral Position, and Fellowships"}</CardTitle>
                </CardHeader>
                <CardContent className={index === 0 ? "space-y-6" : ""}>
                  {index === 0 ? (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold">{edu.title}</h3>
                        <p className="font-medium">{edu.subtitle}</p>
                        {edu.description.map((text, i) => (
                          <p key={i} className="mt-2 font-medium">{text}</p>
                        ))}
                      </div>
                      <hr className="border-t-2 border-gray-300" />
                      <div>
                        <h3 className="text-2xl font-bold">BA: U.C. San Diego</h3>
                        <p className="font-medium">Bachelor of Arts in Biology, 1988</p>
                        <p className="mt-2 font-medium">Minors in Organic Chemistry and U.S. History</p>
                      </div>
                    </div>
                  ) : (
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
                  )}
                </CardContent>
              </Card>
            </BlurFade>
            {index === 0 && (
              <BlurFade delay={0.15}>
                <div className="max-w-3xl mx-auto w-full aspect-[16/9] relative mt-6">
                  <Image
                    src="/images/PhD-Graduate-Research-Coach.png"
                    alt="PhD Graduate Research Coach"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </BlurFade>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
