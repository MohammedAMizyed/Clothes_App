import Footer from "../components/ui/Footer"
import { useTranslation } from "react-i18next"

export default function PrivacyPolicy() {
  const { t } = useTranslation()

  type PrivacyData = {
    id: number
    title: string
    paragraph: string
    points?: {
      point?: string
      point2?: string
      point3?: string
      point4?: string
    }
    email?: string
    phone?: string
  }
  //   type TheType = {
  //     privacyData: PrivacyData[]
  //   }
  const privacyData: PrivacyData[] = [
    {
      id: 1,
      title: "privacyPolicy.sections.infoWeCollect",
      paragraph: "privacyPolicy.infoDetails.title",
      points: {
        point: "privacyPolicy.infoDetails.personal",
        point2: "privacyPolicy.infoDetails.nonPersonal",
      },
    },
    {
      id: 2,
      title: "privacyPolicy.sections.howWeUse",
      paragraph: "privacyPolicy.usage.intro",
      points: {
        point: "privacyPolicy.usage.improveServices",
        point2: "privacyPolicy.usage.communicate",
        point3: "privacyPolicy.usage.personalize",
        point4: "privacyPolicy.usage.legal",
      },
    },
    {
      id: 3,
      title: "privacyPolicy.sections.protectInfo",
      paragraph: "privacyPolicy.security",
    },
    {
      id: 4,
      title: "privacyPolicy.sections.cookies",
      paragraph: "privacyPolicy.cookiesText",
    },
    {
      id: 5,
      title: "privacyPolicy.sections.thirdPartySharing",
      paragraph: "privacyPolicy.thirdParty.intro",
      points: {
        point: "privacyPolicy.thirdParty.withConsent",
        point2: "privacyPolicy.thirdParty.byLaw",
        point3: "privacyPolicy.thirdParty.serviceProviders",
      },
    },
    {
      id: 6,
      title: "privacyPolicy.sections.externalLinks",
      paragraph: "privacyPolicy.externalLinksText",
    },
    {
      id: 7,
      title: "privacyPolicy.sections.yourRights",
      paragraph: "privacyPolicy.rights.intro",
      points: {
        point: "privacyPolicy.rights.access",
        point2: "privacyPolicy.rights.update",
        point3: "privacyPolicy.rights.delete",
      },
    },
    {
      id: 8,
      title: "privacyPolicy.sections.policyUpdates",
      paragraph: "privacyPolicy.updates",
    },
    {
      id: 9,
      title: "privacyPolicy.sections.contactUs",
      paragraph: "privacyPolicy.contact.intro",
      email: "privacyPolicy.contact.email",
      phone: "privacyPolicy.contact.phone",
    },
  ]
  return (
    <>
      <div
        dir="rtl"
        className="ltr:hidden mb-20 container m-auto flex items-center justify-center flex-col"
      >
        <h1 className=" my-7 sm:font-bold w-full text-center text-[18px] sm:text-[40px] ">
          {t("privacyPolicy.title")}
        </h1>
        <div className="px-9 sm:px-0">
          <p className="font-semibold text-[14px]">
            {t("privacyPolicy.intro")}
          </p>
          {privacyData.map((data) => {
            return (
              <div key={data.id}>
                <h2 className="font-semibold text-[16px]">{t(data.title)}</h2>
                <p>{t(data.paragraph)}</p>
                <ul>
                  <li>
                    {t(data.points?.point || "")}
                    {data.points?.point && <span></span>}
                  </li>
                  <li>
                    {t(data.points?.point2 || "")}
                    {data.points?.point2 && <span></span>}
                  </li>
                  <li>
                    {t(data.points?.point3 || "")}
                    {data.points?.point3 && <span></span>}
                  </li>
                  <li>
                    {t(data.points?.point4 || "")}
                    {data.points?.point4 && <span></span>}
                  </li>
                </ul>
                <p>{t(data.email || "")}</p>
                <p>{t(data.phone || "")}</p>
              </div>
            )
          })}
        </div>
      </div>

      <Footer />
    </>
  )
}
