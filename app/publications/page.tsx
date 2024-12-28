"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeText } from '@/components/ui/fade-text'

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
    <div className="space-y-6">
      <FadeText 
        text="Publications"
        className="text-4xl font-bold mb-6"
        direction="up"
      />
      <Card>
        <CardHeader>
        </CardHeader>
        <CardContent>
          <ul className="space-y-6">
            {publications.map((pub, index) => (
              <li key={index} className="border-b pb-4 last:border-b-0 font-medium">
                <p className="font-bold text-indigo-600 text-lg">{pub.authors} ({pub.year})</p>
                <p className="italic text-base">{pub.title}</p>
                {pub.journal && (
                  <p className="text-base text-gray-700">
                    {pub.journal}
                    {pub.volume && `, ${pub.volume}`}
                    {pub.pages && `: ${pub.pages}`}
                  </p>
                )}
                {pub.note && <p className="text-base text-gray-700">{pub.note}</p>}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Reviewer for Scientific Journals</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li className="font-medium">American Journal of Public Health</li>
            <li className="font-medium">Ocean and Coastal Management</li>
            <li className="font-medium">Water Research</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
