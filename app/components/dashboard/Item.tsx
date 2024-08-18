import React from "react";

interface ItemProps {
  item: {
    icon: string;
    count: number;
    info: string;
    infoColor: string;
    infoIcon: React.ReactNode;
  };
}

const Item = ({ item }: ItemProps) => {
  console.log(item);
  return (
    <div className="w-full flex justify-center items-center rounded-[20px] bg-[#FFF] dashboard-item-shadow px-[29px] pt-[36px] pb-[27px] gap-x-[20px]">
      <img src={item.icon} alt="dashboard-item" className="w-[80px] h-[80px]" />
      <div className="flex flex-col">
        <p className="text-[#000] text-[24px] font-bold">{item.count}</p>
        <p
          className="text-[14px] flex items-center gap-x-[8px]"
          style={{
            color: item.infoColor,
          }}
        >
          {item.infoIcon}
          {item.info}
        </p>
      </div>
    </div>
  );
};

export default Item;
