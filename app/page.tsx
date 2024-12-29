import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/buttons'
import { ArrowUpRight } from 'lucide-react'
import {Linkedin} from 'lucide-react' 
import {LifeBuoy} from 'lucide-react'
import {Waves} from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'

export default function Home() {
  return (
    <div className="space-y-8">
      <BlurFade delay={0.25} inView>
        <Card className="overflow-hidden">
          <CardContent className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <Image
                src="/placeholder.svg"
                alt="Ryan H. Dwight"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">Ryan H. Dwight, PhD</h1>
              <p className="mb-2 font-medium">Huntington Beach, California 🌴</p>
              <div className="mb-4 flex flex-wrap gap-3">
                <Button 
                  asChild 
                  variant="outline" 
                  effect="expandIcon" 
                  icon={Linkedin} 
                  iconPlacement="right"
                  className="rounded-full bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100 hover:border-blue-300"
                >
                  <Link href="https://linkedin.com/in/ryan-dwight-04155429">LinkedIn</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  effect="expandIcon" 
                  icon={LifeBuoy} 
                  iconPlacement="right"
                  className="rounded-full bg-orange-50 border-orange-200 text-orange-600 hover:bg-orange-100 hover:border-orange-300"
                >
                  <Link href="https://www.graduateresearchcoach.com/">Graduate Research Coach</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  effect="expandIcon" 
                  icon={Waves} 
                  iconPlacement="right"
                  className="rounded-full bg-teal-50 border-teal-200 text-teal-600 hover:bg-teal-100 hover:border-teal-300"
                >
                  <Link href="https://coastalwaterresearch.com/">Coastal Water Research Group</Link>
                </Button>
              </div>
              <p className="mb-4 font-medium">Greetings, thank you for visiting. 👋</p>
              <p className="mb-4 font-medium">For my introduction, I have been a leading researcher and academic in the environmental health sciences. My career path has traveled through the private sector, academia, and the Federal government.</p>
            </div>
          </CardContent>
        </Card>
      </BlurFade>

      <BlurFade delay={0.5} inView>
        <Card>
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li className="font-medium">I am an experienced manager, scientific researcher, analytical thinker, educator, and critical problem solver. I see the big-picture, while also being detail oriented to accomplish the mission.</li>
              <li className="font-medium">I have supervised dozens of faculty and hundreds of students, developed research programs, conceived new approaches, conducted marketing, and produced and presented budgets and reports.</li>
              <li className="font-medium">I have successfully coordinated complex multidisciplinary scientific investigations, and have been Principal Investigator or co-author on sixteen research articles that are published in peer-reviewed scientific journals. Several media articles were generated about my research, and I was interviewed on National Public Radio.</li>
              <li className="font-medium">Twenty times I have presented my research at state and national scientific conferences.</li>
              <li className="font-medium">I earned Postdoctoral and Fellowship positions, and was awarded for excellence in teaching and service at different institutions.</li>
              <li className="font-medium">I am a clear communicator, and am comfortable working with high-ranking officials, analysts, economists, statisticians, scientists, executives, staff and students. I work well with everyone who wants to move the ball forward.</li>
              <li className="font-medium">I am computer literate, proficient with MS Office and video conferencing. I am also proficient conducting quantitative statistical analyses with the applications Excel, R, SPSS and Intellectus.</li>
            </ul>
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  )
}
