"use client";

import Link from "next/link";
import {
  careerTimeline,
  education,
  profileIdentity,
  technicalSkills,
} from "@/lib/profile";

export default function PrintResumePage() {
  const emailClean = profileIdentity.email;
  const webClean = profileIdentity.website.replace("https://www.", "").replace("https://", "");

  return (
    <div className="print-container mx-auto my-0 max-w-[8.5in] bg-white p-6 font-sans text-black shadow-sm print:my-0 print:p-0 print:shadow-none sm:my-8 sm:p-12 sm:shadow-md">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold uppercase tracking-tight text-gray-900 sm:text-4xl">
          {profileIdentity.fullName}
        </h1>
        <p className="mt-1.5 text-base font-semibold tracking-wide text-gray-700">
          Senior Full-Stack & Mobile Software Engineer
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-600">
          <span>{profileIdentity.location}</span>
          <span>•</span>
          <a href={`mailto:${emailClean}`} className="hover:underline">
            {emailClean}
          </a>
          <span>•</span>
          <a href={profileIdentity.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {webClean}
          </a>
          <span>•</span>
          <a href="https://linkedin.com/in/carancibiav" target="_blank" rel="noopener noreferrer" className="hover:underline">
            linkedin.com/in/carancibiav
          </a>
          <span>•</span>
          <a href="https://github.com/carloseav15" target="_blank" rel="noopener noreferrer" className="hover:underline">
            github.com/carloseav15
          </a>
        </div>
      </div>

      <hr className="my-5 border-t border-gray-300" />

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900">
          Professional Summary
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-gray-800">
          Pragmatic Senior Software Engineer with 7+ years of experience designing, shipping, and maintaining 
          production-grade web and mobile applications across the U.S. and Latin America. Evolved from data center 
          infrastructure operations to mobile development and full-stack architecture, building a strong foundation 
          in system reliability, security-first database design, and end-to-end product delivery. Proven record of 
          translating complex business processes into clean, scalable software. Currently based in the U.S. and 
          seeking a software engineering role to contribute to high-impact teams.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900">
          Technical Skills
        </h2>
        <div className="mt-2.5 space-y-1.5 text-xs">
          {technicalSkills.map((category) => (
            <div key={category.category} className="grid grid-cols-[150px_1fr] gap-4">
              <span className="font-semibold text-gray-700">{category.category}:</span>
              <span className="text-gray-800">{category.skills.join(", ")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900">
          Work Experience
        </h2>
        <div className="mt-3 space-y-5">
          {careerTimeline.map((job) => (
            <div key={`${job.company}-${job.role}`} className="break-inside-avoid">
              <div className="flex items-start justify-between text-xs">
                <div>
                  <span className="font-bold text-gray-900">{job.role}</span>
                  <span className="text-gray-600"> | {job.company}</span>
                </div>
                <div className="text-right text-gray-600">
                  <span>{job.period}</span>
                  <span className="mx-1.5">•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-relaxed text-gray-800">
                {job.highlights.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-6 break-inside-avoid">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900">
          Education
        </h2>
        <div className="mt-2 flex items-start justify-between text-xs">
          <div>
            <span className="font-bold text-gray-900">{education.degree}</span>
            <span className="text-gray-600"> — {education.institution}</span>
          </div>
          <span className="text-gray-600">{education.period}</span>
        </div>
      </section>

      {/* Languages */}
      <section className="break-inside-avoid">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900">
          Languages
        </h2>
        <p className="mt-1 text-xs text-gray-800">
          <strong>English:</strong> Professional working proficiency (Based in the U.S.) · <strong>Spanish:</strong> Native
        </p>
      </section>

      {/* Resume print instructions (on screen only) */}
      <div className="no-print mt-8 rounded-xl border border-blue-200 bg-blue-50 p-4 text-xs text-blue-800">
        <p className="font-bold">Print Instructions:</p>
        <p className="mt-1">
          To save this page as a professional PDF resume:
        </p>
        <ul className="mt-1 list-disc pl-4 space-y-0.5">
          <li>Press <kbd className="rounded border bg-white px-1">Cmd + P</kbd> (Mac) or <kbd className="rounded border bg-white px-1">Ctrl + P</kbd> (Windows).</li>
          <li>Set **Destination** to {`"Save as PDF"`}.</li>
          <li>Ensure **Layout** is set to {`"Portrait"`} and **Paper size** is {`"Letter"`}.</li>
          <li>In **More settings**, set **Margins** to {`"None"`} or {`"Default"`}, and **uncheck** {`"Headers and footers"`}.</li>
        </ul>
        <div className="mt-3 flex gap-4">
          <button
            onClick={() => window.print()}
            className="rounded bg-blue-600 px-3 py-1.5 font-bold text-white hover:bg-blue-700 focus:outline-none"
          >
            Open Print Dialog
          </button>
          <Link href="/resume" className="inline-flex items-center text-blue-600 hover:underline">
            Go back to main site
          </Link>
        </div>
      </div>
    </div>
  );
}
