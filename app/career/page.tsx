"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeText } from '@/components/ui/fade-text'
import { BlurFade } from '@/components/ui/blur-fade'
import Image from 'next/image'

interface CareerEntry {
  title: string
  company: string
  position: string
  period: string
  responsibilities: string[]
  imageUrl?: string
}

export default function Career() {
  const careerEntries: CareerEntry[] = [
    {
      title: "Graduate Research Coach",
      company: "Huntington Beach, CA",
      position: "Principal Consultant",
      period: "2023 to present",
      responsibilities: [
        "Providing coaching and consulting services to graduate research students in the health, science, business, and education fields.",
        "Working with masters, doctorate, and PhD students, at all phases of research (proposal, research, write-up, defense, publication).",
        "Consulting services include coaching, scientific consulting, statistics, academic review, editing, writing-publication, and defense preparation."
      ],
      imageUrl: "/images/graduate-research-coach.png"
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
      ],
      imageUrl: "/images/coastal-water.png"
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
        "Served on University committees including Institutional Review Board, Doctoral Council and Library Committee.",
        "Twenty-Five Courses taught in College of Health and Human Services, Trident University International:",
      ],
      imageUrl: "/images/trident.png"
    },
    {
      title: "Trident University International",
      company: "Cypress, CA",
      position: "Faculty, College of Health and Human Services",
      period: "2012 to 2018",
      responsibilities: [
        "Taught graduate courses in public health, epidemiology, biostatistics, and research methods.",
        "Served as Dissertation Committee Chair and Member for PhD students.",
        "Served on University committees including Institutional Review Board and Library Committee.",
        "Conducted research in public health, water quality and beach economics.",
        "Awarded for Excellence in Service to the University."
      ],
      imageUrl: "/images/trident.png"
    },
    {
      title: "Gerontological Services, Inc.",
      company: "Santa Monica, CA",
      position: "Research Analyst",
      period: "1994 to 2015",
      responsibilities: [
        "Conducted market research by collecting data regarding the demand for levels of elder-care and retirement communities in different geographical locations.",
        "Performed statistical analysis of the data; Participated in generating surveys, presentation of results from analyses, and the preparation and review of final reports."
      ],
      imageUrl: "/images/gerontological.png"
    },
    {
      title: "Dwight Law Group",
      company: "Irvine, CA",
      position: "Office Manager, Legal Assistant; Accounting",
      period: "2002 to 2012",
      responsibilities: [
        "Managed an intellectual property law firm; Oversaw business, marketing and financial accounts.",
        "Managed the docket; Drafted and prepared court filings; Conducted legal research."
      ],
      imageUrl: "/images/dwight-law.png"
    },
    {
      title: "U.C. Irvine, Urban Water Research Center",
      company: "Irvine, CA",
      position: "Assistant Project Scientist",
      period: "2003 to 2005",
      responsibilities: [
        "Coordinated the leading researchers and stakeholders to examine perchlorate contamination in national drinking waters.",
        "Prepared the final report for the California Department of Health Services."
      ],
      imageUrl: "/images/uc-irvine.png"
    },
    {
      title: "U.C. Irvine, Department of Environmental Analysis and Design",
      company: "Irvine, CA",
      position: "Teaching Assistant",
      period: "1994 to 1997",
      responsibilities: [
        "Presented lectures and reviews for six U.C. Irvine courses in earth sciences and public health; Developed and graded exams."
      ],
      imageUrl: "/images/uc-irvine.png"
    },
    {
      title: "Smithsonian Institution, Office of Environmental and External Affairs",
      company: "Washington, D.C.",
      position: "Program Assistant (GS-11) for Dr. Thomas E. Lovejoy",
      period: "1991 to 1994",
      responsibilities: [
        "Science advisor to the National Museum of Natural History for their Oceans Exhibition and book.",
        "Coordinated workshops of leading researchers to initiate a Global Biodiversity Inventory.",
        "Consulted with White House Scientific Advisory Panel to prepare research for first Earth Summit."
      ],
      imageUrl: "/images/smithsonian.png"
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
      ],
      imageUrl: "/images/scripps.png"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="space-y-6">
        {careerEntries.map((entry, index) => (
          <div key={`${entry.company}-${entry.title}`} className={`relative ${index === 0 ? 'mt-16' : ''}`}>
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
                    text="Professional Career"
                    className="text-4xl font-bold text-black tracking-tight"
                    direction="left"
                  />
                </div>
              </div>
            )}
            <BlurFade direction="right" inView inViewMargin="-100px">
              <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${index === 0 ? 'bg-white' : ''}`}>
                <CardHeader className={`bg-gray-50 border-b ${index === 0 ? 'bg-white' : ''}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-2xl">
                        {entry.title === "Graduate Research Coach" ? (
                          <a 
                            href="https://www.graduateresearchcoach.com/" 
                            className="hover:underline underline hover:text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {entry.title}
                          </a>
                        ) : entry.title === "Coastal Water Research Group" ? (
                          <a 
                            href="https://coastalwaterresearch.com/" 
                            className="hover:underline underline hover:text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {entry.title}
                          </a>
                        ) : entry.title}
                      </CardTitle>
                      <CardDescription>{entry.company}</CardDescription>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-gray-100 border-2 border-gray-100 flex items-center justify-center flex-shrink-0 ml-4 overflow-hidden p-0.5">
                      {entry.imageUrl ? (
                        <Image
                          src={entry.imageUrl}
                          alt={`${entry.title} logo`}
                          width={48}
                          height={48}
                          className="object-contain w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 rounded-full" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="font-medium">
                  <p className="font-semibold text-indigo-600 text-lg">{entry.position}</p>
                  <p className="text-base text-gray-700 mb-2">{entry.period}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {entry.responsibilities.map((responsibility, index) => (
                      <li key={index} className="pl-2">
                        <span className="block pl-2 -indent-2">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                  {entry.title === "Trident University International" && entry.period === "2018 to 2023" && (
                    <Card className="mt-4 bg-gray-50/50">
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-bold text-md">Undergraduate Courses:</h3>
                            <p className="text-sm">Environmental Health and Safety; Water Quality; Hazardous Wastes; Vector Control; Wastewater Management; Introduction to Epidemiology; Global Health and Sustainability; Industrial Hygiene and Occupational Health; Microbiology; Food Protection; Pest Control; Demography and Health; Senior Capstone</p>
                          </div>
                          <div>
                            <h3 className="font-bold text-md">Master Program Courses:</h3>
                            <p className="text-sm">Environmental Health Assessment; Environmental and Occupational Health Administration; Environmental and Occupational Epidemiology</p>
                          </div>
                          <div>
                            <h3 className="font-bold text-md">Doctoral Program Courses:</h3>
                            <p className="text-sm">Epidemiology; Research Methods; Global Epidemiology; Qualitative Research; Current Issues in Global Health Research; Dissertation Seminar; Dissertation Research</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        ))}
      </div>
    </div>
  )
}
