import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import Women from "../assets/women-enjoying-mental-health 1 (1).svg"
export default function Sizing() {
  const { t } = useTranslation()
  // const [dir] = useState(i18n.dir()) // احصل على direction من i18n

  const Blocks = [
    {
      id: 1,
      title: "measurementInstructions.chest.title",
      body: `measurementInstructions.chest.steps`,
    },
    {
      id: 2,
      title: "measurementInstructions.hip.title",
      body: `measurementInstructions.hip.steps`,
    },
    {
      id: 3,
      title: "measurementInstructions.chest.title",
      body: `measurementInstructions.tips.points`,
    },
  ]
  return (
    <div dir="ltr" className=" container m-auto bg-[rgb(255,252,249)] ">
      {/* <div
        className={`flex w-fit items-center relative ${
          dir === "rtl" ? "left-[220px]" : "left-[1220px]"
        } top-[85px]`}
      >
        <MyButton title={"skip"} s="text-[16px]!" r={"rounded-[10px]!"} />
      </div> */}

      <div className=" h-[95vh] flex justify-center items-center flex-col">
        <div className=" flex sm:gap-[30px] gap-2 sm:flex-row flex-col">
          <div className="sm:min-w-[410px] sm:mt-0 mt-[300px]  sm:h-[522px] h-[172px] min-w-[142px] overflow-hidden sm:rounded-none  rounded-tr-[250px]  rounded-br-[250px]  rounded-bl-[550px] rounded-tl-[550px]">
            <img src={Women} className="   w-full h-full" alt="img" />
          </div>
          <div className="text-[#1A1A1A] flex justify-center items-center flex-col max-w-[650px]">
            <h1 className="font-bold  hidden sm:block my-3 text-[40px] leading-[100%]">
              {t("sizeGuide.title")}
            </h1>
            <p className="sm:font-semibold font-normal  leading-[170%] px-7 sm:px-0 sm:text-[24px] text-[15px] ">
              {t("sizeGuide.description")}
            </p>
            <h3 className="sm:text-[16px] text-[14px]  sm:mt-0 mt-2 sm:px-2 px-7 text-[#FF0000] font-semibold sm:font-medium">
              {t("sizeGuide.note")}
            </h3>
            <div className="flex gap-7 mt-2 sm:justify-center flex-col sm:flex-row">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <div>
                  <label
                    className="font-semibold min-w-[248px]  my-4 block  sm:text-[20px] text-[12px] leading-[100%]"
                    htmlFor="id"
                  >
                    {t(`sizeGuide.chest`)}
                  </label>
                  <input
                    id={"id"}
                    className="outline-none min-w-[248px] w-full px-3 py-3  bg-[#FFFFFF] shadow-[#00000040] rounded-2xl "
                    type="text"
                    placeholder="85cm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="id2"
                    className="font-semibold  my-2.5 block sm:text-[20px] text-[12px] leading-[100%]"
                  >
                    {t(`sizeGuide.hip`)}
                  </label>
                  <input
                    id={"id2"}
                    className="outline-none w-full mb-4 min-w-[248px] px-3 py-3  bg-[#FFFFFF] shadow-[#00000040] rounded-2xl "
                    type="text"
                    placeholder="85cm"
                  />
                </div>
                <Button
                  variant="default"
                  title={t("saveButton")}
                  className="text-[16px]! rounded-[16px]! w-full! h-[50px]!"
                />
              </form>
              <div className="mb-4 sm:mb-0">
                {Blocks.map((block) => {
                  return (
                    <div className="" key={block.id}>
                      <h2 className="font-semibold my-2 text-[12px] leading-[100%]">
                        {t(block.title)}
                      </h2>
                      <p className="max-w-[315px] leading-[150%] text-[#1A1A1A] p-2 myShadow rounded-2xl bg-[#FFFFFF]  font-normal text-[12px] leading-[100%]">
                        {t(block.body)}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
