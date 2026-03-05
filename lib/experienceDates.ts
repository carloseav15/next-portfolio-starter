export type ExperienceDateRange = {
  label: string;
  startIso: string;
  endIso: string | null;
  isOngoing: boolean;
};

export const experienceDates = {
  datec: {
    label: "Aug 2014 - Dec 2014",
    startIso: "2014-08-01",
    endIso: "2014-12-01",
    isOngoing: false,
  },
  tismart: {
    label: "Jan 2015 - May 2016",
    startIso: "2015-01-01",
    endIso: "2016-05-01",
    isOngoing: false,
  },
  tiempoCambio: {
    label: "Jun 2016 - Dec 2019",
    startIso: "2016-06-01",
    endIso: "2019-12-01",
    isOngoing: false,
  },
  vcomm: {
    label: "Jan 2017 - Jun 2024",
    startIso: "2017-01-01",
    endIso: "2024-06-01",
    isOngoing: false,
  },
  digicorp: {
    label: "Dec 2019 - Jun 2024",
    startIso: "2019-12-01",
    endIso: "2024-06-01",
    isOngoing: false,
  },
  diaz: {
    label: "Jul 2024 - Dec 2025",
    startIso: "2024-07-01",
    endIso: "2025-12-01",
    isOngoing: false,
  },
  matchdayos: {
    label: "Jan 2026 - Present",
    startIso: "2026-01-01",
    endIso: null,
    isOngoing: true,
  },
} as const satisfies Record<string, ExperienceDateRange>;
