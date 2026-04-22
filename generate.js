import fs from "fs";
import path from "path";

/**
 * Get ISO week number
 */
function getISOWeek(date = new Date()) {
  const tmp = new Date(date.getTime());
  tmp.setHours(0, 0, 0, 0);

  tmp.setDate(tmp.getDate() + 3 - ((tmp.getDay() + 6) % 7));

  const week1 = new Date(tmp.getFullYear(), 0, 4);

  return (
    1 +
    Math.round(((tmp - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7)
  );
}

/**
 * Zero pad number
 */
function pad(n) {
  return String(n).padStart(2, "0");
}

/**
 * Get Monday–Friday range for ISO week
 */
function getWeekRange(year, week) {
  const jan4 = new Date(year, 0, 4);

  const monday = new Date(jan4);
  monday.setDate(jan4.getDate() - ((jan4.getDay() + 6) % 7) + (week - 1) * 7);

  const friday = new Date(monday);
  friday.setDate(monday.getDate() + 4);

  const format = (d) =>
    d.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  return `${format(monday)} - ${format(friday)}`;
}

/**
 * Write file only if not exists
 */
function writeFileIfMissing(filePath, content) {
  if (fs.existsSync(filePath)) {
    console.log("skip:", filePath);
    return;
  }

  fs.writeFileSync(filePath, content, "utf-8");
  console.log("generated:", filePath);
}

/**
 * Generate single markdown file
 */
function generateFile(year, week) {
  const w = pad(week);

  const dir = path.join("./office", String(year));
  const filePath = path.join(dir, `w${w}.md`);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const range = getWeekRange(year, week);

  const content = `# W${week}, ${year}

<div class="week-meta">
📅 ${range}
</div>
`;

  writeFileIfMissing(filePath, content);
}

/**
 * Main runner
 */
function run() {
  const startYear = 2025;
  const startWeek = 43;

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentWeek = getISOWeek(now);

  for (let year = startYear; year <= currentYear; year++) {
    const fromWeek = year === startYear ? startWeek : 1;
    const toWeek = year === currentYear ? currentWeek : 52;

    for (let w = fromWeek; w <= toWeek; w++) {
      generateFile(year, w);
    }
  }

  console.log("done.");
}

run();
