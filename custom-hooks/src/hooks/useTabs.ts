import { useState } from "react";
import { tabInfoType } from "../components/UseTabs";

interface UseTabsReturnType {
  activeIndex: number;
  activeItem: tabInfoType;
  changeItem: (index: number) => void;
}

export default function useTabs(
  initialTab: number,
  tabList: tabInfoType[]
): UseTabsReturnType {
  const [activeIndex, setActiveIndex] = useState<number>(initialTab);
  return {
    activeIndex,
    activeItem: tabList[activeIndex],
    changeItem: setActiveIndex,
  };
}
