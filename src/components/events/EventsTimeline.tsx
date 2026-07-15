import EventRow from "./EventRow";

const events = [
  {
    title: "Sunday Wellness Meet",
    displayDate: "19 April 2026",
    description:
      "A vibrant community morning hosted at our residents' amphitheatre, bringing together yoga, drumming activities, a health check-up camp, and curated breakfast stalls from wellness partners.",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop",
    year: 2026,
    month: 4,
    day: 19,
  },
  {
    title: "Free Health Check-up Camp",
    displayDate: "4 April 2026",
    description:
      "In collaboration with a leading hospital, this free camp offered ECG, PFT, lab tests, and general physician consultations, encouraging preventive wellness within the community.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    year: 2026,
    month: 4,
    day: 4,
  },
  {
    title: "Community Health Summit 2026",
    displayDate: "22 March 2026",
    description:
      "Residents came together for a day dedicated to health, wellness, and community, featuring focused sessions on mind and body wellbeing, nutrition, and lifestyle.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    year: 2026,
    month: 3,
    day: 22,
  },
  {
    title: "Women's Day Celebration",
    displayDate: "8 March 2026",
    description:
      "A vibrant community evening honouring the achievements of the women who make our neighbourhoods thrive, with performances, storytelling, and a shared celebration dinner.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
    year: 2026,
    month: 3,
    day: 8,
  },
  {
    title: "Community Streets Festival",
    displayDate: "1 March 2026",
    description:
      "Residents reclaimed the streets for a morning of movement, wellness, and connection — yoga, cycling, court games, and shared moments across every generation.",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop",
    year: 2026,
    month: 3,
    day: 1,
  },
  {
    title: "Music & Mindful Living Evening",
    displayDate: "14 February 2026",
    description:
      "An evening of live music, mindful conversation, and community warmth, marking a season of connection with performances and a cancer awareness screening camp.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop",
    year: 2026,
    month: 2,
    day: 14,
  },
  {
    title: "Christmas Celebrations",
    displayDate: "25 December 2025",
    description:
      "Refined festivity, timeless joy — residents came together to celebrate Christmas with carols, laughter, and the crowning of the season's most cherished traditions.",
    image:
      "https://images.unsplash.com/photo-1482849297070-f4fae2173efe?q=80&w=800&auto=format&fit=crop",
    year: 2025,
    month: 12,
    day: 25,
  },
  {
    title: "Winter Fiesta",
    displayDate: "21 December 2025",
    description:
      "One street, one community — a winter fiesta brought together food, music, and craft stalls, wrapping the season's spirit into an evening families won't forget.",
    image:
      "https://images.unsplash.com/photo-1482575832494-771f74bf6857?q=80&w=800&auto=format&fit=crop",
    year: 2025,
    month: 12,
    day: 21,
  },
];

export default function EventsTimeline() {
  return (
    <section className="w-full bg-[#F8F5F1]">
      <div className="divide-y divide-[#E5DFD6]">
        {events.map((e, i) => (
          <EventRow key={e.title} {...e} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}