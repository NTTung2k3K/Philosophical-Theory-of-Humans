import { useState, useEffect } from "react";

export function useScrollSpy(selectors: string[], options?: IntersectionObserverInit) {
    const [activeId, setActiveId] = useState<string>();

    useEffect(() => {
        const elements = selectors.map((selector) => document.querySelector(selector));

        if (elements.some((element) => element === null)) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter((entry) => entry.isIntersecting);

                if (visibleEntries.length === 0) {
                    // Nếu không có phần tử nào hiện, set active cho phần tử đầu tiên
                    setActiveId(selectors[0].slice(1));  // Lấy ID từ selector (vd: #home => home)
                } else {
                    // Nếu có phần tử hiện, chọn phần tử đầu tiên trong visibleEntries
                    setActiveId(visibleEntries[0].target.getAttribute("id") ?? undefined);
                }
            },
            {
                rootMargin: "-20% 0px 0% 0px", // Điều chỉnh rootMargin cho phù hợp
                ...options,
            }
        );

        elements.forEach((element) => {
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [selectors, options]);

    return activeId;
}
