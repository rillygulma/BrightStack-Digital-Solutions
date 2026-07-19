"use client";

const suggestions = [
  "What services do you offer?",
  "How much is website development?",
  "Where are you located?",
  "How can I contact you?",
];

export default function SuggestedQuestions({
  onSelect,
}: {
  onSelect: (text: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto border-b p-3">
      {suggestions.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-2 text-sm hover:bg-orange-500 hover:text-white dark:bg-slate-800"
        >
          {item}
        </button>
      ))}
    </div>
  );
}