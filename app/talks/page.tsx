"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FadeText } from '@/components/ui/fade-text'

export default function Talks() {
  const talks = [
    {
      date: "February 15, 2012",
      event: "California Beach Water Quality Working Group, Costa Mesa",
      title: "The U.S. EPA Proposed Recreational Water Quality Criteria and the Potential Public Health Burden for Southern California",
      type: "Presented"
    },
    {
      date: "May 25, 2011",
      event: "Headwater to Oceans Conference, San Diego",
      title: "Amounts and Distribution of Recreational Beach Expenditures in Southern California",
      type: "Presented"
    },
    {
      date: "May 25, 2011",
      event: "Headwater to Oceans Conference, San Diego",
      title: "Impacts of Climate Change and Urbanization on Coastal Water Quality in Southern CA",
      type: "Presented"
    },
    {
      date: "May 25, 2011",
      event: "Headwater to Oceans Conference, San Diego",
      title: "Blame the Moon: A Critical Analysis of \"Environmental Sources\" of Enterococci into Southern California Coastal Waters",
      type: "Presented"
    },
    {
      date: "March 17, 2011",
      event: "U.S. EPA National Beach Conference, Miami Beach",
      title: "Blame the Moon: A Critical Analysis of \"Environmental Sources\" of Enterococci into Southern California Coastal Waters",
      type: "Poster"
    },
    {
      date: "March 17, 2011",
      event: "U.S. EPA National Beach Conference, Miami Beach",
      title: "Health Risks Associated with Bathing in Southern California Coastal Waters",
      type: "Poster"
    },
    {
      date: "September 8, 2010",
      event: "California and the World Ocean Conference, San Francisco",
      title: "Valuation of a Recreational Beach Day in Southern California",
      type: "Poster"
    },
    {
      date: "September 8, 2010",
      event: "California and the World Ocean Conference, San Francisco",
      title: "Impacts of Climate Change and Urbanization on Coastal Water Quality in Southern CA",
      type: "Poster"
    },
    {
      date: "April 20, 2009",
      event: "U.S. EPA National Beach Conference, Huntington Beach",
      title: "The Human Tide: Beach Attendance and Bathing Rates for Southern California",
      type: "Poster"
    },
    {
      date: "April 20, 2009",
      event: "U.S. EPA National Beach Conference, Huntington Beach",
      title: "Health Risk of Bathing in Southern California Coastal Waters",
      type: "Poster"
    },
    {
      date: "May 14, 2008",
      event: "California Beach Water Quality Working Group, Costa Mesa",
      title: "The Human Tide: Beach Attendance and Bathing Rates for Southern California",
      type: "Presented"
    },
    {
      date: "October 23, 2007",
      event: "Headwater to Oceans Conference, Long Beach",
      title: "The Human Tide: Beach Attendance and Bathing Rates for Southern California",
      type: "Presented"
    },
    {
      date: "November 18, 2006",
      event: "California and the World Ocean Conference, Long Beach",
      title: "What to do with the Enterococci standard?",
      type: "Presented"
    },
    {
      date: "October 26, 2005",
      event: "Headwaters to Oceans Conference, Huntington Beach",
      title: "The Economic Burden from Illnesses Associated with Recreational Coastal Waters",
      type: "Presented"
    },
    {
      date: "August 24, 2005",
      event: "California Beach Water Quality Working Group, Costa Mesa",
      title: "The Economic Burden from Illnesses Associated with Recreational Coastal Waters",
      type: "Presented"
    },
    {
      date: "July 8, 2005",
      event: "Ocean Emergencies Conference, Long Beach",
      title: "Risk and Severity of Recreational Water Associated Illnesses",
      type: "Presented"
    },
    {
      date: "February 24, 2003",
      event: "Coastal Economics Workshop, University of Southern California",
      title: "The Economic Burden from Illnesses Associated with Recreational Coastal Waters",
      type: "Presented"
    },
    {
      date: "October 28, 2002",
      event: "California and the World Ocean Conference, UC Santa Barbara",
      title: "The Economic Burden from Illnesses Associated with Recreational Coastal Waters",
      type: "Presented"
    },
    {
      date: "June 2, 2001",
      event: "American Association for the Advancement of Science Symposium, UC Irvine",
      title: "El Nino's Effect on Urban Runoff and Coastal Water Quality in Orange County, CA",
      type: "Presented"
    },
    {
      date: "January 27, 2001",
      event: "The Greening X Conference, UC Irvine",
      title: "Estimated health costs for illnesses associated with recreational contact with marine waters contaminated by urban runoff",
      type: "Presented"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <FadeText 
        text="Conference Talks"
        className="text-4xl font-bold mb-6"
        direction="up"
      />
      <Card>
        <CardHeader>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {talks.map((talk, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0 font-medium">
                <p className="font-bold text-indigo-600 text-lg">{talk.date}</p>
                <p className="text-base">{talk.event}</p>
                <p className="italic text-base">
                  <span className="font-bold">{talk.type}: </span>
                  {talk.title}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
