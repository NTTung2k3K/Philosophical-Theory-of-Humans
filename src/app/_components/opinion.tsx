"use client";
import { ReactLenis } from "lenis/react";
import { JSX } from "react";
export default function OpinionSection(): JSX.Element {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="wrapper">
          <section className="text-white h-screen w-full bg-slate-950 flex items-center justify-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="flex w-[90%] items-center justify-between">
              <blockquote className="2xl:text-3xl text-xl px-6 font-medium text-left leading-[140%] tracking-wide w-[58.33%]">
                <p className="mb-3 ">
                  🌱 Câu nói
                  <span className="text-green-500 font-semibold">
                    &quot;Vì lợi ích mười năm trồng cây, vì lợi ích trăm năm
                    trồng người&quot;
                  </span>
                  hàm chứa một triết lý sâu sắc về mối quan hệ giữa con người và
                  sự phát triển bền vững của xã hội. ✅
                </p>
                <p className="text-2xl">
                  🤔 Từ góc nhìn triết học, con người không chỉ là cá thể sinh
                  học mà còn là chủ thể xã hội, có ý thức, giá trị và tiềm năng
                  phát triển vượt bậc. 🌟 Việc &quot;trồng người&quot; chính là
                  đầu tư vào giáo dục, đạo đức, và sự phát triển toàn diện của
                  con người để xây dựng một xã hội tiến bộ, công bằng và nhân
                  văn.
                </p>
              </blockquote>

              <img
                src="/assets/image/cau mo dau.jpg"
                alt="Philosophy Illustration"
                className="w-[41.67%] rounded-lg shadow-md"
              />
            </div>
          </section>
        </div>

        <section className="text-white   w-full bg-slate-950  ">
          <div className="flex justify-between px-16">
            <div className="sticky top-0 h-screen grid place-content-center w-1/2">
              <p className="text-2xl px-8 font-medium text-left tracking-tight leading-[120%]">
                <span className="font-bold">🌟 Con người</span>, trong triết
                học, là thực thể trung tâm với giá trị vượt thời gian, đóng vai
                trò quan trọng trong mọi lĩnh vực.
                <span className="font-bold">💡 Triết học</span> khám phá bản
                chất con người qua:
                <br />
                <span className="font-bold">- 🧠 Tự do cá nhân</span>
                <br />
                <span className="font-bold">- 🌈 Trách nhiệm xã hội</span>
                <br />
                <span className="font-bold">- 📚 Giáo dục</span>
                <br />
                <span className="font-bold">- ⚒️ Lao động</span>
                <br />
                Những khái niệm cơ bản này giúp định hình tư duy và hành động
                của xã hội.
              </p>
            </div>

            <div className="grid gap-2 w-1/2">
              {/* Figure 1 */}
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-green-500 h-[400px] w-[40rem] rounded-lg rotate-6 p-4 flex flex-col items-center gap-4">
                  <h2 className="text-xl font-semibold text-center flex items-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    🌱 Con người là một thực thể tự do
                  </h2>
                  <img
                    src="/assets/image/phantich1.jpg"
                    alt="Con người là một thực thể tự do"
                    className="h-[300px] w-[550px] rounded-lg object-cover"
                  />
                </article>
              </figure>

              {/* Figure 2 */}
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-red-400 h-[400px] w-[40rem] rounded-lg p-4 flex flex-col items-center gap-4">
                  <h2 className="text-xl font-semibold text-center flex items-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    🔥 Con người là cứu cánh, không phải phương tiện
                  </h2>
                  <img
                    src="/assets/image/phantich2.jpg"
                    alt="Con người là cứu cánh, không phải phương tiện"
                    className="h-[300px] w-[550px] rounded-lg object-cover"
                  />
                </article>
              </figure>

              {/* Figure 3 */}
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-orange-400 h-[400px] w-[40rem] rounded-lg -rotate-3 p-4 flex flex-col items-center gap-4">
                  <h2 className="text-xl font-semibold text-center flex items-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    📚 Giáo dục là công cụ để phát triển bản chất con người
                  </h2>
                  <img
                    src="/assets/image/phantich3.jpg"
                    alt="Giáo dục là công cụ để phát triển bản chất con người"
                    className="h-[300px] w-[550px] rounded-lg object-cover"
                  />
                </article>
              </figure>

              {/* Figure 4 */}
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-blue-400 h-[400px] w-[40rem] rounded-lg p-4 flex flex-col items-center gap-4">
                  <h2 className="text-xl font-semibold text-center flex items-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    🌍 Con người là sinh vật chính trị và sáng tạo
                  </h2>
                  <img
                    src="/assets/image/phantich4.jpg"
                    alt="Con người là sinh vật chính trị và sáng tạo"
                    className="h-[300px] w-[550px] rounded-lg object-cover"
                  />
                </article>
              </figure>

              {/* Figure 5 */}
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-purple-500 h-[400px] w-[40rem] rounded-lg rotate-2 p-4 flex flex-col items-center gap-4">
                  <h2 className="text-xl font-semibold text-center flex items-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    🌟 Phát triển con người gắn liền với sự phát triển xã hội
                  </h2>
                  <img
                    src="/assets/image/phantich5.jpg"
                    alt="Phát triển con người gắn liền với sự phát triển xã hội"
                    className="h-[300px] w-[550px] rounded-lg object-cover"
                  />
                </article>
              </figure>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
