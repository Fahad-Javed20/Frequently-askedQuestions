interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="w-[800px] mx-auto bg-neutral-900 text-white border-b border-gray-700 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-6 py-2 text-left font-medium text-xl"
      >
        <span className="flex-1">{question}</span>
        <span className="text-2xl font-thin leading-none select-none">
          {isOpen ? "×" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="px-6 py-5 text-gray-300 border-t border-gray-700 text-base leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
