"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeText } from '@/components/ui/fade-text'
import { FadeListItem } from '@/components/ui/fade-list-item'

export default function Publications() {
  const publications = [
    {
      authors: "Utley, J., T.M. Clobes, P.H. Rhynders, R.H. Dwight",
      year: "in review",
      title: "Hematology Test Results as a Predictor of COVID-19 Infection: An Epidemiological Cohort Study Using 2020 Brazilian Hospital Data"
    },
    {
      authors: "Dwight, R.H., S.N. Catlin, L.M. Fernandez",
      year: "2012",
      title: "Amounts and distribution of recreational beach expenditures in southern California",
      journal: "Ocean and Coastal Management",
      volume: "59",
      pages: "13-19"
    },
    {
      authors: "Dwight, R.H., J.S. Caplan, M.V. Brinks, S.N. Catlin, G. Buescher, J.C. Semenza",
      year: "2011",
      title: "Impacts of variable precipitation on coastal water quality in southern California",
      journal: "Water Environment Research",
      volume: "83(12)",
      pages: "2121-2130"
    },
    {
      authors: "Brinks, M.V., R.H. Dwight, J.C. Semenza",
      year: "2009",
      title: "Response to Editorial on \"Risk of recreational water use in southern California\"",
      journal: "Archives of Environmental and Occupational Health",
      volume: "64(3)",
      pages: "145-147"
    },
    {
      authors: "Brinks, M.V., R.H. Dwight, D. Turbow, G. SharavanaKumar, J.C. Semenza",
      year: "2009",
      title: "Health risk of bathing in southern California coastal waters",
      journal: "Archives of Environmental and Occupational Health",
      volume: "63(3)",
      pages: "123-135"
    },
    {
      authors: "Dwight, R.H., M.V. Brinks, G. SharavanaKumar, J.C. Semenza",
      year: "2007",
      title: "Beach attendance and bathing rates for southern California beaches",
      journal: "Ocean and Coastal Management",
      volume: "50",
      pages: "847-858"
    },
    {
      authors: "Dwight, R.H, J.C. Semenza",
      year: "2006",
      title: "Comment on \"Coastal water quality impact of stormwater runoff from an urbanized watershed in southern California\"",
      journal: "Environmental Science and Technology"
    },
    {
      authors: "Dwight, R.H., L.M. Fernandez, D.B. Baker, J.C. Semenza, B.H. Olson",
      year: "2005",
      title: "Estimating the economic burden from illnesses associated with recreational coastal water pollution – a case study in Orange County, California",
      journal: "Journal of Environmental Management",
      volume: "76(2)",
      pages: "95-103"
    },
    {
      authors: "Dwight, R.H., D.B. Baker, J.C. Semenza, B.H. Olson",
      year: "2004",
      title: "Health effects associated with recreational coastal water use in urban vs. rural California",
      journal: "American Journal of Public Health",
      volume: "94(4)",
      pages: "565-567"
    },
    {
      authors: "Dwight, R.H., J.C. Semenza, D.B. Baker, B.H. Olson",
      year: "2002",
      title: "Association of urban runoff with coastal water quality in Orange County, California",
      journal: "Water Environment Research",
      volume: "74(1)",
      pages: "82-90"
    },
    {
      authors: "Dwight, R.H.",
      year: "2001",
      title: "Health and Economic Impacts of Coastal Water Pollution in North Orange County, California: A Multi-disciplinary Analysis",
      journal: "UMI Dissertation Services, Michigan",
      note: "UMI#: 3029237"
    },
    {
      authors: "Trischman, J., D. Tapiolas, P.R. Jensen, R.H. Dwight, W.H. Fenical",
      year: "1994",
      title: "Salinamides A & B: Anti-inflammatory depsipeptides from marine Streptomycete",
      journal: "Journal of the American Chemical Society",
      volume: "116(2)",
      pages: "757-758"
    },
    {
      authors: "Pathirana, C., P.R. Jensen, R.H. Dwight, W.H. Fenical",
      year: "1992",
      title: "Rare Phenazine L-Quinovose esters from a marine Actinomycete",
      journal: "Journal of Organic Chemistry",
      volume: "57(2)",
      pages: "740-742"
    },
    {
      authors: "Pathirana, C., R.H. Dwight, P.R. Jensen, W.H. Fenical",
      year: "1991",
      title: "Structure and synthesis of a new Butanolide from a marine Actinomycete",
      journal: "Tetrahedron Letters",
      volume: "32(48)",
      pages: "7001-7004"
    },
    {
      authors: "Pathirana, C., D. Tapiolas, P.R. Jensen, R.H. Dwight, W.H. Fenical",
      year: "1991",
      title: "Structure determination of Maduralied: A new 24-member ring macrolide glycoside produced by a marine bacterium (Actinomycetales)",
      journal: "Tetrahedron Letters",
      volume: "32(21)",
      pages: "2323-2326"
    },
    {
      authors: "Lovejoy, T.E. and R.H. Dwight",
      year: "1991",
      title: "Biological diversity and Neptune's realm",
      journal: "Marine Technology Society Journal",
      volume: "25(4)",
      pages: "7-12"
    },
    {
      authors: "Jensen, P.R., R.H. Dwight, W.H. Fenical",
      year: "1991",
      title: "Distribution of Actinomycetes in near-shore tropical marine sediments",
      journal: "Applied and Environmental Microbiology",
      volume: "57(4)",
      pages: "1102-1108"
    }
  ];

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
              text="Publications"
              className="text-4xl font-bold text-black tracking-tight"
              direction="up"
            />
          </div>
        </div>
        <Card className="relative z-0 py-4 bg-white">
          <CardContent className="space-y-4">
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <FadeListItem key={index} delay={index * 0.1}>
                  <div className="pb-2 font-medium">
                    <p className="text-base">{pub.authors} ({pub.year})</p>
                    <p className="italic font-semibold text-lg text-indigo-600">
                      {pub.title === "Impacts of variable precipitation on coastal water quality in southern California" ? (
                        <a 
                          href="https://coastalwaterresearch.com/documents/Paper_2011_Climate_Water_Quality.pdf"
                          className="underline hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.title === "Amounts and distribution of recreational beach expenditures in southern California" ? (
                        <a 
                          href="https://coastalwaterresearch.com/documents/Paper_2012_Beach_Economics.pdf"
                          className="underline hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.title === "Response to Editorial on \"Risk of recreational water use in southern California\"" ? (
                        <a 
                          href="https://coastalwaterresearch.com/documents/Paper_2009_Response_to_Rebuttal_Editorial.pdf"
                          className="underline hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.title === "Health risk of bathing in southern California coastal waters" ? (
                        <a 
                          href="https://coastalwaterresearch.com/documents/Paper_2008_Health_Risk_Bathing_in_SoCal.pdf"
                          className="underline hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.title === "Beach attendance and bathing rates for southern California beaches" ? (
                        <a 
                          href="https://coastalwaterresearch.com/documents/Paper_2007_Beach_Attendance.pdf"
                          className="underline hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.title === "Comment on \"Coastal water quality impact of stormwater runoff from an urbanized watershed in southern California\"" ? (
                        <a 
                          href="https://coastalwaterresearch.com/documents/Paper_2006_Comment_on_Anh_Paper.pdf"
                          className="underline hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.title === "Estimating the economic burden from illnesses associated with recreational coastal water pollution – a case study in Orange County, California" ? (
                        <a 
                          href="https://coastalwaterresearch.com/documents/Paper_2005_Est_Economic_Burden.pdf"
                          className="underline hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.title === "Health effects associated with recreational coastal water use in urban vs. rural California" ? (
                        <a 
                          href="https://coastalwaterresearch.com/documents/Paper_2004_Health_Effects_Assoc_w_CW.pdf"
                          className="underline hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.title === "Association of urban runoff with coastal water quality in Orange County, California" ? (
                        <a 
                          href="https://coastalwaterresearch.com/documents/Paper_2002_Assoc_Urban_Runoff_w_CWQ.pdf"
                          className="underline hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.title === "Health and Economic Impacts of Coastal Water Pollution in North Orange County, California: A Multi-disciplinary Analysis" ? (
                        <a 
                          href="https://coastalwaterresearch.com/documents/Paper_2001_Dissertation.pdf"
                          className="underline hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.title === "Salinamides A & B: Anti-inflammatory depsipeptides from marine Streptomycete" ? (
                        <a 
                          href="https://coastalwaterresearch.com/documents/Paper_1994_Salinamides_A_B.pdf"
                          className="underline hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.title === "Rare Phenazine L-Quinovose esters from a marine Actinomycete" ? (
                        <a 
                          href="https://coastalwaterresearch.com/documents/Paper_1992_Rare_Phenazine_L-Quinovose_esters.pdf"
                          className="underline hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.title === "Structure and synthesis of a new Butanolide from a marine Actinomycete" ? (
                        <a 
                          href="https://coastalwaterresearch.com/documents/Paper_1991_Structure_and_Synthesis_of_new_Butanolide.pdf"
                          className="underline hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.title === "Structure determination of Maduralied: A new 24-member ring macrolide glycoside produced by a marine bacterium (Actinomycetales)" ? (
                        <a 
                          href="https://coastalwaterresearch.com/documents/Paper_1991_Structureal_determination_of_Maduralide.pdf"
                          className="underline hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.title === "Biological diversity and Neptune's realm" ? (
                        <a 
                          href="https://coastalwaterresearch.com/documents/Paper_1992_Biodiv_in_Neptune_Realm.pdf"
                          className="underline hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.title === "Distribution of Actinomycetes in near-shore tropical marine sediments" ? (
                        <a 
                          href="https://coastalwaterresearch.com/documents/Paper_1991_Distribution_of_Actino.pdf"
                          className="underline hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : pub.title}
                    </p>
                    {pub.journal && (
                      <p className="text-base text-gray-700">
                        {pub.journal}
                        {pub.volume && `, ${pub.volume}`}
                        {pub.pages && `: ${pub.pages}`}
                      </p>
                    )}
                    {pub.note && <p className="text-base text-gray-700">{pub.note}</p>}
                    {index < publications.length - 1 && (
                      <hr className="mt-4 border-gray-400" />
                    )}
                  </div>
                </FadeListItem>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Reviewer for Scientific Journals</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <FadeListItem delay={0.1}>
                <li className="font-medium">American Journal of Public Health</li>
              </FadeListItem>
              <FadeListItem delay={0.2}>
                <li className="font-medium">Ocean and Coastal Management</li>
              </FadeListItem>
              <FadeListItem delay={0.3}>
                <li className="font-medium">Water Research</li>
              </FadeListItem>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
