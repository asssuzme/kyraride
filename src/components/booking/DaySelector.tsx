import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { WeekDay } from "@/types/booking";

interface DaySelectorProps {
  selectedDays: WeekDay[];
  onDaysChange: (days: WeekDay[]) => void;
  disabled?: boolean;
}

const DAYS: { value: WeekDay; label: string; shortLabel: string }[] = [
  { value: "monday", label: "Monday", shortLabel: "Mon" },
  { value: "tuesday", label: "Tuesday", shortLabel: "Tue" },
  { value: "wednesday", label: "Wednesday", shortLabel: "Wed" },
  { value: "thursday", label: "Thursday", shortLabel: "Thu" },
];

export function DaySelector({
  selectedDays,
  onDaysChange,
  disabled = false,
}: DaySelectorProps) {
  const toggleDay = (day: WeekDay) => {
    if (selectedDays.includes(day)) {
      onDaysChange(selectedDays.filter((d) => d !== day));
    } else {
      onDaysChange([...selectedDays, day]);
    }
  };

  return (
    <div className="space-y-3">
      <Label className="text-foreground font-medium">Select Days</Label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {DAYS.map((day) => (
          <label
            key={day.value}
            className={`
              flex items-center justify-center gap-2 p-3 rounded-lg border cursor-pointer transition-all
              ${
                selectedDays.includes(day.value)
                  ? "bg-accent/20 border-accent text-foreground"
                  : "bg-input border-border/50 text-muted-foreground hover:border-accent/50"
              }
              ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}
          >
            <Checkbox
              checked={selectedDays.includes(day.value)}
              onCheckedChange={() => !disabled && toggleDay(day.value)}
              disabled={disabled}
              className="sr-only"
            />
            <span className="text-sm font-medium hidden sm:inline">{day.label}</span>
            <span className="text-sm font-medium sm:hidden">{day.shortLabel}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
