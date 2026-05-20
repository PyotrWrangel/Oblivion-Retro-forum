function BaseCard({ title, subtitle, children }) {
  return (

      <div className="mx-auto pt-2 bg-[#dacca3] w-300 mt-[20px] md-[20px] border-4 border-[#5b4732] ring-4 ring-[#3a2a1a] ring-offset-4 ring-offset-[#BFB69C] p-4">

    
            {title && (
                      <div className=" bg-[#68513a]">
               <p className="font-serif text-center font-[700] text-[28px] text-[#EEE2BF]">
                {title}
              </p>
              </div>
              
        )}
        {subtitle && (
                <p className="font-serif text-center text-[28px] m-auto mt-6 font-bold text-[#5B4732]">{subtitle}</p>
          )}
    
          <div className="m-2">
            {children}
        </div>
      </div>
  );
}

export default BaseCard;
