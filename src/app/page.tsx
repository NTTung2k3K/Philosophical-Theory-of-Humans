"use client";

import AnalysisSection from "@/app/_components/analysis";
import ConclusionSection from "@/app/_components/conclusion";
import DevelopmentSection from "@/app/_components/development";
import InfinityBrand from "@/app/_components/infinity-brand";
import OpinionSection from "@/app/_components/opinion";
import TimelineAnimation from "@/app/_components/timeline";
import { SiteHeader } from "@/components/ui/site-header";
import { RandomizedTextEffect } from "@/components/ui/text-randomized";
import { JSX } from "react";

export default function HorizontalScroll(): JSX.Element {
  return (
    <div className="relative">
      <SiteHeader />
      <main>
        <section
          id="welcome"
          className="h-screen flex items-center justify-center tex bg-background bg-red-300"
        >
          <div className="container">
            <div className="text-center">
              <RandomizedTextEffect text="Vì lợi ích mười năm trồng cây<br> Vì lợi ích trăm năm trồng người" />
            </div>
          </div>
        </section>

        <div className="bg-orange-500" id="welcome">
          <InfinityBrand />
        </div>

        <section id="analysis">
          <AnalysisSection />
        </section>

        {/* Section 3: Trồng Người */}
        <section id="role" className="bg-yellow-300">
          <TimelineAnimation />
          <div className="container">
            <h2 className="text-3xl font-bold">
              Trồng Người và Phát Triển Xã Hội
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              “Vì lợi ích mười năm trồng cây, vì lợi ích trăm năm trồng người”
              là một triết lý về sự phát triển bền vững của xã hội. Câu nói này
              phản ánh một tầm nhìn sâu sắc về mối quan hệ giữa con người và sự
              phát triển của xã hội. Con người không chỉ là cá thể sinh học mà
              còn là chủ thể xã hội, có ý thức, giá trị và tiềm năng phát triển
              vượt bậc.
            </p>
            <p className="mt-4 text-xl text-muted-foreground">
              Việc "trồng người" là đầu tư vào giáo dục, đạo đức, và sự phát
              triển toàn diện của con người, nhằm xây dựng một xã hội tiến bộ,
              công bằng và nhân văn.
            </p>
            <p className="mt-4 text-xl text-muted-foreground">
              Trong triết học, con người là trung tâm của mọi hoạt động kinh tế,
              chính trị và xã hội. Aristotle, Immanuel Kant, và Jean-Jacques
              Rousseau đã đưa ra những quan điểm về bản chất, giá trị, và vai
              trò của con người trong sự phát triển xã hội. Aristotle cho rằng
              "Giáo dục là trang bị công cụ cho tâm hồn," trong khi Kant nhấn
              mạnh "Con người là cứu cánh, chứ không phải phương tiện."
            </p>
            <p className="mt-4 text-xl text-muted-foreground">
              Rousseau cũng nói rằng “Con người sinh ra tự do, nhưng ở đâu cũng
              bị trói buộc,” ám chỉ sự cần thiết của giáo dục và khai sáng để
              phát triển con người và xã hội.
            </p>

            <p className="mt-4 text-xl text-muted-foreground">
              Tầm quan trọng của việc "trồng người" không chỉ dừng lại ở giáo
              dục mà còn trong các lĩnh vực như lao động và sản xuất, nơi con
              người không chỉ là lực lượng lao động mà còn là những nhà sáng
              tạo. Karl Marx khẳng định: “Lao động sáng tạo là bản chất của con
              người.”
            </p>

            <p className="mt-4 text-xl text-muted-foreground">
              Con người cũng đóng vai trò then chốt trong nền văn hóa và đạo đức
              của xã hội. Một xã hội phát triển bền vững không chỉ dựa vào tiến
              bộ kinh tế mà còn phụ thuộc vào nền tảng đạo đức, sự công bằng và
              tôn trọng lẫn nhau. Confucius (Khổng Tử) đã dạy: “Người quân tử
              không ngừng tự hoàn thiện mình để làm sáng rõ đạo lý.”
            </p>

            <h3 className="text-2xl font-bold mt-6">Dẫn Chứng Thực Tế</h3>
            <p className="mt-4 text-xl text-muted-foreground">
              Hàn Quốc và Singapore là những minh chứng sống động cho việc đầu
              tư vào con người đã tạo ra những thay đổi vĩ đại trong xã hội. Hàn
              Quốc, từ một quốc gia nghèo sau chiến tranh, đã trở thành một
              trong những nền kinh tế hàng đầu thế giới nhờ chiến lược đầu tư
              vào giáo dục và phát triển con người.
            </p>
            <p className="mt-4 text-xl text-muted-foreground">
              Singapore cũng là một ví dụ điển hình về việc phát triển con người
              và tạo ra sự thịnh vượng kinh tế. Dưới sự lãnh đạo của Lý Quang
              Diệu, Singapore đã trở thành một quốc gia phát triển với một nền
              kinh tế vững mạnh, hệ thống giáo dục hàng đầu và một lực lượng lao
              động sáng tạo.
            </p>

            <p className="mt-4 text-xl text-muted-foreground">
              Cả hai quốc gia này chứng minh rằng, khi xã hội đầu tư vào con
              người, không chỉ đời sống cá nhân mà cả toàn xã hội đều được cải
              thiện và phát triển mạnh mẽ.
            </p>

            <h3 className="text-2xl font-bold mt-6">
              Vai Trò Của Con Người Trong Sự Phát Triển Xã Hội
            </h3>
            <p className="mt-4 text-xl text-muted-foreground">
              Con người luôn là trung tâm của mọi sự biến đổi trong xã hội.
              Trong khi tài nguyên thiên nhiên có thể cạn kiệt và công nghệ có
              thể lỗi thời, con người vẫn là yếu tố bền vững để xây dựng và duy
              trì sự phát triển xã hội. Con người đóng vai trò chính trong ba
              khía cạnh: sáng tạo và đổi mới, giữ gìn giá trị văn hóa, và duy
              trì đạo đức xã hội.
            </p>

            <p className="mt-4 text-xl text-muted-foreground">
              Ví dụ, Elon Musk đã mở ra các xu hướng mới trong ngành công nghiệp
              ô tô và không gian, trong khi ở Việt Nam, các nhà khoa học và nông
              dân đã ứng dụng công nghệ 4.0 trong nông nghiệp để nâng cao năng
              suất và chất lượng sản phẩm.
            </p>

            <p className="mt-4 text-xl text-muted-foreground">
              Con người không chỉ tạo ra sự đổi mới mà còn giữ gìn và làm phong
              phú thêm các giá trị văn hóa của quốc gia. Nhật Bản là một ví dụ
              điển hình về sự kết hợp giữa truyền thống và hiện đại.
            </p>

            <p className="mt-4 text-xl text-muted-foreground">
              Cuối cùng, con người chính là nhân tố định hình đạo đức và trật tự
              xã hội. Sự thành công của các quốc gia Bắc Âu hay các doanh nghiệp
              toàn cầu chú trọng vào phát triển bền vững là minh chứng cho vai
              trò quan trọng của con người trong việc duy trì các giá trị xã
              hội.
            </p>

            <p className="mt-4 text-xl text-muted-foreground">
              Đầu tư vào con người là chìa khóa để mở ra cánh cửa phát triển bền
              vững cho mọi xã hội. Như Nelson Mandela đã nói: “Giáo dục là vũ
              khí mạnh nhất bạn có thể sử dụng để thay đổi thế giới.”
            </p>
          </div>
        </section>

        {/* Other Sections */}
        <section
          id="development"
          className="h-screen flex items-center justify-center bg-muted/50 bg-black"
        >
          <div className="container">
            <h2 className="text-3xl font-bold">Testimonials</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              What our customers say
            </p>
          </div>
        </section>

        <section id="development">
          <DevelopmentSection />
        </section>

        <section id="opinion">
          <OpinionSection />
        </section>
        <section id="conclusion">
          <ConclusionSection />
        </section>
      </main>
    </div>
  );
}
