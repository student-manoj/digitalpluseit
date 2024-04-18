const Heading = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-primary">{props.title}</div>
        <div className="font-bold lg:text-[40px] md:text-[30px] text-[20px] text-center md:w-[547px] text-white">
          {props.titleName}
        </div>
      </div>
    </>
  );
};

export default Heading;
