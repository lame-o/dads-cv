"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeText } from '@/components/ui/fade-text'

export default function Career() {
  const careerEntries = [
    {
      title: "Graduate Research Coach",
      company: "Huntington Beach, CA",
      position: "Principal Consultant",
      period: "2023 to present",
      responsibilities: [
        "Providing coaching and consulting services to graduate research students in the health, science, business, and education fields.",
        "Working with masters, doctorate, and PhD students, at all phases of research (proposal, research, write-up, defense, publication).",
        "Consulting services include coaching, scientific consulting, statistics, academic review, editing, writing-publication, and defense preparation."
      ]
    },
    {
      title: "Coastal Water Research Group",
      company: "Huntington Beach, CA",
      position: "Director",
      period: "2004 to present",
      responsibilities: [
        "Conducting multidisciplinary research focused on investigating the relationship between coastal water quality, and public health and economics.",
        "Scientific consulting, data analysis and professional writing services are provided.",
        "SME for the fields of public health, coastal water pollution and beach economics."
      ]
    },
    {
      title: "Trident University International",
      company: "Chandler, AZ",
      position: "Director of Doctoral Studies, College of Health and Human Services",
      period: "2018 to 2023",
      responsibilities: [
        "Managed two doctoral programs, PhD in Health Sciences, and Doctor of Health Administration.",
        "Instituted an organization structure that resulted in increased student retention and completion.",
        "Managed dozens of faculty, and oversaw and taught hundreds of graduate students in both programs.",
        "Developed several engaging graduate courses in public health sciences and epidemiology.",
        "Dissertation Committee Chair and Member for twenty-four PhD students covering a wide range of research topics in public health including COVID.",
        "Served on University committees including Institutional Review Board, Doctoral Council and Library Committee."
      ]
    },
    {
      title: "Trident University International",
      company: "Cypress, CA",
      position: "Faculty, College of Health and Human Services",
      period: "2010 to 2018",
      responsibilities: [
        "Professor for several doctoral, masters and undergraduate courses in health sciences.",
        "Developed six new courses in public health and epidemiology.",
        "Advised students on developing and executing doctoral research using quantitative analyses."
      ]
    },
    {
      title: "Gerontological Services, Inc.",
      company: "Santa Monica, CA",
      position: "Research Analyst",
      period: "1994 to 2015",
      responsibilities: [
        "Conducted market research by collecting data regarding the demand for levels of elder-care and retirement communities in different geographical locations.",
        "Performed statistical analysis of the data; Participated in generating surveys, presentation of results from analyses, and the preparation and review of final reports."
      ]
    },
    {
      title: "Dwight Law Group",
      company: "Irvine, CA",
      position: "Office Manager, Legal Assistant; Accounting",
      period: "2002 to 2012",
      responsibilities: [
        "Managed an intellectual property law firm; Oversaw business, marketing and financial accounts",
        "Managed the docket; Drafted and prepared court filings; Conducted legal research"
      ]
    },
    {
      title: "U.C. Irvine, Urban Water Research Center",
      company: "Irvine, CA",
      position: "Assistant Project Scientist",
      period: "2003 to 2005",
      responsibilities: [
        "Coordinated the leading researchers and stakeholders to examine perchlorate contamination in national drinking waters",
        "Prepared the final report for the California Department of Health Services"
      ]
    },
    {
      title: "U.C. Irvine, Department of Environmental Analysis and Design",
      company: "Irvine, CA",
      position: "Teaching Assistant",
      period: "1994 to 1997",
      responsibilities: [
        "Presented lectures and reviews for six U.C. Irvine courses in earth sciences and public health; Developed and graded exams"
      ]
    },
    {
      title: "Smithsonian Institution, Office of Environmental and External Affairs",
      company: "Washington, D.C.",
      position: "Program Assistant (GS-11) for Dr. Thomas E. Lovejoy",
      period: "1991 to 1994",
      responsibilities: [
        "Science advisor to the National Museum of Natural History for their Oceans Exhibition and book",
        "Coordinated workshops of leading researchers to initiate a Global Biodiversity Inventory",
        "Consulted with White House Scientific Advisory Panel to prepare research for first Earth Summit"
      ]
    },
    {
      title: "Scripps Institution of Oceanography, Marine Research Division",
      company: "San Diego, CA",
      position: "Marine Microbiologist, and Certified Research Diver for Dr. Paul Jensen",
      period: "1988 to 1990",
      responsibilities: [
        "Collected environmental samples; Isolated, identified, preserved and mass cultured individual microorganisms; Extracted secondary metabolites from isolates.",
        "Screened extracts by chemical separation and bio-assays to test for anti-fungal properties and novel anti-cancer compounds.",
        "As a Scripps Certified Research Diver, I went on four expeditions aboard research vessels in the Caribbean to collect samples and conduct research."
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <FadeText 
        text="Professional Career"
        className="text-4xl font-bold mb-6"
        direction="up"
      />
      <div>
        {careerEntries.map((entry, index) => (
          <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>{entry.title}</CardTitle>
              <CardDescription>{entry.company}</CardDescription>
            </CardHeader>
            <CardContent className="font-medium">
              <p className="font-semibold text-indigo-600 text-lg">{entry.position}</p>
              <p className="text-base text-gray-700 mb-2">{entry.period}</p>
              <ul className="list-disc list-inside space-y-1">
                {entry.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-base">{responsibility}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Courses Taught</h2>
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle>Courses Taught</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-bold text-xl mb-2">Twenty-Five Courses taught in College of Health and Human Services, Trident University International</h3>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg">Undergraduate:</h3>
                <p className="text-base font-medium">Environmental Health and Safety; Water Quality; Hazardous Wastes; Vector Control; Wastewater Management; Introduction to Epidemiology; Global Health and Sustainability; Industrial Hygiene and Occupational Health; Microbiology; Food Protection; Pest Control; Demography and Health; Senior Capstone</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Master Program:</h3>
                <p className="text-base font-medium">Environmental Health Assessment; Environmental and Occupational Health Administration; Environmental and Occupational Epidemiology</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Doctoral Program:</h3>
                <p className="text-base font-medium">Epidemiology; Research Methods; Global Epidemiology; Qualitative Research; Current Issues in Global Health Research; Dissertation Seminar; Dissertation Research</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
