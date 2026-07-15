const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function buildCalendar(year: number, month: number) {
  const startWeekday = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const prevMonthDays = new Date(year, month - 1, 0).getDate();
  const totalCells = Math.ceil((startWeekday + daysInMonth) / 7) * 7;

  const cells: { day: number; current: boolean }[] = [];
  for (let i = 0; i < totalCells; i++) {
    const dayNum = i - startWeekday + 1;
    if (dayNum < 1) {
      cells.push({ day: prevMonthDays + dayNum, current: false });
    } else if (dayNum > daysInMonth) {
      cells.push({ day: dayNum - daysInMonth, current: false });
    } else {
      cells.push({ day: dayNum, current: true });
    }
  }
  return cells;
}

export default function CalendarChip({
  year,
  month,
  highlightDay,
}: {
  year: number;
  month: number;
  highlightDay: number;
}) {
  const cells = buildCalendar(year, month);

  return (
    <div className="bg-white border border-[#E5DFD6] px-4 py-4 w-full max-w-[240px] mx-auto md:mx-0">
      <p className="font-lato text-xs font-bold uppercase tracking-[0.15em] text-[#1F1F1F] text-center mb-3">
        {MONTH_NAMES[month - 1]} {year}
      </p>
      <div className="grid grid-cols-7 gap-y-1">
        {WEEKDAYS.map((w) => (
          <span key={w} className="font-lato text-[9px] text-[#707070] text-center">
            {w}
          </span>
        ))}
        {cells.map((c, i) => (
          <span
            key={i}
            className={`font-lato text-[11px] w-6 h-6 mx-auto flex items-center justify-center rounded-full ${
              c.current && c.day === highlightDay
                ? "bg-[#C4A065] text-white font-bold"
                : c.current
                ? "text-[#4F4F4F]"
                : "text-[#E5DFD6]"
            }`}
          >
            {String(c.day).padStart(2, "0")}
          </span>
        ))}
      </div>
    </div>
  );
}