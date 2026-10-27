function QuestSection({ title, children }) {
  return (
    <div className="mt-4 border-t border-oak-600 pt-3 text-left text-fluid-base leading-relaxed text-oak-600">
      <h3 className="mb-2 font-display text-fluid-lg font-bold text-oak-700">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default QuestSection;