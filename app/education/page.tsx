import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-6">Education and Awards</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold">PhD: U.C. Irvine</h3>
            <p className="font-medium">Doctor of Philosophy in Environmental Health Science and Policy, 2001</p>
            <p className="mt-2 font-medium">
              A multidisciplinary dissertation with an epidemiology study and economic impact analysis, titled:
              Health and Economic Impacts of Coastal Water Pollution in North Orange County, California.
            </p>
            <p className="mt-2 font-medium">
              Three peer reviewed publications resulted from the research, and other investigations and
              publications in the field were inspired by the research. Several media articles were generated
              about my dissertation research, and I was interviewed on National Public Radio.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">BA: U.C. San Diego</h3>
            <p className="font-medium">Bachelor of Arts in Biology, 1988</p>
            <p className="font-medium">Minors in Organic Chemistry and U.S. History</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Awards, Postdoctoral Position, and Fellowships</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li className="font-medium">Trident University International (2017) - Teaching Excellence Award</li>
            <li className="font-medium">U.C. Riverside, Department of Environmental Sciences (2009) - Postdoctoral Researcher for Dr. Linda Fernandez</li>
            <li className="font-medium">U.C. Irvine, School of Social Ecology (2001) - Research Fellowship</li>
            <li className="font-medium">U.C. Irvine, School of Social Ecology (2000) - Regents Dissertation Fellowship</li>
            <li className="font-medium">U.C. Santa Barbara, UC Toxic Substances Research and Teaching Program (1998) - Fellowship Recipient</li>
            <li className="font-medium">U.C. Santa Barbara, UC Toxic Substances Research and Teaching Program (1997) - Fellowship Recipient</li>
            <li className="font-medium">Smithsonian Institution (1993) - Certificate for Exceptional Service</li>
            <li className="font-medium">Smithsonian Institution (1992) - Certificate for Exceptional Service</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

