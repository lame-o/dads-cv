import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/buttons'
import { ArrowUpRight } from 'lucide-react'
import { Linkedin } from 'lucide-react' 
import { LifeBuoy } from 'lucide-react'
import { Waves } from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'
import { FadeText } from '@/components/ui/fade-text'
import { FadeListItem } from '@/components/ui/fade-list-item'
import TypingAnimation from "@/components/ui/typing-animation"

export default function Home() {
  return (
    <div className="space-y-8">
      <BlurFade delay={0.25} inView>
        <Card className="overflow-hidden">
          <CardContent className="p-6 sm:p-8 flex flex-col md:flex-row items-center justify-center text-center">
            <div className="md:w-1/3 md:pl-0">
              <Image
                src="/images/ryan-dwight.jpg"
                alt="Ryan H. Dwight"
                width={300}
                height={300}
                className="rounded-full shadow-lg border-4 border-black mx-auto"
              />
            </div>
            <div className="md:w-2/3 flex flex-col items-center">
              <h1 className="text-6xl font-bold mb-6">Ryan H. Dwight, PhD</h1>
              <p className="mb-8 text-2xl font-medium">Huntington Beach, California 🌴</p>
              <div className="mb-8 flex flex-wrap gap-6 justify-center">
                <Button 
                  asChild 
                  variant="outline" 
                  effect="expandIcon" 
                  icon={Linkedin} 
                  iconPlacement="right"
                  className="rounded-full bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100 hover:border-blue-300 hover:text-blue-600 text-sm py-3 px-5"
                >
                  <Link href="https://linkedin.com/in/ryan-dwight-04155429">LinkedIn</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  effect="expandIcon" 
                  icon={LifeBuoy} 
                  iconPlacement="right"
                  className="rounded-full bg-blue-50 border-orange-200 text-orange-600 hover:bg-orange-100 hover:border-orange-300 hover:text-orange-600 text-sm py-3 px-5"
                >
                  <Link href="https://www.graduateresearchcoach.com/">Graduate Research Coach</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  effect="expandIcon" 
                  icon={Waves} 
                  iconPlacement="right"
                  className="rounded-full bg-blue-50 border-teal-200 text-teal-600 hover:bg-teal-100 hover:border-teal-300 hover:text-teal-600 text-sm py-3 px-5"
                >
                  <Link href="https://coastalwaterresearch.com/">Coastal Water Research Group</Link>
                </Button>
              </div>
              <TypingAnimation className="mb-4 text-5xl" delay={100} duration={200}>Welcome!</TypingAnimation>
            </div>
          </CardContent>
        </Card>
      </BlurFade>

      <BlurFade delay={0.5} inView>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                {
                  text: <>I am a <span className="text-blue-600 font-bold">leading researcher</span> and academic in the wide field of environmental health sciences.</>,
                  delay: 0.1
                },
                {
                  text: <>My career path has traveled through the <span className="text-blue-600 font-bold">private sector</span>, <span className="text-blue-600 font-bold">academia</span>, and the <span className="text-blue-600 font-bold">federal government</span>.</>,
                  delay: 0.15
                },
                {
                  text: <>I am an <span className="text-blue-600 font-bold">experienced manager, scientific researcher, analytical thinker, educator, and critical problem solver.</span> I see the big-picture, while also being detail oriented to accomplish the mission.</>,
                  delay: 0.2
                },
                {
                  text: <>I have supervised <span className="text-blue-600 font-bold">dozens of faculty</span> and <span className="text-blue-600 font-bold">hundreds of students</span>, developed research programs, conceived new approaches, conducted marketing, and produced and presented budgets and reports.</>,
                  delay: 0.4
                },
                {
                  text: <>I have successfully coordinated complex multidisciplinary scientific investigations, and have been <span className="text-blue-600 font-bold">Principal Investigator</span> or co-author on <span className="font-bold">sixteen research articles</span> that are published in peer-reviewed scientific journals. Several media articles were generated about my research, and I was interviewed on <span className="text-blue-600 font-bold">National Public Radio</span>.</>,
                  delay: 0.6
                },
                {
                  text: <><span className="text-blue-600 font-bold">Twenty times</span> I have presented my research at state and national scientific conferences.</>,
                  delay: 0.8
                },
                {
                  text: <>I earned <span className="text-blue-600 font-bold">Postdoctoral</span> and <span className="text-blue-600 font-bold">Fellowship</span> positions, and was awarded for excellence in teaching and service at different institutions.</>,
                  delay: 1.0
                },
                {
                  text: <>I am a <span className="text-blue-600 font-bold">clear communicator</span>, and am comfortable working with high-ranking officials, analysts, economists, statisticians, scientists, executives, staff and students. I work well with everyone who wants to move the ball forward.</>,
                  delay: 1.2
                },
                {
                  text: <>I am computer literate, proficient with <span className="text-blue-600 font-bold">MS Office</span> and video conferencing. I am also proficient conducting quantitative statistical analyses with the applications <span className="text-blue-600 font-bold">Excel</span>, <span className="text-blue-600 font-bold">R</span>, <span className="text-blue-600 font-bold">SPSS</span> and <span className="text-blue-600 font-bold">Intellectus</span>.</>,
                  delay: 1.4
                }
              ].map((item, i) => (
                <li key={i}>
                  <FadeListItem delay={item.delay} className="font-medium">
                    <div className="flex gap-3">
                      <span className="text-blue-600 flex-shrink-0">→</span>
                      <span>{item.text}</span>
                    </div>
                  </FadeListItem>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  )
}
