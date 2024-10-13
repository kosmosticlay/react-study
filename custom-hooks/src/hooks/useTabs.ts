/* 탭의 활성 상태를 관리하고, 현재 활성화된 탭의 항목과 변경 함수를 반환 */
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
