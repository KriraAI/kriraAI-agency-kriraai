const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <div 
      className="bg-slate-300 mb-3 mr-3 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm text-black duration-300 dark:bg-[#2C303B] dark:text-white ">
      {text}
    </div>
  );
};

export default TagButton;
