import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useScrollSpy(ids: any, offset = 0) {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            let closestId = null;
            let closestDistance = Infinity;

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ids.forEach((id: any) => {
                const element = document.querySelector(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const distance = Math.abs(rect.top - offset);
                    if (distance < closestDistance && rect.bottom > 0) {
                        closestDistance = distance;
                        closestId = id;
                    }
                }
            });

            if (closestId) {
                setActiveId((closestId as string).replace("#", "")); // Loại bỏ `#` để chỉ lấy id
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Gọi khi mount để set trạng thái ban đầu
        return () => window.removeEventListener("scroll", handleScroll);
    }, [ids, offset]);

    return activeId;
}
