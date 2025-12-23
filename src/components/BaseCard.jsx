function BaseCard({ title, children }) {
  return (
    <>
      <div className="mx-auto pt-2 bg-[#dacca3] w-120 mt-[20px] md-[20px]    border-4 border-[#5b4732] ring-4 ring-[#3a2a1a] ring-offset-4 ring-offset-[#dacca3] p-4">
        <div className=" bg-[#68513a]">
          <p className="font-serif text-center font-[700] text-[16px] text-[#EEE2BF]  ">
            {title}
          </p>
          </div>
          <div className="grid grid-cols-2 gap-4 m-2">{children}</div>
        </div>
    </>
  );
}

export default BaseCard;
